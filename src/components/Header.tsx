"use client";

import style_header from "@/styles/sections/Header.module.scss";
import Link from "next/link";
import { BsCart3, BsLeaf } from "react-icons/bs"; // Icono de carrito para el botón "Cart"
import LogoSinFondo from "./subComponents/logoSinFondo";
import { DiCelluloid } from "react-icons/di";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
    return (
        <header className={style_header.header}>
            <div className={style_header.header_layout}>
                <BsLeaf style={{"color": "#a7ffeb", "fontSize": "2.6rem"}} />
                {/* <nav className={style_header.header_nav}>
                    <ul className={style_header.header_list}>
                        <li><Link href="/" className={style_header.header_link}>Inicio</Link></li>
                        <li><Link href="/servicio" className={style_header.header_link}>servicio</Link></li>
                        <li><Link href="/catalogo" className={style_header.header_link}>catalogo</Link></li>
                        <li><Link href="/contacto" className={style_header.header_link}>contacto</Link></li>
                    </ul>
                </nav> */}
                <div className={style_header.header_box_actions}>
                    <Link
                        href={`https://wa.me/5491166621017?text=Hola!`}
                        target="_blank"
                        rel="noopener noreferrer"
                         className={style_header.header_btn_cart}
                    >
                        <span>+54 911 6662-1017</span>
                        <FaWhatsapp  className={style_header.icono_cart} />
                    </Link>
                </div>

            </div>
        </header>
    );
}