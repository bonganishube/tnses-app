"use client";

import React from 'react';
import { BarChart3 } from 'lucide-react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { formatPrice } from '@/lib/format';

interface ChartProps {
    data:{
        name: string;
        total: number;
    }[];
}

// Brand orange one step down (#DB5200), the 500 step sits under 3:1 against a
// white card; this passes contrast while staying on-palette.
const BAR_FILL = "#DB5200";

const ChartTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null;

    return (
        <div className="rounded-lg border border-secondaryColor/10 bg-white px-3 py-2 shadow-card">
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="text-sm font-semibold text-secondaryColor">
                {formatPrice(payload[0].value)}
            </p>
        </div>
    );
};

const Chart = ({
    data
}: ChartProps) => {
  const hasData = data.some((entry) => entry.total > 0);

  return (
    <div className="rounded-2xl border border-secondaryColor/10 bg-white p-6 shadow-soft">
        <div className="mb-6">
            {/* Single series, so the title names it and no legend is needed */}
            <h2 className="font-semibold text-secondaryColor">Revenue by course</h2>
            <p className="text-sm text-muted-foreground">
                Total earned per course to date.
            </p>
        </div>

        {hasData ? (
            <ResponsiveContainer width="100%" height={320}>
                <BarChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
                    <CartesianGrid
                        vertical={false}
                        stroke="#172243"
                        strokeOpacity={0.08}
                    />
                    <XAxis
                        dataKey="name"
                        stroke="#64748b"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickMargin={10}
                    />
                    <YAxis
                        stroke="#64748b"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        width={72}
                        tickFormatter={(value) => formatPrice(value)}
                    />
                    <Tooltip
                        content={<ChartTooltip />}
                        cursor={{ fill: "#172243", fillOpacity: 0.04 }}
                    />
                    <Bar
                        dataKey="total"
                        name="Revenue"
                        fill={BAR_FILL}
                        radius={[4, 4, 0, 0]}
                        maxBarSize={56}
                    />
                </BarChart>
            </ResponsiveContainer>
        ) : (
            <div className="flex h-[320px] flex-col items-center justify-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondaryColor/5 text-secondaryColor">
                    <BarChart3 className="h-5 w-5" />
                </span>
                <p className="font-medium text-secondaryColor">No revenue yet</p>
                <p className="max-w-xs text-sm text-muted-foreground">
                    Once learners start purchasing your courses, earnings will show up here.
                </p>
            </div>
        )}
    </div>
  )
}

export default Chart
