import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CreateUserForm from "@/components/UserForms/CreateUserForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import DeleteUserForm from "@/components/UserForms/DeleteUserForm";

const Admin = async () => {
  const session = await getServerSession(authOptions);

  if (!session || session.user.email !== process.env.ADMIN_EMAIL) {
    redirect("/");
  }

  return (
    <div className="w-full mt-5 flex flex-col items-center">
      <Tabs defaultValue="create" className="w-full lg:w-1/2">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="create">Create User</TabsTrigger>
          <TabsTrigger value="delete">Delete User</TabsTrigger>
        </TabsList>
        <TabsContent value="create">
          <CreateUserForm />
        </TabsContent>
        <TabsContent value="delete">
          <DeleteUserForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
