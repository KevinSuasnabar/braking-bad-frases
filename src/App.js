import React, { useState,useEffect } from 'react';
import styled from '@emotion/styled';

//importamors el componente Frase
import Frase from './components/Frase';

const Contenedor = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
`;

const Boton = styled.button`
    background: -webkit-linear-gradient(top left,#007d35 0%,#007d35 40%, #0f574e 100%);
    background-size: 300px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border:2px solid black;
`;

function App() {

  //state de frases
  const [frase, fraseState] = React.useState({});

  //cargar una frase al iniciar la pagina
  useEffect(()=>{
    consultarAPI();
  },[]);


  const consultarAPI = async () => {
    //nos devuelve una promesa
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');

    //resolvemos la promesa
    const frase = await api.json();

    //le damos el estado a la frase
    fraseState(frase[0]);
  }

  return (
    <Contenedor>

      <Frase frase={frase}>
      </Frase>
      <Boton onClick={() => consultarAPI()}>
        Obtener Frase
      </Boton>
    </Contenedor>

  );
}

export default App;
