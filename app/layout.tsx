import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARTMG — Design without limits",
  description: "A creative workspace to design, create, and bring ideas to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
