import { Inter, Degular } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";
import TransparentOverlay from "./components/TransparentOverlay";

const inter = Inter({ subsets: ["latin"] });

// FOR LOCAL FONTS. AND DON'T FORGET TO SET IN TAILWIND CONFIG
const degular = localFont({
  src: "../public/fonts/DegularDemo-Light.otf",
  variable: "--font-avenir_next",
});

export const metadata = {
  title: "Revenue Filter",
  description: "View and filter revenue.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={``}>
      <body
        className={`${degular.className}  text-base font-normal bg-white dark:bg-[#171717] text-the-black dark:text-white`}
      >
        <TransparentOverlay />
        <Navbar />
        <>{children}</>
      </body>
    </html>
  );
}
