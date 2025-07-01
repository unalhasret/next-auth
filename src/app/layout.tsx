import type { Metadata } from "next";
import AuthProvider from "@/components/auth-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Auth",
  description: "Next auth case",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
