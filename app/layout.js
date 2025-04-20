import Footer from "@/components/Footer";
import MainNavbar from "@/components/MainNavbar";
import BlogPopupDesign from "@/components/shared/BlogPopupDesign";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap", // optional for better loading performance
});

export const metadata = {
  metadataBase: new URL("https://www.carterinjurylaw.com/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <div className="overflow-x-hidden text-black bg-white">
            <MainNavbar />
            <BlogPopupDesign />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
