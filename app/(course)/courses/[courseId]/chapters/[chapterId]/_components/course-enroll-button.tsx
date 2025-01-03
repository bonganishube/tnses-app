"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import toast from 'react-hot-toast';
import axios from 'axios';
import { LaptopMinimalCheck } from 'lucide-react';

interface CourseEnrollButtonProps {
    price: number;
    courseId: string;
}

const CourseEnrollButton = ({
    price,
    courseId,
}: CourseEnrollButtonProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post(`/api/courses/${courseId}/checkout`)

            window.location.assign(response.data.url);
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

  return (
   <Button
        onClick={onClick}
        disabled={isLoading}
        variant="outline"
        size="sm" 
        className="md:w-auto"
    >
        Enrol for {formatPrice(price)}
        <LaptopMinimalCheck className="h-4 w-4 ml-2" />
   </Button>
  )
}

export default CourseEnrollButton
