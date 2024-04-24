import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";
import TransparentOverlay from "./components/TransparentOverlay";
import SideButtons from "./components/SideButtons";
import FilterSideSlider from "./revenue/FilterSideSlider";
import { Suspense } from "react";
import NavbarSkeleton from "./components/NavbarSkeleton";

const inter = Inter({ subsets: ["latin"] });

// FOR LOCAL FONTS. AND DON'T FORGET TO SET IN TAILWIND CONFIG
const degular = localFont({
  src: [
    {
      path: "../public/fonts/DegularDemo-Light.otf",
      weight: "400",
      style: "normal",
      variable: "--font-degular_bold",
    },

    {
      path: "../public/fonts/DegularDemo-Bold.otf",
      weight: "900",
      style: "normal",
      variable: "--font-degular_bold",
    },
  ],
});

export const metadata = {
  title: "Revenue Filterr",
  description: "View and filter revenue.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={``}>
      <body
        className={`${degular.variable}   font-degular  text-base font-normal bg-white px-2 md:px-4 min-w-fit `}
      >
        <TransparentOverlay />
        <FilterSideSlider />
        <Suspense fallback={<NavbarSkeleton />}>
          <Navbar />
        </Suspense>
        <SideButtons />

        <>{children}</>
      </body>
    </html>
  );
}
