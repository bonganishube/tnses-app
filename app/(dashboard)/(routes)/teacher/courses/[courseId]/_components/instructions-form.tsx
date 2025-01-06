"use client"

import React, { useState } from 'react'

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil } from 'lucide-react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import { 
    Form,
    FormControl, 
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils';
import { Course } from '@prisma/client';
import RichEditor from './rich-editor';
import ReadText from './read-text';



interface InstructionsFormProps {
    initialData: Course;
    courseId: string;
};

const formSchema = z.object({
    instructions: z.string().min(1, {
        message: "Instructions are required"
    }),
});


export const InstructionsForm = ({
    initialData, 
    courseId 
}: InstructionsFormProps) => {
    const [isEditing, setIsEditing ] = useState(false);
    const toggleEdit = () => setIsEditing((current) => !current);

    const router = useRouter();
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            instructions: initialData?.instructions || ""
        },
    });

    const { isSubmitting, isValid } = form.formState;

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
            Course Instructions
            <Button onClick={toggleEdit} variant="ghost">
                {isEditing ? (
                    <>Cancel</>
                ) : (
                    <>
                        <Pencil className="h-4 w-4" />
                    </>
                )}
            </Button>
        </div> 
        {!isEditing && (
            <div
            className={cn(
              "text-sm mt-2 text-muted-foreground",
              !initialData.instructions && "text-slate-500 italic"
            )}
          >
            {!initialData.instructions && "No Instructions"}
            {initialData.instructions && (
              <ReadText value={initialData.instructions} />
            )}
          </div>
        )}
        {isEditing && (
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 mt-4"
                >
                    <FormField
                        control={form.control}
                        name="instructions"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <RichEditor placeholder="What is this course about?" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        ) }
                    />
                    <div className="flex items-center gap-x-2">
                        <Button 
                            disabled={!isValid || isSubmitting} 
                            type="submit"
                            variant="secndary"
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </Form>
        )}
    </div>
  )
}

export default InstructionsForm