<template>

  <h1 v-if="!pokemonCorrecto"> Espere por favor .... </h1>
    <div v-else>  <!--siempre debe posicionarse debajo de una directiva V-IF-->
        <h1 class="titulo">Juego Pokemon</h1>

        <div class="stats">
            <h1>puntaje: {{puntaje}} </h1>
            <h1>intentos: {{intentos}}</h1>
        </div>


        <PokemonImg  :pokemonid="pokemonCorrecto.id" :muestraPokemon="showPokemon"/>
        <PokemonOps :opciones="pokeArreglo"  @seleccionado="revisarSeleccion($event)" />

    </div>


    <h1 v-if="mensajeWin"> Ganaste !!</h1>
    <h1 v-if="mensajelose"> Perdiste :c</h1>
    <h1 v-if="mensajeIntenta"> Intenta con otro pokemon</h1>
    <button v-if="mostrarBtn" @click="reiniciar()"> Nuevo Juego</button>


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
            mensajelose:false,
            puntaje:5,
            intentos:0,
            mostrarBtn:false,
            mensajeIntenta:false
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
            
           
            
            if(this.mensajeWin){
                this.mostrarBtn=true
            }else{
                
                if(this.intentos<=2){
                    
                    
                    if(idSeleccionado ==this.pokemonCorrecto.id){
                        this.showPokemon = true
                        this.mensajeIntenta=false
                        this.mensajeWin=true
                        this.mostrarBtn=true
                    }else if(this.intentos==2){
                        this.puntaje = 0
                        this.mensajeIntenta=false
                        this.mensajelose=true
                        this.mostrarBtn=true;
                    }else{
                        this.puntaje -=2
                        this.mensajeIntenta=true
                        this.mensajeWin=false
                    }
                    this.intentos++
                }
            }
            
            
            
        },
        reiniciar(){
            this.intentos=0
            this.puntaje=5
            this.cargaJuegoInicial()
            this.mensajeWin=false
            this.mensajelose=false
            this.mostrarBtn=false
            this.showPokemon=false
        }
    },
    mounted(){
        console.log('se monto el componente')
        this.cargaJuegoInicial()
    }
}
</script>

<style>
button{
    padding: 10px;
    width: 120px;
    box-shadow: 5px 5px 10px 2px;
    vertical-align: bottom;
    
}
button:hover{
    color: dodgerblue;
    vertical-align: middle; 
}
.stats{
    display: flex;
    justify-content: center;
}
.stats h1{
    margin: 10px 100px 20px 100px;
    
}
.titulo{
    color: yellow;
    font-size: 80px;
    -webkit-text-stroke: 3px blue;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    
}
</style>