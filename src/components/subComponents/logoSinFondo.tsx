import style_componentes from "@/styles/sections/Componentes.module.scss";
import { BsLeaf } from "react-icons/bs";

export default function LogoSinFondo({ mostrarIcono = true }) {
    return (
        <div className={style_componentes.logo_sin_fondo_box}>
            {mostrarIcono && (
                <BsLeaf className={style_componentes.logo_sin_fondo_icono} />
            )}

            <h1 className={style_componentes.logo_sin_fondo_h1}>
                Alquimia 
                <span className={style_componentes.logo_sin_fondo_span}>Verde</span>
            </h1>
        </div>
    );
}