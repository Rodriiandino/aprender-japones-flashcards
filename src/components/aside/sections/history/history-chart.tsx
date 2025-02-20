import { useTranslations } from 'next-intl'
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
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const chartConfig = {
  correct: {
    label: 'Correct'
  }
} satisfies ChartConfig

interface HistoryChartProps {
  chartData: ChartData[][]
}

export function HistoryChart({ chartData }: HistoryChartProps) {
  const t = useTranslations('AsideComponent.HistorySection.stats')

  const [index, setIndex] = useState(chartData.length - 1)

  const handleNext = () => {
    setIndex(prevIndex => Math.min(prevIndex + 1, chartData.length - 1))
  }

  const handlePrev = () => {
    setIndex(prevIndex => Math.max(prevIndex - 1, 0))
  }

  useEffect(() => {
    setIndex(chartData.length - 1)
  }, [chartData])

  return (
    <Card className='flex flex-col border-none gap-1 pt-2 shadow-none'>
      <CardContent className='flex-1 p-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[115px]'
        >
          <RadialBarChart
            data={chartData[index]}
            startAngle={90}
            endAngle={chartData[index][0].correctPercentage * 3.6 + 90}
            innerRadius={51}
            outerRadius={71}
          >
            <PolarGrid
              gridType='circle'
              radialLines={false}
              stroke='none'
              className='first:fill-muted last:fill-background'
              polarRadius={[55, 47]}
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
                          className='fill-foreground text-2xl font-bold'
                        >
                          {chartData[index][0].correct.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'
                        >
                          {t('correctAnswers')}
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
          {chartData[index][0].date}
        </CardDescription>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm p-0'>
        <div className='flex leading-none'>
          <p className='text-center'>
            {t('learning')} {chartData[index][0].alphabet} {t('in')}{' '}
            {chartData[index][0].studyMode} {t('mode')}
          </p>
        </div>
        <div className='leading-none text-muted-foreground'>
          <p className='text-center'>
            {chartData[index][0].correctPercentage}% {t('percentage')}{' '}
            {chartData[index][0].total} {t('total')}
          </p>
        </div>
        <div className='flex gap-2 justify-center'>
          <Button
            variant={'ghost'}
            size={'icon'}
            className='h-5'
            onClick={handlePrev}
            disabled={index === 0}
          >
            <ChevronLeft size={16} />
          </Button>
          <p className='text-muted-foreground select-none'>
            {index + 1}/{chartData.length}
          </p>
          <Button
            variant={'ghost'}
            size={'icon'}
            className='h-5'
            onClick={handleNext}
            disabled={index === chartData.length - 1}
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
