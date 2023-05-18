import MyContext from "../MyContext";
import { useContext } from "react";
import "../assets/css/galeria.css";



export default function Favoritos() {

    const {fotos, setFotos} = useContext(MyContext);

    return (
      <div>
        <h1>Fotos favoritas</h1>
        <div className="p-3 galeria grid-columns-4">
          {fotos
          .filter((u) => u.active == false)
          .map((u, i) => {
          return (
        
          <div className="foto" key={i} style={{ backgroundImage: `url(${u.src.tiny})` }}>
          </div>

         )}

        )} 
        </div>
      </div>
    );
  }

  // 