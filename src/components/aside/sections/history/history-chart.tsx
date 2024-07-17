'use client'
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart
} from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter
} from '@/components/ui/card'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'
import { ChartData } from '@/types/card-type'

const chartConfig = {
  correct: {
    label: 'Correct'
  }
} satisfies ChartConfig

type HistoryChartProps = {
  chartData: ChartData[]
}

export function HistoryChart({ chartData }: HistoryChartProps) {
  return (
    <Card className='flex flex-col border-none gap-1 pt-2'>
      <CardContent className='flex-1 p-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[120px]'
        >
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={chartData[0].correctPercentage * 3.6 + 90}
            innerRadius={53}
            outerRadius={67}
          >
            <PolarGrid
              gridType='circle'
              radialLines={false}
              stroke='none'
              className='first:fill-muted last:fill-background'
              polarRadius={[55, 50]}
            />
            <RadialBar dataKey='correct' background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-3xl font-bold'
                        >
                          {chartData[0].correct.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'
                        >
                          Correct
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
        <CardDescription className='text-center'>
          {chartData[0].date}
        </CardDescription>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm p-0'>
        <div className='flex items-center gap-2 font-medium leading-none'>
          Learning {chartData[0].alphabet} in {chartData[0].studyMode} mode
        </div>
        <div className='leading-none items-center text-muted-foreground'>
          Leaning {chartData[0].correctPercentage}% of {chartData[0].total}{' '}
          total
        </div>
      </CardFooter>
    </Card>
  )
}
