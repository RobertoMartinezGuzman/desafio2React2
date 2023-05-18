import "./styles.css";


import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import MyContext from "./MyContext";


export default function App() {
  

  const [fotos, setFotos] = useState([]);
  const shareData = {fotos, setFotos};

  const endpoint = "fotos.json"
  const getFotosNaturales = async () => {
    const res = await fetch(endpoint);
    let { photos } = await res.json();
    photos = photos.map((photo) => ({
      id: photo.id,
      src: photo.src,
      desc: photo.alt,
      favorito: false,
      ...photo, active: true
    }));
    setFotos(photos);
    console.log(photos)
  };

useEffect(()=> {
  getFotosNaturales();
}, []);

  return (
    <div className="App">

      <MyContext.Provider value={shareData}>
        <BrowserRouter>
          <Navbar />
            
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}