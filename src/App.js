import React,{Fragment, useState, useEffect } from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario.jsx";
import ListadoNoticias from "./components/ListadoNoticias.jsx";

function App() {

  //definir la categoria y noticias 
  const [categoria, setCategoria] = useState('');
  const [noticias,setNoticias] = useState([]);

  useEffect( () => {

    const consultarAPI = async() => {

      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=1be055620dcb479199f13577ecd5dee1`;
       
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticias(noticias.articles);

    }
    consultarAPI();
  }, [categoria] );
  
  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias '

      />

      <div className='container white'>
        
          <Formulario 
            setCategoria={setCategoria}

          /> 

          <ListadoNoticias 
            noticias={noticias}
          />
      </div>
    </Fragment>
  );
}

export default App;
