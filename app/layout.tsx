import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import Sidebar from "@/components/sidebar";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify",
  description: "Spotify clone developed by Blake Zajac",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
