"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div>
      <button
        onClick={() => signIn()}
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Sign in
      </button>
    </div>
  );
}
