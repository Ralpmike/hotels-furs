import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const josefin = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  // title: "Hotels for you",
  // description: "Find your next hotel with ease",
  title: {
    template: "%s | Hotels For You",
    default: "Welcome To Hotels For You",
  },
  description: "Find your next hotel with ease with Hotels For You",
};

console.log(josefin)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="mx-auto grow">
          {children}
        </main>
        <footer>
          <div className="container mx-auto">
            <p className="text-center text-muted-foreground">HotelsForYou &copy; 2026</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
