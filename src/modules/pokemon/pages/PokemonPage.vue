<template>
  
  <h1 v-if="!pokemonCorrecto"> Espere por favor .... </h1>
    <div v-else>  <!--siempre debe posicionarse debajo de una directiva V-IF-->
        <h1>Juego Pokemon</h1>
        <PokemonImg  :pokemonid="pokemonCorrecto.id" :muestraPokemon="showPokemon"/>
        <PokemonOps :opciones="pokeArreglo"  @seleccionado="revisarSeleccion($event)" />
        
    </div>
    <h1 v-if="mensajeWin"> Ganaste !!</h1>
        <h1 v-if="mensajelose"> Perdiste :c</h1>

  
</template>

<script>

import PokemonImg from '../components/PokemonImg.vue'
import PokemonOps from '../components/PokemonOps.vue'
import obtenerFachadaPokemons from "../helpers/clientePokemonApi"

export default {

    data(){
          return{
            pokeArreglo:[],
            pokemonCorrecto : null,
            showPokemon: false,
            mensajeWin:false,
            mensajelose:false

          }      
    },

    components:{
        PokemonOps,
        PokemonImg
    },
    methods:{
        async cargaJuegoInicial(){
            const arreglo = await obtenerFachadaPokemons()
            console.log(this.pokeArreglo)
            this.pokeArreglo = arreglo
            
            const indicePokemon = Math.floor(Math.random()*4)
            this.pokemonCorrecto = this.pokeArreglo[indicePokemon]
        },

        revisarSeleccion(idSeleccionado){
            console.log('evento en el padre')
            
            if(idSeleccionado ==this.pokemonCorrecto.id){
                this.showPokemon = true
                this.mensajeWin=true
                this.mensajelose= false
            }
            this.mensajelose=true
            
            
        }
    },

    mounted(){
        console.log('se monto el componente')
        this.cargaJuegoInicial()

    }

}
</script>

<style>


</style>