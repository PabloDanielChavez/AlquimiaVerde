"use client";

import { useState } from "react";
import style_producto from "@/styles/sections/Producto.module.scss";
import { BsShieldCheck, BsTruck, BsGlobe } from "react-icons/bs";

export default function Producto() {
    const [cantidad, setCantidad] = useState(1);

    return (
        <main className={style_producto.producto}>
            <div className={style_producto.producto_layout}>
                
                {/* SECCIÓN SUPERIOR: Galería e Información Principal */}
                <section className={style_producto.hero_section}>
                    <div className={style_producto.galeria_box}>
                        <div className={style_producto.domo_exhibicion}>
                            <img 
                                src="/img/planta-domo.png" 
                                alt="Eterna Green Premium" 
                                className={style_producto.imagen_principal} 
                            />
                        </div>
                    </div>

                    <div className={style_producto.info_principal}>
                        <p className={style_producto.sku}>EDICIÓN LIMITADA — EN STOCK</p>
                        <h1 className={style_producto.titulo}>Eterna Green <span className={style_producto.titulo_italic}>Premium</span></h1>
                        <p className={style_producto.precio}>$45.900</p>

                        <div className={style_producto.detalles_rapidos}>
                            <div className={style_producto.dato}>
                                <BsGlobe />
                                <div>
                                    <strong>ORIGEN</strong>
                                    <span>Selva Misionera</span>
                                </div>
                            </div>
                            <div className={style_producto.dato}>
                                <BsShieldCheck />
                                <div>
                                    <strong>VIDA</strong>
                                    <span>Preservada (10+ años)</span>
                                </div>
                            </div>
                        </div>

                        <div className={style_producto.acciones}>
                            <div className={style_producto.selector_cantidad}>
                                <button onClick={() => setCantidad(Math.max(1, cantidad - 1))}>-</button>
                                <span>{cantidad}</span>
                                <button onClick={() => setCantidad(cantidad + 1)}>+</button>
                            </div>
                            <button className={style_producto.btn_comprar}>
                                CONSULTAR DISPONIBILIDAD
                            </button>
                        </div>
                    </div>
                </section>

                <hr className={style_producto.separador} />

                {/* SECCIÓN MEDIA: Información Técnica */}
                <section className={style_producto.detalles_tecnicos}>
                    <div className={style_producto.columna_descripcion}>
                        <h3>Artesanía Orgánica</h3>
                        <p>
                            Cada ejemplar es seleccionado a mano y sometido a un proceso de preservación orgánica que reemplaza la savia por una solución biodegradable, manteniendo su frescura y textura original sin necesidad de riego.
                        </p>
                    </div>
                    <div className={style_producto.columna_specs}>
                        <h3>Cuidados y Detalles</h3>
                        <ul className={style_producto.lista_specs}>
                            <li><strong>Soporte:</strong> Base de madera curada</li>
                            <li><strong>Cristal:</strong> Vidrio soplado de alta claridad</li>
                            <li><strong>Mantenimiento:</strong> Cero riego, evitar luz directa</li>
                            <li><strong>Dimensiones:</strong> 25cm x 15cm</li>
                        </ul>
                    </div>
                </section>

            </div>
        </main>
    );
}