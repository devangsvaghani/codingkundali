import FullCard from '@/components/FullCard/FullCard'
import CardSkeleton from '@/components/Skeleton/CardSkeleton'
import { Suspense } from 'react'



const UserProfile = async ({params}) => {

  return (
    <div className="w-full flex flex-col gap-2 items-center my-3">
      <Suspense fallback={<CardSkeleton />}>
         <FullCard username={params.leetcode} />
     </Suspense>
    </div>
  )
}

export default UserProfile