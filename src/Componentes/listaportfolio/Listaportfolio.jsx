import "./listaportfolio.scss"

export default function Listaportfolio({id, title, ativo, setSelecionado}) {
    return (
        <li className={ativo ? "listaportfolio ativo" : "listaportfolio"} onClick={()=> setSelecionado(id)}>
           {title} 
        </li>
    )
}
