"use client";

import style_catalogo from "@/styles/sections/Catalogo.module.scss";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

const productos = [
    { id: 1, nombre: "Bonsai Zen", desc: "Pino preservado", precio: "15.000", img: "/img/productos/1.png" },
    { id: 2, nombre: "Domo Flora", desc: "Helecho premium", precio: "18.500", img: "/img/productos/2.png" },
    { id: 3, nombre: "Eterna Green", desc: "Musgo de montaña", precio: "12.000", img: "/img/productos/3.png" },
    { id: 4, nombre: "Eterna Green", desc: "Musgo de montaña", precio: "12.040", img: "/img/productos/4.png" },
    { id: 5, nombre: "Eterna Green", desc: "Musgo de montaña", precio: "12.050", img: "/img/productos/5.png" },
    { id: 6, nombre: "Eterna Green", desc: "Musgo de montaña", precio: "12.060", img: "/img/productos/6.png" },
    { id: 7, nombre: "Eterna Green", desc: "Musgo de montaña", precio: "12.070", img: "/img/productos/7.png" },
    { id: 8, nombre: "Eterna Green", desc: "Musgo de montaña", precio: "12.080", img: "/img/productos/8.png" },
];

export default function Catalogo() {
    return (
        <section className={style_catalogo.catalogo}>
            <div className={style_catalogo.catalogo_layout}>
                <div className={style_catalogo.catalogo_grid}>
                    {productos.map((prod) => (
                        <article key={prod.id} className={style_catalogo.catalogo_card}>
                            <div className={style_catalogo.catalogo_imagen_container}>
                                <Image 
                                    className={style_catalogo.catalogo_img}
                                    src={prod.img}
                                    alt={prod.nombre}
                                    width={200}
                                    height={200}
                                    sizes="200px"
                                />
                            </div>
                            <div className={style_catalogo.catalogo_info}>
                                <h3 className={style_catalogo.catalogo_titulo}>{prod.nombre}</h3>
                                <p className={style_catalogo.catalogo_desc}>{prod.desc}</p>
                                <div className={style_catalogo.catalogo_footer}>
                                    <Link
                                        href={`https://wa.me/5491158007420?text=Hola! Me interesa el ${prod.nombre}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={style_catalogo.catalogo_btn_whatsapp}
                                    >
                                        <IoLogoWhatsapp /> CONSULTAR
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}