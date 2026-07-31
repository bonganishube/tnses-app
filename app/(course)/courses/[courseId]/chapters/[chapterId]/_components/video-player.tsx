"use client"

import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Loader2, Lock, Video } from "lucide-react";

import { cn } from "@/lib/utils";

interface VideoPlayerProps {
    /** Direct URL of the uploaded video file */
    videoUrl: string | null;
    courseId: string;
    chapterId: string;
    nextChapterId?: string;
    isLocked: boolean;
    completeOnEnd: boolean;
    title: string;
};

export const VideoPlayer = ({
    videoUrl,
    courseId,
    chapterId,
    nextChapterId,
    isLocked,
    completeOnEnd,
    title
}: VideoPlayerProps) => {
    const [isReady, setIsReady] = useState(false);
    const router = useRouter();

    const onEnd = async () => {
        try {
            if (completeOnEnd) {
                await axios.put(`/api/courses/${courseId}/chapters/${chapterId}/progress`, {
                    isCompleted: true,
                });
            }

            toast.success("Progress updated");
            router.refresh();

            if (nextChapterId) {
                router.push(`/courses/${courseId}/chapters/${nextChapterId}`)
            }

        } catch (error) {
            toast.error("Something went wrong")
        }
    }

    return (
        <div className="relative aspect-video bg-secondaryColor">
            {isLocked ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-2 text-slate-300">
                    <Lock className="h-8 w-8" />
                    <p className="text-sm">This chapter is locked</p>
                </div>
            ) : !videoUrl ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-2 text-slate-400">
                    <Video className="h-8 w-8" />
                    <p className="text-sm">No video for this chapter yet</p>
                </div>
            ) : (
                <>
                    {!isReady && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Loader2 className="h-8 w-8 animate-spin text-slate-300" />
                        </div>
                    )}
                    <video
                        key={videoUrl}
                        src={videoUrl}
                        title={title}
                        controls
                        controlsList="nodownload"
                        playsInline
                        preload="metadata"
                        onCanPlay={() => setIsReady(true)}
                        onEnded={onEnd}
                        className={cn(
                            "h-full w-full object-contain",
                            !isReady && "opacity-0"
                        )}
                    />
                </>
            )}
        </div>
    )
}
