import type { Metadata } from "next";
import { Poppins, Inter, Manrope } from "next/font/google";
import "./globals.css";
import "./hero-bg.css";
import NavBar from "@/components/HomePage/NavBar";
import { MessagesProvider } from "@/context";
import ProgressBar from "@/components/ProgressBar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TrialSights",
  description: "A one-stop platform for biotech trial insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${manrope.variable} antialiased`}
      >
        <MessagesProvider>
          <div className="relative">
            <div className="absolute w-full z-10">
              <NavBar />
            </div>
            <main className="flex-grow">
              <ProgressBar />
              {children}
            </main>
          </div>
        </MessagesProvider>
      </body>
    </html>
  );
}
