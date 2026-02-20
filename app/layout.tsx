import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ScrollManager } from "@/components/ui/scroll-manager";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant"
});

export const metadata: Metadata = {
  title: "SUNFADED | Worn By The Elements",
  description: "Urban surf clothing brand inspired by nature and the elements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased bg-sand-50 text-sand-900 selection:bg-sunset-300 selection:text-sand-900 overflow-x-hidden m-0 p-0`}>
        <ScrollManager />
        {children}
      </body>
    </html>
  );
}
