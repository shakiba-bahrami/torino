import "./globals.css";
import yekanBakh from "./fonts";
export const metadata = {
  title: "Torino | تورینو",
  description: "رزرو آنلاین تور و سفر با تورینو",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.variable} min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
