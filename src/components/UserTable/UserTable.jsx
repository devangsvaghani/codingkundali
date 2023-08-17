import axios from "axios";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserRow from "./UserRow";

const UserTable = async () => {
  const res = await axios.post(`${process.env.DOMAIN_URL}/api/user/fetchUsers`);

  const array = res.data.users;
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
          {array.map((user) => {
            return (
              <UserRow user={user} key={user._id}/>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
