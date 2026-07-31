"use client"

import { Course } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/format";

/** Shared sortable column header so all three behave and look the same. */
const SortableHeader = ({
    column,
    label,
}: {
    column: any;
    label: string;
}) => (
    <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-3 h-8 gap-1.5 px-3 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground hover:text-secondaryColor"
    >
        {label}
        <ArrowUpDown className="h-3.5 w-3.5" />
    </Button>
);

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => <SortableHeader column={column} label="Title" />,
    cell: ({ row }) => (
        <span className="font-medium text-secondaryColor">
            {row.getValue("title")}
        </span>
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => <SortableHeader column={column} label="Price" />,
    cell:  ({ row }) => {
        const price = parseFloat(row.getValue("price") || "0");
        return <span className="tabular-nums text-secondaryColor">{formatPrice(price)}</span>
    }
  },
  {
    accessorKey: "isPublished",
    header: ({ column }) => <SortableHeader column={column} label="Status" />,
    cell: ({ row }) => {
        const isPublished = row.getValue("isPublished") || false;

        return (
            <span className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                isPublished
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-secondaryColor/5 text-muted-foreground"
            )}>
                <span className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    isPublished ? "bg-emerald-500" : "bg-slate-400"
                )} />
                {isPublished ? "Published" : "Draft"}
            </span>
        )
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
        const { id } = row.original;

        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full text-muted-foreground hover:text-secondaryColor"
                    >
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {/* asChild keeps this a single anchor rather than nesting
                        a link around the menu item */}
                    <DropdownMenuItem asChild>
                        <Link href={`/teacher/courses/${id}`} className="cursor-pointer gap-2">
                            <Pencil className="h-4 w-4" />
                            Edit
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }
  }
]
