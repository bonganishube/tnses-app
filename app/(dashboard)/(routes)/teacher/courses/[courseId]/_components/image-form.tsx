"use client"

import React, { useState } from 'react'

import * as z from "zod";
import axios from "axios";
import { ImageIcon, Pencil, PlusCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button"
import { Course } from '@prisma/client';
import Image from 'next/image';
import { FileUpload } from '@/components/file-upload';



interface ImageFormProps {
    initialData: Course
    courseId: string;
};

const formSchema = z.object({
    imageUrl: z.string().min(1, {
        message: "Image is required"
    }),
});


export const ImageForm = ({
    initialData, 
    courseId 
}: ImageFormProps) => {
    const [isEditing, setIsEditing ] = useState(false);
    const toggleEdit = () => setIsEditing((current) => !current);

    const router = useRouter();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/courses/${courseId}`, values);
            toast.success("Course updated");
            toggleEdit();
            router.refresh();
        } catch {
            toast.error("Something went wrong")
        };
    }

  return (
    <div className="mt-6 border rounded-md p-4">
        <div className="font-medium flex items-center justify-between">
            Course image
            <Button onClick={toggleEdit} variant="ghost">
                {isEditing && (
                    <>Cancel</>
                )}
                {!isEditing && !initialData.imageUrl && (
                    <>
                        <PlusCircle className="w-4 h-4" />
                        {/* Add */}
                    </>
                )}
                {!isEditing && initialData.imageUrl && (
                    <>
                        <Pencil className="h-4 w-4" />
                        {/* Edit image */}
                    </>
                )}
            </Button>
        </div> 
        {!isEditing && (
            !initialData.imageUrl ? (
                <div className="flex items-center justify-center h-60 bg-slate-200 mt-4 rounded-md">
                    <ImageIcon className="h-10 w-10 text-slate-500"/>
                </div>
            ) : (
                <div className="relative aspect-video mt-2">
                    <Image 
                        alt="Upload"
                        fill
                        className="object-cover rounded-md"
                        src={initialData.imageUrl}
                    />
                </div>
            )
        )}
        {isEditing && (
            <div>
                <FileUpload
                    endpoint="courseImage"
                    onChange={(url) => {
                        if (url) {
                            onSubmit({ imageUrl: url })
                        }
                    }}
                />
                <div className="text-sm text-muted-foreground mt-4">
                    16:9 aspect ratio recommended
                </div>
            </div>
        )}
    </div>
  )
}

export default ImageForm