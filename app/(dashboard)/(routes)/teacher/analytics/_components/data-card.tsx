import { formatPrice } from '@/lib/format';
import { type LucideIcon } from 'lucide-react';
import React from 'react';

interface DataCardProps {
    value: number;
    label: string;
    shouldFormat?: boolean;
    icon?: LucideIcon;
}

const DataCard = ({
    value,
    label,
    shouldFormat,
    icon: Icon,
}: DataCardProps) => {
  return (
    <div className="rounded-2xl border border-secondaryColor/10 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-card">
        <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">{label}</p>
            {Icon ? (
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primaryColor/10 text-primaryColor">
                    <Icon className="h-4 w-4" />
                </span>
            ) : null}
        </div>
        <p className="mt-3 text-3xl font-semibold tracking-tight text-secondaryColor">
            {shouldFormat ? formatPrice(value) : value}
        </p>
    </div>
  )
}

export default DataCard
