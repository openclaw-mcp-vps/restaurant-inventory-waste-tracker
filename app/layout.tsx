import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurant Inventory & Waste Tracker",
  description: "Track food waste and optimize restaurant inventory. Log waste in real-time, predict inventory needs, and get menu optimization suggestions to boost profit margins."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3c576d2f-3fc3-4f6d-b490-8a74862abe22"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
