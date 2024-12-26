import { auth } from "@clerk/nextjs/server";
import {NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function PUT(
    req: Request,
    props: { params: Promise<{ courseId: string; chapterId: string }>}
) {
    const params = await props.params;
    try {
        const { userId } = await auth();
        const { isCompleted } = await req.json();

        if(!userId) {
            return new NextResponse("Unauthorised", { status: 401 })
        }

        const userProgress = await db.userProgress.upsert({
            where: {
                userId_chapterId: {
                    userId,
                    chapterId: params.chapterId,
                }
            },
            update: {
                isCompleted
            },
            create: {
                userId,
                chapterId: params.chapterId,
                isCompleted,
            }
        })

        return NextResponse.json(userProgress);
        

    } catch (error) {
        console.log("[CHAPTER_ID_PROGRESS]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}