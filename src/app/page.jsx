
import { Suspense } from "react";
import TableSkeleton from "@/components/Skeleton/TableSkeleton";
import UserTable from "@/components/UserTable/UserTable";


export default async function Home() {

  

  return (

    <div className="w-full min-h-[80vh]">
      <Suspense fallback={<TableSkeleton />}>
        <UserTable />
      </Suspense> 
    </div>


  );
}
