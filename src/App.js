import React, { Component } from 'react';
import './App.css';

import axios from "axios";
import Header from './Components/Header'
import Navbar from './Components/Navbar.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      baseUrl: "https://pokeapi.co/api/v2/pokemon/",
      userInput: '',
      notFound: false
    }

  }

 
findPokemon(){
  axios.get(`${this.state.baseUrl}${this.state.userInput}`).then(resp=> {
    let data = resp.data
      console.log(data)

         let temp= this.state.pokemon.slice()
         temp.push(data)
         this.setState({pokemon:temp,notFound:false})
      
    }).catch((error)=>{
      this.setState({notFound: true})
    })

}


  render() {
    const { pokemon } = this.state; 
    const displayPokemon = pokemon.map( (pokemon,i) => {
      console.log(pokemon.sprites)
      return (
      <div className='output' key = {i}> 
        <img className ="sprite" src={pokemon.sprites.front_default} alt=''/>
        <div className ='pokemonInfo'>Pokemon: { pokemon.name }       Type: { pokemon.types[0].type.name }</div>
      </div>
    )
  })
    return (
      <div className="App">
      <Header/>

      <div className='screenParent'>
      <div className='screen'>
          <div className='searchBar'>
            <input id ='search' type='text' maxlength="25" value={this.state.userInput} placeholder='find pokemon' onChange={e=>this.setState({userInput:e.target.value})}></input>
            
            <button id='goButton' onClick={()=>this.findPokemon()}>GO!</button>
          </div>
        {
          this.state.notFound
          ?
          <p>Check your spelling: pokemon not found</p>
          :
          null

        }
      </div>
      </div>

        <p className='pokedex'>Pokedex <p>{displayPokemon}</p>   </p>
         
          
        
      </div>
    );
  }
}

export default App;