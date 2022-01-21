import Listaportfolio from "../listaportfolio/Listaportfolio";
import "./projetos.scss"
import React, { useEffect, useState } from "react";
import { portfolioweb, snakegame, alugueldeiates } from "../../data";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Projetos() {
    const [slideAtual, setSlideAtual] = useState(0)

    const [selecionado, setSelecionado] = useState("portfolio");
    const [data, setData] = useState([]);
    const lista =[
        {
            id: "portfolio",
            title: "Portfólio Web",
        },
        {
            id: "snake",
            title: "Snake Game",
        },
        {
            id: "iates",
            title: "Aluguel de Iates",
        }, 
    ];

    useEffect(()=>{
        switch(selecionado){
            case "portfolio":
                setData(portfolioweb);
                break;
            case "snake":
                setData(snakegame);
                break;
            case "iates":
                setData(alugueldeiates);
                break;
                default:
                    setData(portfolioweb);
        }
    }, [selecionado]);

    const clicou = (way)=> {
        way === "esquerda" 
        ? setSlideAtual(slideAtual > 0 ? slideAtual - 1 : 2) 
        : setSlideAtual(slideAtual < data.length -1 ? slideAtual + 1 : 0);
        
    };
    return (
        <div className="projetos" id="projetos">
           <h1>Projetos</h1>
           <ul>
               {lista.map((item) => (
                   <Listaportfolio title={item.title} 
                   ativo={selecionado === item.id}
                   setSelecionado ={setSelecionado}
                   id={item.id}/>
               ))}
           </ul> 
           <div className="conteiner" style={{transform: `translateX(-${slideAtual * 100}vw)`}}>
               {data.map((d) => (
                <div className="itens">
                   <ArrowBackIosNewIcon fontSize="large" className="setaEsquerda" 
                   onClick={()=>clicou("esquerda")}/>
                   <img src={d.img} alt=""/>
                   <ArrowForwardIosIcon fontSize="large" className="setaDireita" 
                   onClick={()=>clicou("direita")}/>
               </div>
               ))}
           </div>
           <a href="#habilidades" className="seta"><KeyboardArrowDownIcon/></a>
        </div>
    );
}
