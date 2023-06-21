<template>
    <h3>{{ titulo }}</h3>
    <h3>{{ tituloComponente }}</h3>
    <p>{{ numero }}  <sup>2</sup>={{ otenerCuadradoComputado }}</p>
    <p>{{ numero }}  <sup>2</sup>={{ otenerCuadradoComputado}}</p>
    
    
    
    <button v-on:click="aumentar">+</button>
    <button v-on:click="disminuir">-</button>
    
  </template>
  
  <script>
  export default {
    name: "Contador" ,
 
    data(){
        return{
            numero:5,
            tituloComponente: this.titulo
        }

    },
    
    methods:{
            cuadrado(){
                console.log('entro al metodo cuadrado')
                return this.numero *this.numero;
                
        },

            aumentar(){
                return this.numero++
            },

            
            disminuir(){
                return this.numero--
            }
    },

    
    
    computed:{
        otenerCuadradoComputado(){
            console.log('entro al metodo otener Cuadrado Computado')
                return this.numero *this.numero;
        }
    },

    props:['titulo','valor2']



    
  };
  </script>
  
  <style>


button{
    margin: 10px;
    padding: 10px 20px;
    border: none;
    background: linear-gradient(#13df8aec , rgb(19, 209, 136) 50px);
    color: white;
    cursor: pointer;
}

button:hover{
    background: rgb(33, 60, 150);
}


  </style>
