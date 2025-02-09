import { useState, useEffect } from "react"
import { PokemonCard } from "./components"

function App() {

  const [pokemonData, setPokemonData] = useState([])
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

  const fetchPokemons = async (id) =>{
    try {
      const response = await fetch(`${BASE_URL}${id}`)
      const data = await response.json()
      
      setPokemonData((pokemonData) => [...pokemonData, data]) 

      
    } catch (error) {
      console.error('Error al procesar los datos')
    }
    
  }

  const fetchAllPokemons = () => {
    for(let i = 1; i< 19; i++){
      fetchPokemons(i)
    }
  }


  useEffect(() =>{
    fetchAllPokemons()
  },[])





  return (
    <>
      <h1 className="text-4xl font-semibold text-center my-6">Pokedex</h1>
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          { pokemonData.map((pokemon, index) =>(<PokemonCard pokemonData={pokemon} key={index}/>))

          }
        </div>
      </div>
    </>
  )
}

export default App
