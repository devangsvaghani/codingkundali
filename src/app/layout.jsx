import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coding Kundali",
  description: "Coding Kundali for friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <AuthProvider>
          <body className={inter.className}>
            <main className="w-screen h-screen overflow-x-hidden overflow-y-auto">
              <Navbar />
              {children}
              <Footer />
              <Toaster />
            </main>
          </body>
      </AuthProvider>
    </html>
  );
}
