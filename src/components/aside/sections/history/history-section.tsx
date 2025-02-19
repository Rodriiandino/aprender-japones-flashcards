import { useLearnHistoryStore } from '@/store/learn-store'
import { HistoryChart } from './history-chart'
import { History } from 'lucide-react'
import { ChartData } from '@/types/card-type'
import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import TooltipCustom from '@/components/tooltip-custom'

export default function HistorySection() {
  const { history, clearHistory } = useLearnHistoryStore()

  const chartData: ChartData[][] = []

  if (history) {
    history.forEach(item => {
      chartData.push([
        {
          alphabet: item.alphabet,
          correct: item.correct,
          total: item.total,
          correctPercentage: item.correctPercentage,
          studyMode: item.studyMode,
          date: item.date,
          fill: 'hsl(var(--chart-1))'
        }
      ])
    })
  }

  return (
    <section className='relative'>
      {history && history.length > 0 ? (
        <>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-2'>
              <History className='w-4 h-4 text-muted-foreground' />
              <h2 className='sm:text-ls text-base font-bold'>History</h2>
            </div>
            <p className='text-sm text-gray-500'>Stats for last session</p>
          </div>
          <TooltipCustom text='Clear all history'>
            <Button
              onClick={clearHistory}
              variant={'ghost'}
              size={'sm'}
              className='absolute top-0 right-0 opacity-70 hover:bg-transparent hover:opacity-100'
            >
              <Trash size={16} />
            </Button>
          </TooltipCustom>
          <HistoryChart chartData={chartData} />
        </>
      ) : (
        <div className='flex gap-1 items-center justify-center text-muted-foreground'>
          <History size={18} />
          <p className='text-sm text-center'>
            Start learning to see your progress.
          </p>
        </div>
      )}
    </section>
  )
}
