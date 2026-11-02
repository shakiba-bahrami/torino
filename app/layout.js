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
        <Container className="mx-[31px]">
        <Header />
          <main>{children}</main>
        <Footer />
        </Container>
      </body>
    </html>
  );
}
