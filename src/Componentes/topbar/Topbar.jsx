import "./topbar.scss";

export default function Topbar( {menuAberto , setMenuAberto }) {
    return (
        <div className={"topbar " + (menuAberto && "ativo")}>
            <div className="conteiner">
                <div className="esquerda">
                    <a href="#intro" className="logo">Pedro Gabriel Lima e Silva</a>
                    <h1 className="frontend">Desenvolvedor Front-end</h1>
                </div>
                <div className="direita">
                    <div className="hamburguer" onClick={()=>setMenuAberto(!menuAberto)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
