import React from 'react'
import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Empty from '../../components/Empty'
import { toast } from 'react-toastify'

import './favoritos.css'

function Favoritos() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix")
    setFilmes(JSON.parse(minhaLista) || [] )

  }, [])
  
  function deleteMovies(id){
    let filterMovies = filmes.filter((item) =>{
      return (item.id !== id)
    })
    setFilmes(filterMovies);
    localStorage.setItem("@primeflix", JSON.stringify(filterMovies));
    toast.success("Filme excluido com sucesso !");
  }

  return (
    <div className='meus-filmes'>
      <h1>Meus Filmes</h1>

      {filmes.length === 0 && 
        <div className='empty-filme'>
          <span>Você não possui nenhum filmes salvos!</span>
          <Empty />
        </div>
      }

      <ul>
        {filmes.map((item)=> {
          return(
            <li key={item.id}>
              <span>{item.title}</span>

              <div>
                <Link to={`/filme/${item.id}`} >Ver detalhes</Link>
                <button onClick={() => deleteMovies(item.id)} >Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favoritos