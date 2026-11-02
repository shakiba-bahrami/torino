import localFont from "next/font/local";

const yekanBakh = localFont({
  src: [
    {
      path: "../public/fonts/YekanBakh-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-Fat.woff2",
      weight: "950",
      style: "normal",
    },
  ],
  variable: "--font-yekan-bakh",
  display: "swap",
});

export default yekanBakh;
