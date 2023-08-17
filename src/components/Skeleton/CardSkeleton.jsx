import React from "react";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BadgeText from "../BadgeText/BadgeText";
import { SiCodingninjas, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const CardSkeleton = () => {
  let array = [
    {
      icon: <SiCodingninjas />,
      platform: "Coding Ninjas",
      problems: [
        {
          level: "All",
          count: "",
        },
        {
          level: "Easy",
          count: "",
        },
        {
          level: "Medium",
          count: "",
        },
        {
          level: "Hard",
          count: "",
        },
      ],
    },

    {
      icon: <SiLeetcode />,
      platform: "Leetcode",
      problems: [
        {
          level: "All",
          count: "",
        },
        {
          level: "Easy",
          count: "",
        },
        {
          level: "Medium",
          count: "",
        },
        {
          level: "Hard",
          count: "",
        },
      ],
    },

    {
      icon: <SiGeeksforgeeks />,
      platform: "Geeksforgeeks",
      problems: [
        {
          level: "All",
          count: "",
        },
        {
          level: "School",
          count: "",
        },
        {
          level: "Basic",
          count: "",
        },
        {
          level: "Easy",
          count: "",
        },
        {
          level: "Medium",
          count: "",
        },
        {
          level: "Hard",
          count: "",
        },
      ],
    },
  ];

  return (
    <div className="w-11/12">
      <Card className="$pointer-events-none">
        <CardHeader>
          <CardTitle>
            <div className="flex flex-row gap-5 items-center">
              <Skeleton className="h-12 w-12 rounded-full" />
              <Skeleton className={"h-4 w-[10vw]"} />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full flex flex-row gap-5 justify-center flex-wrap">
            {array.map(({ icon, platform, problems }, key) => {
              return (
                <Card className="min-w-[220px]" key={key}>
                  <CardContent className="mt-5 flex flex-col gap-4">
                    <div className="w-full flex flex-row gap-3 items-center justify-center my-4 text-xl">
                      {icon}
                      <p>{platform}</p>
                    </div>
                    {problems.map((category, key) => {
                      return (
                        <BadgeText category={category.level} key={key}>
                          <Skeleton className="h-5 w-[80px]" />
                        </BadgeText>
                      );
                    })}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardSkeleton;
