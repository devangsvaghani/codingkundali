import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserRow from "./UserRow";
import { fetchUsers } from "@/utils/user/fetchUsers";

const UserTable = async () => {
  const array = await fetchUsers();
  
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
          {array && array.map((user, key) => {
            return (
              <UserRow name={user.name} year={user.year} leetcode={user.leetcode} key={key}/>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
