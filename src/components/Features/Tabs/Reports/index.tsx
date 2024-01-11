import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useTheme } from 'next-themes'
import { CSSProperties } from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { DateRange } from './DateRange'

const data = [
    { month: 'Jan', total: 900, positive: 880 },
    { month: 'Feb', total: 700, positive: 600 },
    { month: 'Mar', total: 1700, positive: 1200 },
    { month: 'Apr', total: 700, positive: 500 },
    { month: 'May', total: 900, positive: 700 },
    { month: 'Jun', total: 1000, positive: 100 },
    { month: 'Jul', total: 1200, positive: 1100 }
]

export function Reports() {
    const { theme: mode } = useTheme()

    return (
        <div>
            <div className="text-md font-semibold text-primary pb-4 -pt-2">
                Calla analyses your customer feedback in realtime to provide you with actionable insights.
            </div>
            <div className="max-w-4xl mx-auto mb-8 gap-4 flex flex-row md:grid grid-cols-2">
                <Card className="p-6 shadow-lg">
                    <h2 className="text-sm font-semibold text-primary">Average Sentiment</h2>
                    <CardContent className="-p-12">
                        <p className="mt-2 text-3xl md:text-4xl font-bold text-green-600">88.6 %</p>
                        <p className="mt-1 text-sm font-medium text-green-600">+0.05 %</p>
                        <p className="mt-4 text-xs font-medium text-gray-500">180 New Data Points</p>
                    </CardContent>
                </Card>
                <Card className="bg-secondary-foreground rounded-lg p-6 shadow-lg">
                    <h2 className="text-sm font-semibold text-primary-foreground">Change in Sentiment</h2>
                    <CardContent className="-p-12">
                        <div className="mt-2 space-y-2 text-[10px] md:text-sm">
                            <div className="flex flex-wrap items-center">
                                <p className="font-medium text-green-600">+0.05%</p>
                                <p className="ml-1 md:ml-[140px] font-medium text-secondary">vs. Prior Week</p>
                            </div>
                            <div className="flex flex-wrap items-center">
                                <p className="font-medium text-red-600">-0.04%</p>
                                <p className="ml-1 md:ml-36 font-medium text-secondary">vs. Prior Month</p>
                            </div>
                            <div className="flex flex-wrap items-center">
                                <p className="font-medium text-green-600">+0.15%</p>
                                <p className="ml-[0.2px] md:ml-[140px] font-medium text-secondary">vs. Prior Quarter</p>
                            </div>
                            <div className="flex flex-wrap items-center">
                                <p className="font-medium text-green-600">+1.51%</p>
                                <p className="ml-[0.01px] md:ml-[140px] font-medium text-secondary">vs. 6 Months Ago</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex flex-col justify-between space-y-2">
                        <CardTitle>Customer Sentiment Over time</CardTitle>
                        <DateRange />
                    </div>
                </CardHeader>
                <CardContent className="pb-4">
                    <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip
                                    content={({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                            return (
                                                <div className="rounded-lg border bg-background p-2 shadow-sm">
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <div className="flex flex-col">
                                                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                                Total
                                                            </span>
                                                            <span className="font-bold text-muted-foreground">
                                                                {payload[0].value}
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                                Average Sentiment
                                                            </span>
                                                            <span className="font-bold">{payload[1].value}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        return null
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    strokeWidth={2}
                                    dataKey="total"
                                    activeDot={{
                                        r: 6,
                                        style: { fill: 'var(--theme-primary)', opacity: 0.25 }
                                    }}
                                    style={
                                        {
                                            stroke: 'var(--theme-primary)',
                                            opacity: 0.25,
                                            '--theme-primary': `hsl(${mode === 'dark' ? '0 0% 98%' : '240 5.9% 10%'})`
                                        } as CSSProperties
                                    }
                                />
                                <Line
                                    type="monotone"
                                    dataKey="positive"
                                    strokeWidth={2}
                                    activeDot={{
                                        r: 8,
                                        style: { fill: 'var(--theme-primary)' }
                                    }}
                                    style={
                                        {
                                            stroke: 'var(--theme-primary)',
                                            '--theme-primary': `hsl(${mode === 'dark' ? '0 0% 98%' : '240 5.9% 10%'})`
                                        } as CSSProperties
                                    }
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
