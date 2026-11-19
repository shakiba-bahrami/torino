import "./globals.css";
import yekanBakh from "./fonts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "@/components/Footer";
import Container from "@/components/containers/Container";
import TanstackQueryProvider from "@/provider/TanstackQueryProvider";
import AuthModalProvider from "@/provider/AuthModalProvider";
export const metadata = {
  title: "Torino | تورینو",
  description: "رزرو آنلاین تور و سفر با تورینو",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.variable} min-h-screen flex flex-col `}>
        <TanstackQueryProvider>
          <AuthModalProvider>
            <Container>
              <main className="flex flex-1 flex-col">{children}</main>
              <Footer />
            </Container>
          </AuthModalProvider>
        </TanstackQueryProvider>
        <ToastContainer autoClose={3000} />
      </body>
    </html>
  );
}
