"use client";

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Error = () => {
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const e = searchParams.get("error");
    if (!e) {
      redirect("/");
    }
    setError(e);
  }, []);

  const clickHandler = () => {
    router.back();
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card className="max-w-3/4">
        <CardHeader>
          <CardTitle>{error}</CardTitle>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={clickHandler}>Try Again</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Error;
