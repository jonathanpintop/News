import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
  return (
   <Fragment>
     <Header 
       titulo='Buscador de Noticias'
     />



<div className="container white">
<Formulario/>
</div>


   </Fragment>
  );
}

export default App;
