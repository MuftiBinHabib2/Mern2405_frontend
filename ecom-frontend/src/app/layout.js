import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import ReduxProvider from "@/components/redux/ReduxProvider";
import VerifyUser from "@/components/verifyuser/VerifyUser";



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
        <ReduxProvider>
       <VerifyUser>
          {children}

       </VerifyUser>
        </ReduxProvider>
        

      </body>
    </html>
  );
}
