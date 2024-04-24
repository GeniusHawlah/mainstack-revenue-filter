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

// FOR LOCAL FONTS I SET IN TAILWIND CONFIG
const degular = localFont({
  src: "../public/fonts/DegularDemo-Light.otf",
  variable: "--font-degular",
});

const degular_bold = localFont({
  src: "../public/fonts/DegularDemo-Bold.otf",
  variable: "--font-degular_bold",
});

export const metadata = {
  title: "Revenue Filter",
  description: "View and filter revenue.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={``}>
      <body
        className={`${degular.variable}   font-degular_bold  text-base font-normal bg-white px-2 md:px-4 min-w-fit pb-20`}
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
