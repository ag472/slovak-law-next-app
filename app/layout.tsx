// Root layout for the Next.js app.
// Adds SEO metadata and pulls in global styles.

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slovak Law",
  description: "Browse and read Slovak laws in a modern Next.js app.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}

