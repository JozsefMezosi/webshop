import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "@frontend/toast-context";
import { Navbar } from "../components/navbar/navbar";
import { AuthProvider } from "./auth-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <ToastContainer>
            <Navbar />
            <div className="pt-16 px-5 ">{children}</div>
          </ToastContainer>
        </body>
      </AuthProvider>
    </html>
  );
}
