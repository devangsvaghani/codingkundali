"use client";

import { useRouter } from "next/navigation";
import { TableCell, TableRow } from "../ui/table";
import Loader from "../Loader/Loader";
import { useState } from "react";

const UserRow = ({name, year, leetcode}) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);


  const clickHandler = () => {
    setLoading(true);
    router.push(`/profile/${leetcode}`);
  };

  return (
    <TableRow
      className="cursor-pointer relative"
      onClick={clickHandler}
    >
      <TableCell>{loading ? <Loader /> : name}</TableCell>
      {loading ? "" : <TableCell>{year}</TableCell>}
    </TableRow>
  );
};

export default UserRow;
