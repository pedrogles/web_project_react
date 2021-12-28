import "./habilidades.scss"
import { KeyboardArrowDown } from "@material-ui/icons";
import html from "../../screenshot/habilidades/html.jpeg";
import css from "../../screenshot/habilidades/css.jpeg";
import js from "../../screenshot/habilidades/js.jpeg";
import python from "../../screenshot/habilidades/python.jpeg";
import react from "../../screenshot/habilidades/react.jpeg";
import sass from "../../screenshot/habilidades/sass.jpeg";

export default function Habilidades() {
    return (
        <div className="habilidades" id="habilidades">
            <h1>Habilidades</h1>
            <div className="conteiner">
                <div className="itens">
                    <img src={html} alt="" />
                    <h3>Html</h3>
                </div>
                <div className="itens">
                    <img src={css} alt="" />
                    <h3>Css</h3>
                </div>
                <div className="itens">
                    <img src={js} alt="" />
                    <h3>JavaScript</h3>
                </div>
                <div className="itens">
                    <img src={python} alt="" />
                    <h3>Python</h3>
                </div>
                <div className="itens">
                    <img src={react} alt="" />
                    <h3>React</h3>
                </div>
                <div className="itens">
                    <img src={sass} alt="" />
                    <h3>Sass</h3>
                </div>
            </div>
            <a href="#contato" className="seta"><KeyboardArrowDown/></a>
        </div>
    )
}
