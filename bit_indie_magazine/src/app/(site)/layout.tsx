import "@/styles/global.css";
import type { Metadata } from "next";
import PageHeader from "@/components/site/header/PageHeader";
import PageFooter from "@/components/site/footer/PageFooter";

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
