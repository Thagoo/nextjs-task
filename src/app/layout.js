import { Inter } from "next/font/google";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/components/Bootstrap";
import Footer from "@/ui/Footer/Footer";
import Navigation from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Banao",
  description: "Banao | NextJS task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container-global`}>
        <Navigation />
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
