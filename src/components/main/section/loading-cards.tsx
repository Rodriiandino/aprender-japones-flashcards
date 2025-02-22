import SkeletonCard from './skeleton-card'

export default function LoadingCards() {
  return (
    <section
      className={
        'w-full h-full md:flex content-start md:flex-wrap md:gap-3 gap-1 overflow-y-auto overflow-x-hidden grid grid-cols-5 pr-2'
      }
    >
      {new Array(80).fill(null).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </section>
  )
}
