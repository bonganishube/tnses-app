import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



export async function DELETE(req: Request, props: { params: Promise<{courseId: string }> }) {
    const params = await props.params;
    try {
        const { userId } = await auth();

        if(!userId) {
            return new NextResponse("Unathorised", { status: 401 })
        }

        const course = await db.course.findUnique({
            where: {
                id: params.courseId,
                userId: userId,
            },
        });


        if (!course) {
            return new NextResponse("Not found", { status: 404 });
        }

        const deletedCourse  = await db.course.delete({
            where: {
                id: params.courseId,
            },
        });

        return NextResponse.json(deletedCourse);

    } catch (error) {
        console.log("[COURSE_ID_DELETE]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export async function PATCH(req: Request, props: { params: Promise<{ courseId: string }> }) {
    const params = await props.params;
    try {
        const { userId } = await auth();
        const { courseId } = params;
        const values = await req.json();

        if (!userId) {
            return new NextResponse("Unathorised", { status: 401 });
        }

        const course = await db.course.update({
            where: {
                id: courseId,
                userId
            },
            data: {
                ...values,
            }
        });
        return NextResponse.json(course)
    } catch (error) {
        console.log("[COURSE_ID]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}