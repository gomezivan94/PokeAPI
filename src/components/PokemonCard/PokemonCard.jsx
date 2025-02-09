import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'

function PokemonCard({pokemonData}) {
    if(!pokemonData){
        return <h1>Cargando Pokemon...</h1>
    }
    return (
    <div className='container mx-1 '>
        <Card border='primary' className='align-items-center bg-dark text-white shadow m-2 card' style={{ width: '18rem' }}>
        <Image className='w-50'  variant="top" src={pokemonData.sprites.front_default} />
            <Card.Body className='text-center'>
                <Card.Title className='font-bold'>{pokemonData.name}</Card.Title>
                <Card.Text>Id:{pokemonData.id}
                </Card.Text>
                <Card.Text>Weight:{pokemonData.weight}</Card.Text>
                <Card.Text>Height:{pokemonData.weight}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default PokemonCard