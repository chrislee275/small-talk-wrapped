import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "BIW Wrapped — Fictional Portfolio Demo",
  description:
    "A text-first interactive retrospective featuring three fictional perspectives. All stories and statistics are invented.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
