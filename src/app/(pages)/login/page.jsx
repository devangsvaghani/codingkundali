'use client';

import { signIn } from "next-auth/react";
import { redirect, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

const Login = () => {
  
  const searchParmas = useSearchParams();
  let search = searchParmas.get("callbackUrl");

  if(!search){
    search = "/";
  }

  const {data : session, status} = useSession();
  if(status === "authenticated"){
    redirect(search);
  }

  
  return (
    <div className='h-[90vh]'>
      <div className="flex w-full h-full justify-center items-center">
        <div>
          <h2 className='text-3xl text-center pb-5'>
            Login Here
          </h2>
          <button className='border-2 p-2 rounded-lg text-xl' onClick={() => {signIn("google")}}>
            Continue with Google
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Login