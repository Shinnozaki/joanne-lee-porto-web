import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect";
import ToasterProvider from "./provider/ToasterProvider";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Joanne Lee",
  description: "Joanne Lee's portofolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={jetbrains.variable}>
        <ToasterProvider/>
        <Header />
        <StairEffect/>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
