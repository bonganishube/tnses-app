"use client"

import React from 'react'
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { 
  Form, 
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import toast from 'react-hot-toast';
import { ArrowRight, BookOpen } from 'lucide-react';

const formSchema = z.object ({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

const CreatePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ""
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/courses", values);
      router.push(`/teacher/courses/${response.data.id}`);
      toast.success("Course created");
    } catch {
      toast.error("Something went wrong")
    };
  }

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col justify-center p-6 md:min-h-[70vh] lg:p-8">
        <div className="rounded-2xl border border-secondaryColor/10 bg-white p-6 shadow-soft sm:p-8">
          <span className="mb-5 flex w-max rounded-xl bg-primaryColor/10 p-3 text-primaryColor">
            <BookOpen className="h-5 w-5" />
          </span>
          <h1 className="font-secondary text-2xl tracking-[-0.01em] text-secondaryColor sm:text-3xl">
            Give your course a title
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            What would you like to name your course? Don&apos;t worry, you can change this later.
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-8 space-y-6"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-secondaryColor">
                      Course title
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        placeholder="e.g. 'Advanced web development'"
                        className="border-secondaryColor/15 focus-visible:border-primaryColor focus-visible:ring-2 focus-visible:ring-primaryColor/25 focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      What will you teach in this course?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-2">
                  <Button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className="gap-2 rounded-full bg-primaryColor text-white hover:bg-primaryColor-600"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Link href="/teacher/courses">
                    <Button
                      type="button"
                      variant="ghost"
                      className="rounded-full text-muted-foreground hover:text-secondaryColor">
                      Cancel
                    </Button>
                  </Link>
              </div>
            </form>
          </Form>
        </div>
    </div>
  );
};

export default CreatePage