import "../assets/css/galeria.css";
import Heart from "./Heart";
import MyContext from "../MyContext";
import { useContext } from "react";


export default function Home() {

  const {fotos, setFotos} = useContext(MyContext);
  
  const setFavorito = (i) => {
  const index = fotos.findIndex((foto) => foto.id === i);
  fotos[index].active = !fotos[index].active;
   setFotos([...fotos]);
 }; 
 
  return (
    <div className = "galeria grid-columns-5 p-3">
    {fotos
    .map((u, i) => (
        <div onClick={() => setFavorito(u.id)} className="foto" key={i} style={{ backgroundImage: `url(${u.src.tiny})` }}>

          <Heart filled={u.active} />
          <p>{u.desc}</p>
        </div>
    ))}
      </div>
  );
}


