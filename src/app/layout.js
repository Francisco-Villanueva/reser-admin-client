import { AdminProvider } from "@/context/AdminContext";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reset | Administration",
  description: "Administration of reset salon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminProvider>{children}</AdminProvider>
      </body>
    </html>
  );
}
