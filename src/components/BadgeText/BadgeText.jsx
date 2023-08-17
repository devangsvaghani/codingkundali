import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const BadgeText = ({ category, children }) => {
  let color = "";
  if (category === "Easy") {
    color = "bg-green-500";
  } else if (category === "Medium") {
    color = "bg-amber-500";
  } else if (category === "Hard") {
    color = "bg-red-600";
  } else if(category === "All"){
    color = "bg-gray-300"
  } else if(category === "School"){
    color = "bg-sky-500"
  } else if(category === "Basic"){
    color = "bg-green-300"
  }

  return (
    <Button variant="outline" className="relative w-full">
      {category !== "None" ? (
        <Badge className={`absolute -top-3 -left-4 ${color}`}>{category}</Badge>
      ) : (
        ""
      )}
      {children}
    </Button>
  );
};

export default BadgeText;
