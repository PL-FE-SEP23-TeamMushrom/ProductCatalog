import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navigation/Navbar";
import Cart from "@/components/Cart/Cart";

const inter = Inter({ subsets: ["latin"] });
const mont = localFont({ src: [
    {
      path: '../public/fonts/Mont.otf',
      weight: '600',
    },
    {
      path: '../public/fonts/Mont.otf',
      weight: '800',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Navbar />
        {/* <Cart /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
