import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { AlphabetCategory } from '@/types/alphabet-type'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart
} from 'recharts'

const chartConfig = {
  correct: {
    label: 'Correct'
  }
} satisfies ChartConfig

interface LearningResultsProps {
  correctAnswers: number
  totalCards: number
  correctPercentage: number
  currentAlphabet: AlphabetCategory
  handleReset: (e: React.FormEvent) => void
}

export const LearningResults = ({
  correctAnswers,
  totalCards,
  correctPercentage,
  currentAlphabet,
  handleReset
}: LearningResultsProps) => {
  const t = useTranslations('ModalComponent.learning')

  const getResultMessage = () => {
    if (correctPercentage >= 90) return t('results.excellent')
    if (correctPercentage >= 70) return t('results.good')
    if (correctPercentage >= 50) return t('results.fair')
    return t('results.needsPractice')
  }

  const getProgressColor = () => {
    if (correctPercentage >= 90) return '#22c55e'
    if (correctPercentage >= 70) return '#eab308'
    if (correctPercentage >= 50) return '#f97316'
    return '#ef4444'
  }

  return (
    <>
      <DialogHeader className='text-center items-center'>
        <DialogTitle className='font-medium'>{t('results.title')}</DialogTitle>
        <DialogDescription>{getResultMessage()}</DialogDescription>
      </DialogHeader>

      <div className='w-full flex items-center justify-center flex-col mx-auto'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[200px] w-full'
        >
          <RadialBarChart
            data={[{ fill: getProgressColor(), correct: correctAnswers }]}
            startAngle={90}
            endAngle={correctPercentage * 3.6 + 90}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType='circle'
              radialLines={false}
              stroke='none'
              className='first:fill-muted last:fill-background'
              polarRadius={[85, 75]}
            />
            <RadialBar dataKey='correct' background cornerRadius={12} />
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
                          {correctAnswers.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 28}
                          className='fill-muted-foreground text-sm'
                        >
                          {t('results.correctAnswers')}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
        <div className='text-center space-y-2'>
          <p className='text-lg'>
            {t('results.score', {
              correct: correctAnswers,
              total: totalCards
            })}
          </p>
          <DialogDescription>
            {t('completion', {
              alphabet: currentAlphabet
            })}
          </DialogDescription>
        </div>
      </div>

      <DialogFooter className='sm:flex sm:flex-col flex-col gap-1 items-center justify-center'>
        <Button
          variant='default'
          size='lg'
          onClick={handleReset}
          className='select-none'
        >
          {t('buttons.tryAgain')}
        </Button>
      </DialogFooter>
    </>
  )
}
