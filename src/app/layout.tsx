import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { TopNav } from "@/components/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apartment",
  description: "Apartment management app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.className} dark bg-slate-900`}>
        <div className="grid h-screen grid-rows-[auto,1fr]">
          <TopNav />
          <main className="overflow-y-scroll">{children}</main>
        </div>
        <div id="modal-root" />
        <Toaster />
      </body>
    </html>
  );
}
