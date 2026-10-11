import type { Metadata } from "next";
import type { ReactNode } from "react";
// import "./globals.css";

export const metadata: Metadata = {
  title: "RJ Generators — Generator Sale & Purchase",
  description: "Buy and sell generators with RJ Generators. We buy all makes and models and sell quality-checked, certified new and used generators backed by warranty.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}