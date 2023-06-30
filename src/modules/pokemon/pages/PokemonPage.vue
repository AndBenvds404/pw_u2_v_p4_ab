<template>
  
  <h1>Juego Pokemon</h1>
  <PokemonImg :pokemonid="69" :muestraPokemon="false"/>
   <PokemonOps :opciones="arreglo" />
</template>

<script>

import PokemonImg from '../components/PokemonImg.vue'
import PokemonOps from '../components/PokemonOps.vue'
import obtenerFachadaPokemons from "../helpers/clientePokemonApi"

export default {

    data(){
          return{
            arreglo:[]
          }      
    },

    components:{
        PokemonOps,
        PokemonImg
    },
    methods:{
        async cargaJuegoInicial(){
            this.arreglo = await obtenerFachadaPokemons()
            console.log(this.arreglo)
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