import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
const mont = localFont({
  src: [
    {
      path: "../public/fonts/Mont.otf",
      weight: "600",
    },
    {
      path: "../public/fonts/Mont.otf",
      weight: "800",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={mont.className}>
          <Navbar />
          <main className="sm:mx-8 md:mx-16 lg:mx-24">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
