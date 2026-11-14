import "./globals.css";
import yekanBakh from "./fonts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/containers/Container";
import TanstackQueryProvider from "@/provider/TanstackQueryProvider";
export const metadata = {
  title: "Torino | تورینو",
  description: "رزرو آنلاین تور و سفر با تورینو",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.variable} min-h-screen flex flex-col `}>
        <TanstackQueryProvider>
            <Header />
          <Container className="flex flex-col flex-1">
            <main className="flex-1">{children}</main>
            <Footer />
          </Container>
        </TanstackQueryProvider>
        <ToastContainer autoClose={3000} />
      </body>
    </html>
  );
}
