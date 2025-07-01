"use client";
import { useSession } from "next-auth/react";
import MainLayout from "@/components/layout/main-layout";

export default function Dashboard(){
    const { data: session } = useSession();
    return(
        <MainLayout>
            <div className="flex flex-col gap-2">
                <span>Access granted because you are signed in.</span>
                <span>Your email: {session?.user?.email}</span>
                <span>Your name: {session?.user?.name}</span>
            </div>
        </MainLayout>
    )
}