import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE(
    req: Request,
    props: { params: Promise<{ courseId: string, attachmentId: string }>}
) {
    const params = await props.params;
    try {
        const { userId } = await auth();

        if(!userId) {
            return new NextResponse("Unathorised", { status: 401 });
        }

        const courseOwner = await db.course.findUnique({
            where: {
                id: params.courseId,
                userId: userId
            }
        });

        if(!courseOwner) {
            return new NextResponse("Unathorised", { status: 401 })
        }

        const attachment = await db.attachment.delete({
            where: {
                courseId: params.courseId,
                id: params.attachmentId,
            }
        });

        return NextResponse.json(attachment);

    } catch (error) {
        console.log("ATTACHMENT_ID", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}