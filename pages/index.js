import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { LogInIcon } from 'lucide-react';
import LoginButton from "@/components/login-btn";
import { useSession, signIn, signOut } from "next-auth/react"
import AccessToken from "@/components/access-token";
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Home() {
  const { data: session } = useSession()

  

  return (
    <main className="">
      <div className="flex mt-40 justify-center">
      <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Make your codebases inevitable</h1>
      </div>
      <div className="flex justify-center mt-5">
      <div>
      <LoginButton />
        {
          session &&
          <div className="mt-10 space-y-10">
          <AccessToken />
          </div>
        }
      </div>
        </div>
    </main>
  );
}
