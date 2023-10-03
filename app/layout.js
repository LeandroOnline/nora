import Navbar from "./Components/Navbar";
import "./globals.css";
import { Dosis } from "next/font/google";

const dosis = Dosis({ subsets: ["latin"], weight: "600" });

export const metadata = {
  title: "Nora",
  description: "Biodecodificacion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="Background">
      <body className={dosis.className}>
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}
