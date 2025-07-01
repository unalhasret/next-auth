"use client";
import { useSession } from "next-auth/react";
import MainLayout from "@/components/layout/main-layout";

export default function Dashboard(){
    const { data: session } = useSession();
    return(
        <MainLayout>
            <div>
                <span>Access granted because you are signed in.</span>
                <span>Your email: {session?.user?.email}</span>
                <span>Your name: {session?.user?.name}</span>
            </div>
        </MainLayout>
    )
}