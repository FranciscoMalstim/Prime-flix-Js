import React from 'react';
import '../Error/error.css'
import { Link } from 'react-router-dom';

function Error(){
  return (
    <div className='not-found'>
      <h1>Pagina não encontrada!</h1>
      <img src="src/images/error-404.png" alt="Error 404" />
      <Link to="/">Clique aqui para ver os Filmes!</Link>
    </div>
  )
}

export default Error;