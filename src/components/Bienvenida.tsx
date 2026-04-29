"use client";

import style_bienvenida from "@/styles/sections/Bienvenida.module.scss";
import ComponenteLogo from "@/components/subComponents/logo"
import ComponenteLogoSinFondo from "@/components/subComponents/logoSinFondo"
import Link from "next/link";
// Usamos iconos que encajen mejor con un producto botánico/natural
import { GiOakLeaf } from "react-icons/gi"; 
import { BsEye, BsLeaf } from "react-icons/bs";
import LogoSinFondo from "@/components/subComponents/logoSinFondo";

export default function Bienvenida() {
    return (
        <section className={style_bienvenida.bienvenida}>
            <div className={style_bienvenida.bienvenida_layout}>
                <div className={style_bienvenida.bienvenida_header_box_informacion}>
                    <LogoSinFondo mostrarIcono={false} />
                    <span className={style_bienvenida.bienvenida_header_span_tag} >
                        Colección Exclusiva - Botánica d'Elite
                    </span>
                    <p className={style_bienvenida.bienvenida_header_p_descripcion} >
                        Presentamos piezas botánicas únicas, preservadas bajo cristal para una distinción eterna. Nuestra selección garantiza una belleza natural duradera y de alta gama.
                    </p>
                    <div className={style_bienvenida.bienvenida_header_box_btn}>
                        <Link className={style_bienvenida.bienvenida_header_btn} href="/productos/floraafod">
                            <span className={style_bienvenida.bienvenida_header_btn_span}>
                                <GiOakLeaf className={style_bienvenida.icono_clase} /> VER DETALLES
                            </span>
                        </Link>
                        <Link className={style_bienvenida.bienvenida_header_btn} href="https://wa.me/tu_numero">
                            <span className={style_bienvenida.bienvenida_header_btn_span}>
                                <BsEye className={style_bienvenida.icono_clase} /> CONSULTAR
                            </span>
                        </Link>
                    </div>
                </div>
                <div className={style_bienvenida.bienvenida_header_box_imagen}>
                    <ComponenteLogo />
                </div>
            </div>
        </section>
    );
}