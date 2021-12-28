import "./menu.scss"
import {LinkedIn, GitHub} from "@material-ui/icons"
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Menu({ menuAberto, setMenuAberto }) {
    return (
        <div className={"menu " + (menuAberto && "ativo")}> 
            <div className="cima">
                <ul>
                    <li onClick={()=>setMenuAberto(false)}>
                        <a href="#intro">Home</a>
                    </li>
                    <li onClick={()=>setMenuAberto(false)}>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li onClick={()=>setMenuAberto(false)}>
                        <a href="#projetos">Projetos</a>
                    </li>
                    <li onClick={()=>setMenuAberto(false)}>
                        <a href="#habilidades">Habilidades</a>
                    </li>
                    <li onClick={()=>setMenuAberto(false)}>
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
            </div>
            <div className="baixo">
                <div className="link">
                    <a href="https://www.linkedin.com/in/pedrogles" rel="author" target="_blank">
                    <LinkedIn/></a>
                </div>
                <div className="link">
                    <a href="https://www.github.com/pedrogles" rel="author" target="_blank">
                    <GitHub/></a>
                </div>
                <div className="link">
                    <a href="https://www.instagram.com/pedrogles_" rel="author" target="_blank">
                        <InstagramIcon/></a>
                </div>
            </div>
        </div>
    )
}
