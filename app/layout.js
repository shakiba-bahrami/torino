import "./globals.css";
import yekanBakh from "./fonts";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/containers/Container";
export const metadata = {
  title: "Torino | تورینو",
  description: "رزرو آنلاین تور و سفر با تورینو",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.variable} min-h-screen flex flex-col `}>
        <Container className="flex flex-col flex-1">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
