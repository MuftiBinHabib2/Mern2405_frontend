import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



export const metadata = {
  title: "E-commerce App",
  description: "E-commerce App created with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
       <Header />
        {children}
      </body>
    </html>
  );
}
