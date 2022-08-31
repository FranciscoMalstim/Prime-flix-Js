import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Filme/filme.css'
import Loading from '../../components/Loading'
import api from '../../service/api'

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilme(){
      await api.get(`/movie/${id}`,{
        params:{
          api_key: "b91df1c06076cc2fde26806428d0f70c",
          language: "pt-BR",
        }
      })
      .then((response)=>{
        setFilme(response.data);
        setLoading(false);
      })
      .catch(()=>{
        console.log("FILME NÂO ENCONTRADO")
      })
    }
    
    loadFilme();

  }, [])
  
  if(loading){
    return(
      <div className='filme-loading'>
        <h2>
          Carregando detalhes .....
        </h2>
        <Loading />
      </div>
    )
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} / 10 </strong>

      <div className='area-buttons'>
        <button>Salvar</button>
        <button>
          <a href="#">
            Trailer
          </a>
        </button>
      </div>

    </div>
  )
}

export default Filme