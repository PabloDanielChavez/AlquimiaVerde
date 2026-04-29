"use client";

import { useEffect, useState } from "react";
import style_nosotros from "@/styles/sections/Nosotros.module.scss";
import { BsClockHistory, BsLeaf } from "react-icons/bs";
import LogoSinFondo from "./subComponents/logoSinFondo";

export default function Nosotros() {
    return (
        <section className={style_nosotros.nosotros}>
            <div className={style_nosotros.nosotros_layout}>
                <div className={style_nosotros.nosotros_grid}>
                    
                    <div className={style_nosotros.nosotros_contenido}>
                        <LogoSinFondo mostrarIcono={true} />
                        <p className={style_nosotros.nosotros_texto}>
                            Nacimos de la pasión por la naturaleza preservada, combinando técnicas de horticultura tradicionales con el diseño minimalista que los espacios modernos exigen.
                        </p>
                        <p className={style_nosotros.nosotros_texto}>
                            En nuestro taller, cada pieza es el resultado de un proceso meticuloso donde el cristal y la vida orgánica se encuentran para crear microclimas eternos.
                        </p>
                        
                        <div className={style_nosotros.nosotros_box_btn}>
                            <button className={style_nosotros.nosotros_btn}>
                                Nuestra Historia
                            </button>
                        </div>
                    </div>

                    <div className={style_nosotros.nosotros_box_img}>
                        {/* Widget de tiempo/reloj inspirado en la imagen */}
                        <div className={style_nosotros.nosotros_card_reloj}>
                            <div className={style_nosotros.nosotros_titulo_img}>
                                <BsClockHistory />
                                <span>Nosotros</span>
                            </div>
                            <div className={style_nosotros.nosotros_imagen_box}>
                                <img src="/img/fondo/nosotros.jpg" alt="Nosotros Alquimia Verde" className={style_nosotros.nosotros_imagen} />
                            </div>
                            <p className={style_nosotros.nosotros_parrafo_im}>
                                Forjando naturaleza en cada segundo.
                            </p>
                        </div>
                    </div>

                </div>
            </div>  
            <div className={style_nosotros.nosotros_decoracion_fondo1}></div>
        </section>
    );
}