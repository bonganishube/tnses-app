import React from 'react';
import { auth } from '@clerk/nextjs/server';
import { redirect } from "next/navigation";
import { Banknote, ShoppingCart } from 'lucide-react';
import getAnalytics from '@/actions/get-analytics';
import PageHeader from '@/components/page-header';
import DataCard from './_components/data-card';
import Chart from './_components/chart';

const AnalyticsPage = async () => {
    const { userId } = await auth();

    if(!userId) {
        return redirect("/home")
    }

    const {
        data,
        totalRevenue,
        totalSales,
    } = await getAnalytics(userId);

  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6 lg:p-8">
        <PageHeader
            title="Analytics"
            description="How your courses are performing across sales and revenue."
        />

        <div className="grid gap-4 md:grid-cols-2">
            <DataCard
                label="Total revenue"
                value={totalRevenue}
                icon={Banknote}
                shouldFormat
            />
            <DataCard
                label="Total sales"
                value={totalSales}
                icon={ShoppingCart}
            />
        </div>

        <Chart data={data} />
    </div>
  )
}

export default AnalyticsPage
