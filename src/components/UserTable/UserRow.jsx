"use client";

import { useRouter } from "next/navigation";
import { TableCell, TableRow } from "../ui/table";
import Loader from "../Loader/Loader";
import { useState } from "react";

const UserRow = ({user}) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);


  const clickHandler = () => {
    setLoading(true);
    router.push(`/profile/${user.leetcode}`);
  };

  return (
    <TableRow
      className="cursor-pointer relative"
      onClick={clickHandler}
    >
      <TableCell>{loading ? <Loader /> : user.name}</TableCell>
      {loading ? "" : <TableCell>{user.year}</TableCell>}
    </TableRow>
  );
};

export default UserRow;
