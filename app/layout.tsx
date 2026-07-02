import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./components/common/Navigation";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  // title: "Hotels for you",
  // description: "Find your next hotel with ease",
  title: {
    template: "%s | Hotels For You",
    default: "Welcome To Hotels For You",
  },
  description: "Find your next hotel with ease with Hotels For You",
};

console.log(josefin);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin.className} h-full antialiased`}>
      <body className="min-h-screen flex flex-col bg-primary-950 text-primary-100 ">
        <Navigation />
        <div className="flex-1 px-8 py-12">
          <main className="container mx-auto bg-red-300">{children}</main>
        </div>
      </body>
    </html>
  );
}
