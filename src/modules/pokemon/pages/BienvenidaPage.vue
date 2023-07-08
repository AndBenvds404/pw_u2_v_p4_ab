<template>


    <h1> Bienvenido</h1>
    <h2>POKEMON GAME</h2>
    <div class="textIntro">
        <p class="textoBienvenida"> ¡Bienvenido al emocionante juego de adivinar el Pokémon! 
        Prepárate para poner a prueba tus conocimientos y habilidades de observación.
       </p>
    
    </div>
    
    <div class="imagenesBienvenida">
        <PokemonImg class="poke1" :pokemonid="1" :muestraPokemon="true"/>
        <PokemonImg class="poke2" :pokemonid="4" :muestraPokemon="true"/>
        <PokemonImg   :pokemonid="7" :muestraPokemon="true"/>
    </div>

    
</template>

<script>
import PokemonPage from './PokemonPage.vue'
import PokemonImg from '../components/PokemonImg.vue'

    export default{

        components:{
            PokemonImg
        }


    }

</script>

<style scoped>

.textIntro {
    display: flex;
    justify-content: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: 27px;
    
}

.textoBienvenida{
    border: solid 1px black;
    width: 700px;
    align-items: center;
    margin-bottom: 100px;
    padding: 30px;
}


.imagenesBienvenida {
    
    right: 10px;
    justify-content:  space-between;
    width: 250px;
    height: 280px;
    
}
.poke1{
 position: absolute;
 right: 10%;
}
.poke2{
    position: absolute;
    left: 40%;
}





</style>