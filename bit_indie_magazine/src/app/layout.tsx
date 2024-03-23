import type { Metadata } from "next";
import "./globals.css";
import PageHeader from "@/components/index/header/PageHeader";
import PageFooter from "@/components/index/footer/PageFooter";

export const metadata: Metadata = {
  title: "Bit Indie Magazine",
  description: "Doing retro in a modern way",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className=" min-h-screen bg-slate-800">

        <PageHeader />

        {children}

        <PageFooter />

      </body>
    </html>
  );
}
