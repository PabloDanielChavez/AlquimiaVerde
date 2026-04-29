import type { Metadata } from "next";
import { Roboto } from "next/font/google";
// import Ventana from "@/components/Ventana";
import "../styles/base/global.module.scss";
import "../styles/base/normalice.scss"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100","300","400","500","700","900"],
});

export const metadata: Metadata = {
  title: "Alquimia Verde",
  description: "Alquimia Verde, acá nosotros demostramos nuestra pacion por la naturaleza",
  icons: {
    icon: ""
  }
};

export const viewport = {
  themeColor: '#252525',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body /*</html>*className={roboto.className} style={{ backgroundColor:"#252525", overflowX: "hidden"}}*/>
        {children}
      </body>
    </html>
  );
}