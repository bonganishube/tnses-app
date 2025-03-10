import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PUT(req: Request, props: { params: Promise<{ courseId: string }> }) {
    const params = await props.params;
    try {
        const { userId } = await auth();

        if(!userId) {
            return new NextResponse("Unathorised", { status: 401 });
        }

        const { list } = await req.json();

        const ownCourse = await db.course.findUnique({
            where: {
                id: params.courseId,
                userId: userId
            }
        });

        if(!ownCourse) {
            return new NextResponse("Unathorised", { status: 401 });
        }

        for (let item of list) {
            await db.chapter.update({
                where: { id: item.id },
                data: { position: item.position }
            });
        }

        return new NextResponse("Success", { status: 200 })
 
    } catch (error) {
        console.log("[REORDER]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}