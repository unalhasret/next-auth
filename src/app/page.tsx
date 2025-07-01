"use client";
import { useSession, signOut } from "next-auth/react";
import MainLayout from "@/components/layout/main-layout";
import Login from "@/components/login";
import Logout from "@/components/logout";

export default function Home() {
  const { data: session } = useSession();
  return (
    <MainLayout>
      {session ? (
        <Logout session={session} onClick={() => signOut()} />
      ) : (
        <Login />
      )}
    </MainLayout>
  );
}
