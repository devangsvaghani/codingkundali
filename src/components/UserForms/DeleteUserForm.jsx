"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import Loader from "../Loader/Loader";
import { useState } from "react"

const FormSchema = z.object({
  email: z
    .string({
      required_error: "Required",
    })
    .email({
      message: "Invalid email",
    }),
});

const DeleteUserForm = () => {

  const router = useRouter();
  const { toast } = useToast();
  const [loading, setloading] = useState(false);

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data) {
    setloading(true);
    try{
      const res = await axios.post("/api/user/deleteUser", data);
      // TODO: improve toast for user experience
      if (res.data.success === true) {
        toast({
          title: res.data.message,
        });
      }else{
        toast({
          title: res.data.message,
        });
      }
    }
    catch(e){
      toast({
        variant: "destructive",
        title: "Internal Server Error",
      });
    }
    
    setloading(false);
    router.push('/');
  }

  return (
    <div className="w-full mx-auto flex flex-col items-center mt-8">
      <h2 className="text-2xl text-bold">Delete User</h2>
      {loading ? <Loader /> : ""}
      <Form {...form} className="">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`w-2/3 space-y-6 ${loading ? "blur-sm pointer-events-none" : ""}`}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default DeleteUserForm;
