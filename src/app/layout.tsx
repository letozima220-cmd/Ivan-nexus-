import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXUS | Иван Шипарнев",
  description: "NEXUS Personal Site — AI, Smart Space, Multi-Agent Systems, Design",
  keywords: ["NEXUS", "Иван Шипарнев", "AI", "Smart Space", "Personal OS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased bg-nexus-black text-nexus-gray min-h-screen">
        {children}
      </body>
    </html>
  );
}
