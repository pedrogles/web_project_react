import "./app.scss"
import Topbar from "./Componentes/topbar/Topbar";
import Intro from "./Componentes/intro/Intro";
import Sobre from "./Componentes/sobre/Sobre";
import Projetos from "./Componentes/projetos/Projetos";
import Contato from "./Componentes/contato/Contato";
import Menu from "./Componentes/menu/Menu";
import { useState } from "react";


function App() {
  const [menuAberto,setMenuAberto] = useState(false)  // Função para abrir e fechar Menu(True/False)
  return (
    <div className="app">
      <Topbar menuAberto={menuAberto} setMenuAberto={setMenuAberto}/>
      <Menu menuAberto={menuAberto} setMenuAberto={setMenuAberto}/>
      <div className="sessoes">
        <Intro/>
        <Sobre/>
        <Projetos/>
        <Contato/>
      </div>
    </div>
  );
}

export default App;
