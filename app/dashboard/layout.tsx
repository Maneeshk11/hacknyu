import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import LogoutDropdown from "@/components/dashboard/logout-dropdown";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-screen">
        <nav className="p-4 flex items-center justify-between border-b-[1px] border-[#acacac3f]">
          <span className="font-bold text-xl">SMMJ</span>
          <div className="flex items-center gap-x-2">
            <LogoutDropdown />
          </div>
        </nav>
        <div className="px-4">
            <SidebarTrigger />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
