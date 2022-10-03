import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Container} from "react-bootstrap";
import Frase from './components/Frase';
import './style.css';
import {useEffect} from 'react';
import { useState } from "react";

function App() {
  // para pedir la frase y guardarla en un state para que redibuje automaticamente
  const [personaje, setPersonaje] = useState({});

// siempre hacer la peticion a la api en montaje si usamos ciclo de vida
useEffect (()=>{
  consultarAPI();
},[])

const consultarAPI =async()=>{
  // estructura para controlar errores, siempre poner el fetch dentro de esta estructura
  try {
    // herramienta para hacer peticiones a una api
    // de parametro el url de la api
    // await se utiliza por el tiempo que tarda en hacer la peticion la api, 
    // utilizamos el async (asincronico) y el await
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    // console.log(respuesta)
    const dato = await respuesta.json();
    // console.log(dato[0])
    // para guardar el dato en el state
    setPersonaje(dato[0])
    
    
  } catch (error) {
    console.log(error)
    // mostrar un msj al usuario que ocurrio un error
  }

}
  return (
    <Container>
      <div className="m-5 text-center">
      <img
        src="https://trello.com/1/cards/632a448eb47fe800d9bdef25/attachments/632cd857ffabe0042d12baf2/download/image.png"
        alt="the simpsons"
        className="w-100"
      />
      </div>
      <div className="text-center">
      <Button className="botonNaranja mb-5" variant='warning'>Obtener frase</Button>
      </div>
      <Frase personaje={personaje}></Frase>
    </Container>
  );
}

export default App;
