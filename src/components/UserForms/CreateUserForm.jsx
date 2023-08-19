"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import Loader from "../Loader/Loader";
import { useState } from "react";

const FormSchema = z.object({
  name: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: z
    .string({
      required_error: "Required",
    })
    .email({
      message: "Invalid email",
    }),
  year: z.string(),
  leetcode: z.string({
    required_error: "Required",
  }),
  codingninjas: z.string({
    required_error: "Required",
  }),
  geeksforgeeks: z.string({
    required_error: "Required",
  }),
});

const CreateUserForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setloading] = useState(false);

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data) {
    setloading(true);
    try{
      const res = await axios.post("/api/user/register", data);
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
    <div className="w-full mx-auto flex flex-col items-center mt-8 relative">

      <h2 className="text-2xl text-bold">Add User</h2>
      {loading ? <Loader /> : ""}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`w-2/3 space-y-6 ${loading ? "blur-sm pointer-events-none" : ""}`}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Year</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Year" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="First">First</SelectItem>
                    <SelectItem value="Second">Second</SelectItem>
                    <SelectItem value="Third">Third</SelectItem>
                    <SelectItem value="Fourth">Fourth</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="leetcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Leetcode Username</FormLabel>
                <FormControl>
                  <Input placeholder="Leetcode Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="codingninjas"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Codingninjas Username</FormLabel>
                <FormControl>
                  <Input placeholder="Codingninjas Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="geeksforgeeks"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Geeksforgeeks Username</FormLabel>
                <FormControl>
                  <Input placeholder="Geeksforgeeks Username" {...field} />
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

export default CreateUserForm;
