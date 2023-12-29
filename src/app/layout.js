import './globals.css'
import {Providers} from "@/app/providers";
import NavBar from "../app/_components/NavBar"
import {roboto_mono} from "@/app/fonts";

export const metadata = {
  title: "Mrima",
};

export default function RootLayout({ children }) {

  return (
      <html lang={"en"}>
      <body className={`${roboto_mono.className}`}>
      <Providers>
          <NavBar/>
          {children}
      </Providers>
      </body>
      </html>
  );
}
