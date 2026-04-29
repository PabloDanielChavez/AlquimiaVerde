"use client";

import style_footer from "@/styles/sections/Footer.module.scss";
import Link from "next/link";
import { BsLeaf } from "react-icons/bs";
import LogoSinFondo from "./subComponents/logoSinFondo";

export default function Footer() {
    return (
        <footer className={style_footer.footer}>
            {/* Capa decorativa para el desenfoque de hojas de la imagen 6 */}
            <div className={style_footer.footer_decoracion}></div>

            <div className={style_footer.footer_layout}>
                <div className={style_footer.footer_grid}>
                    <LogoSinFondo mostrarIcono={true} />
                    <div className={style_footer.footer_links}>
                        <p className={style_footer.footer_copyright}>
                            Copyright © 2026 Pablo Daniel Chavez. 
                            <span className={style_footer.footer_divider}>|</span>
                            <Link 
                                href="https://portafolio-6jlx.onrender.com" 
                                target="_blank"
                                className={style_footer.footer_link_portafolio}
                            >
                                Ver Portafolio
                            </Link>
                            <span className={style_footer.footer_divider}>|</span>
                            Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}