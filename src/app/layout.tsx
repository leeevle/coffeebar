import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "@/app/globals.css";
import styles from '@/app/ui/home.module.css';
import Header from "./header";
import Footer from "./footer"

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffeebar menu",
  description: "bar, kitchen, dessert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} ml-60 mr-60 antialiased ${styles.gradient}`}>
        <Header/>
          {children}
        <Footer />
      </body>
    </html>
  );
}
