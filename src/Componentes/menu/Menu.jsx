import "./menu.scss"
import {LinkedIn, GitHub} from "@material-ui/icons"

export default function Menu({ menuAberto, setMenuAberto }) {
    return (
        <div className={"menu " + (menuAberto && "ativo")}> 
            <div className="cima">
                <ul>
                    <li onClick={()=>setMenuAberto(false)}>
                        <a href="#intro">Apresentação</a>
                    </li>
                    <li onClick={()=>setMenuAberto(false)}>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li onClick={()=>setMenuAberto(false)}>
                        <a href="#projetos">Projetos</a>
                    </li>
                    <li onClick={()=>setMenuAberto(false)}>
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
            </div>
            <div className="baixo">
                <div className="link-git">
                    <LinkedIn className="link"/>
                    <a href="https://www.linkedin.com/in/pedrogles" target="_blank">Linkedin.com/in/pedrogles</a>
                </div>
                <div className="link-git">
                    <GitHub className="git"/>
                    <a href="https://www.github.com/pedrogles" target="_blank">Github.com/pedrogles</a>
                </div>
            </div>
        </div>
    )
}
