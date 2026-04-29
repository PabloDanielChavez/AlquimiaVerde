// export const dynamic = 'force-dynamic';

import Bienvenida from "@/components/Bienvenida";
import Header from "@/components/Header";
import Servicio from "@/components/Servicio";
import Catalogo from "@/components/Catalogo";
import Nosotros from "@/components/Nosotros";
import Footer from "@/components/Footer";

export default async function Home() {
  // const data = await getData();

  return (
    <>
      <Header />
      <Bienvenida />
      <Servicio />
      <Catalogo />
      <Nosotros />
      <Footer />
    </>
  );
}