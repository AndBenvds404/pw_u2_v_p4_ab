<template>
  
  <h1>Juego Pokemon</h1>
  <PokemonImg :pokemonid="69" :muestraPokemon="false"/>
   <PokemonOps/>
</template>

<script>

import PokemonImg from '../components/PokemonImg.vue'
import PokemonOps from '../components/PokemonOps.vue'

export default {

    components:{
        PokemonOps,
        PokemonImg
    }

}
</script>

<style>


</style>