import "./intro.scss";
import { KeyboardArrowDown } from "@material-ui/icons";

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="esquerda">
                <div className="photome">
                    <img srcset="img\eu-350.png 320w,
                                img\eu-750.png 480w,
                                img\eu.png 800w"
                        sizes="(max-width: 320px) 280px,
                                (max-width: 480px) 440px,
                                800px"
                        src="img\eu.png" alt="Foto Perfil">    
                    </img>
                </div>
            </div>
            <div className="direita">
                <div className="apresentacao">
                    <h1>Web Portfólio.</h1>
                    <h2>Projetos Profissionais, Pessoais e Universitários.</h2>
                    <h3>Para saber um pouco mais sobre Pedro, clique na seta a baixo.</h3>
                    <a href="#sobre" className="seta"><KeyboardArrowDown/></a>
                </div>
            </div>
        </div>
    )
}
