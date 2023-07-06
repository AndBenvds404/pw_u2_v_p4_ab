<template>

  <div class="contenedorImg">

    <img class="ocultarPokemon" :src="imagenFuente" alt="no se puede mostrar img">
    
    <img v-if="muestraPokemon"  :src="imagenFuente" alt="no se puede mostrar img">
    
  </div>
  
  

</template>

<script>

export default {

  props:{
    pokemonid:{
      type:Number,
      required: true
    },
    muestraPokemon:{
      type: Boolean,
      required:true
    }
  },
  
  computed:{

    imagenFuente(){
      
      //return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+this.pokemonid+".svg"
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonid}.svg`
    }

  }

}



</script>

<style scoped>


.ocultarPokemon{
  filter: brightness(0);
}

img{
  position: absolute;
  height: 200px;
  width: 400px;
  right: 37%;
}
  
.contenedorImg{

 
  justify-items: center;
  text-align: center;
  height: 200px;

}

</style>