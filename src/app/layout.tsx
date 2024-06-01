
import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/Menu";
import Friends from "@/components/Friends";

export const metadata: Metadata = {
  title: "Spotify Project | Final exam",
  description: "Spotify clone",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="w-full h-full flex flex-col items-center">
        <div className="root max-w-[1740px] w-full h-full flex justify-center">
          <Menu/>
          {children}
          <Friends/>
        </div>
      </body>
    </html>
  );
}
