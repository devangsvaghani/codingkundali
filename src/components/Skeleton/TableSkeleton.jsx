import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "../ui/skeleton";

const TableSkeleton = () => {
  return (
    <div className="w-full mt-5 flex flex-col justify-center">
      <Table className="w-full md:w-3/4 mx-auto md:text-lg">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Year</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4, 5].map(() => {
            return (
              <TableRow className="cursor-pointer">
                <TableCell>
                  <Skeleton className="h-4 w-[40vw]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-[20vw]" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableSkeleton;
