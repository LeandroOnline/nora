import Background from "./Components/BigCard";
import "./globals.css";
import { Dosis } from "next/font/google";

const dosis = Dosis({ subsets: ["latin"], weight: "600" });

export const metadata = {
  title: "Nora",
  description: "Biodecodificacion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="background">
      <body className={dosis.className}>
        <Background />
        {children}
      </body>
    </html>
  );
}
