import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function DELETE(
    req: Request,
    props: { params: Promise<{ courseId: string; chapterId: string }> }
) {
    const params = await props.params;
    try {
        const { userId } = await auth();

        if (!userId) {
            return new NextResponse("Unathorised", { status: 401});
        }

        const ownCourse = await db.course.findUnique({
            where: {
                id: params.courseId,
                userId,
            }
        });

        if (!ownCourse) {
            return new NextResponse("Unathorised", { status: 401});
        }

        const chapter = await db.chapter.findUnique({
            where: {
                id: params.chapterId,
                courseId: params.courseId,
            }
        });

        if (!chapter) {
            return new NextResponse("Not Found", { status: 404 });
        }

        if (chapter.videoUrl) {
            const deletedChapter = await db.chapter.delete({
                where: {
                    id: params.chapterId
                }
            });

            const publishedChaptersInCourse = await db.chapter.findMany({
                where: {
                    courseId: params.courseId,
                    isPublished: true,
                }
            });

            if (!publishedChaptersInCourse.length) {
                await db.course.update({
                    where: {
                        id: params.courseId,
                    },
                    data: {
                        isPublished: false,
                    }
                });
            }

            return NextResponse.json(deletedChapter);
        }
        
    } catch (error) {
        console.log("[CHAPTER_ID_DELETE]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export async function PATCH(
    req: Request,
    props: { params: Promise<{ courseId: string; chapterId: string }> }
) {
    const params = await props.params;
    try {
        const { userId } = await auth();
        const { isPublished, ...values } = await req.json();

        if(!userId) {
            return new NextResponse("Unathorised", { status: 401 });
        }

        const ownCourse = await db.course.findUnique({
            where: {
                id: params.courseId, 
                userId
            }
        })

        if(!ownCourse) {
            return new NextResponse("Unathorised", { status: 401 });
        }

        const chapter = await db.chapter.update({
            where: {
                id: params.chapterId,
                courseId: params.courseId,
            },
            data: {
                ...values,
            }
        });

        return NextResponse.json(chapter);

    } catch (error) {
        console.log("[CHAPTER_ID_PATCH]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}