import style_componentes from "@/styles/sections/Componentes.module.scss";
import { BsLeaf } from "react-icons/bs";

export default function logo() {
    return (
        <div className={style_componentes.logo_circulo}> 
            <img 
                className={style_componentes.logo_fondo} 
                src="/img/fondo/fondo-logo.jpg" 
                alt="Fondo decorativo" 
            />
            <div className={style_componentes.logo_box}>
                <BsLeaf className={style_componentes.logo_icono} />
                <h2 className={style_componentes.logo_h2}>
                    Alquimia 
                    <span className={style_componentes.logo_span}>Verde</span>
                </h2>
            </div>
        </div>
    );
}