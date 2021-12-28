import "./contato.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Contato() {
    return (
        <div className="contato" id="contato">
            <div className="esquerda">
                <h2>Deseja saber onde me encontrar?</h2>
                <p>Clique nos icones abaixo.</p>
                <h3>Redes Sociais</h3>               
                <div className="redes-sociais">
                    <a href="https://www.linkedin.com/in/pedrogles" rel="author" target="_blank">
                    <LinkedInIcon/></a>
                    <a href="https://www.github.com/pedrogles" rel="author" target="_blank">
                    <GitHubIcon/></a>
                    <a href="https://www.instagram.com/pedrogles_" rel="author" target="_blank">
                    <InstagramIcon/></a>
                </div>
            </div>
            <div className="direita">
                <h2>Envie-me uma mensagem...</h2>
                <form>
                    <input type="text" placeholder="Digite seu E-mail..." />
                    <textarea placeholder="Digite sua mensagem..."></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}
