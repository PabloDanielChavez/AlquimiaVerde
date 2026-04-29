"use client";

import style_servicio from "@/styles/sections/Servicio.module.scss";
import { GiTripleCorn, GiPlantWatering, GiSpade } from "react-icons/gi";
import { BsStars } from "react-icons/bs";

export default function Servicio() {
    return (
        <section className={style_servicio.servicio_section}>
            <div className={style_servicio.servicio_layout}>
                <div className={style_servicio.servicio_container_principal}>
                    <div className={style_servicio.servicio_item}>
                        <div className={style_servicio.servicio_icono_box}>
                            <GiTripleCorn />
                        </div>
                        <div className={style_servicio.servicio_contenido}>
                            <h2 className={style_servicio.servicio_heading}>Cuidado Premium</h2>
                            <p className={style_servicio.servicio_texto}>Sustratos orgánicos y nutrientes específicos para un crecimiento saludable.</p>
                        </div>
                    </div>
                    <div className={style_servicio.servicio_item}>
                        <div className={style_servicio.servicio_icono_box}>
                            <GiPlantWatering />
                        </div>
                        <div className={style_servicio.servicio_contenido}>
                            <h2 className={style_servicio.servicio_heading}>Hidratación</h2>
                            <p className={style_servicio.servicio_texto}>Sistemas de riego controlados para mantener la frescura eterna bajo cristal.</p>
                        </div>
                    </div>
                    <div className={style_servicio.servicio_item}>
                        <div className={style_servicio.servicio_icono_box}>
                            <GiSpade />
                        </div>
                        <div className={style_servicio.servicio_contenido}>
                            <h2 className={style_servicio.servicio_heading}>Artesanía</h2>
                            <p className={style_servicio.servicio_texto}>Cada pieza es ensamblada a mano por expertos en botánica ornamental.</p>
                        </div>
                    </div>
                    <div className={style_servicio.servicio_item}>
                        <div className={style_servicio.servicio_icono_box}>
                            <BsStars />
                        </div>
                        <div className={style_servicio.servicio_contenido}>
                            <h2 className={style_servicio.servicio_heading}>Exclusividad</h2>
                            <p className={style_servicio.servicio_texto}>Diseños únicos que no se repiten, pensados para espacios distinguidos.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}