
import { Inter } from "next/font/google";
import "./globals.css";
import { LoadingProvider } from "@/context/loading-context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeaderComponent from "@/components/header-component";
import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import Services from "@/components/services";
import Footer from "@/components/footer";
import { CartProvider } from "@/provider/CartContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-full">
        <div className="flex min-h-screen min-w-screen flex-col min-w-full bg-[#FFFFFF]	!p-0 items-center grid justify-items-center">
          <HeaderComponent />
          <Navbar />
          <Banner />
          <CartProvider>
          <LoadingProvider>{children}</LoadingProvider>
          </CartProvider>
          <Services />
          <ToastContainer />
          <Footer />
        </div>
      </body>
    </html>
  );
}
