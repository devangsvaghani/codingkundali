import {cookies} from "next/headers";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserRow from "./UserRow";
import User from "@/models/User";
import connect from "@/config/database";

const fetchUsers = async () => {
  try{
    await connect();
    const users = await User.find({}).select("name year leetcode");
    return users;
  }
  catch(e){
    return null;
  }
}

const UserTable = async () => {
  // cookies for just dynamic rendering
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

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
