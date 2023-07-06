<template>
  
  <div class="contenedorOpciones">
    <ul>
        <!--
            <li>p1</li>
        <li>p2</li>
        <li>p3</li>
        <li>p4</li>
        -->
        <li v-for="pokemon in opciones" :key="pokemon.id" @click="$emit('seleccionado',pokemon.id)">{{ pokemon.nombre }}</li>
    </ul>

  </div>
    
</template>

<script>
    export default {

    props:{
        opciones:{
            type: Array,
            required: true
        }
    },

    methods:{
        pruebaEvento(){
            console.log('prueba de evento')
        }
    }

}
</script>

<style>

ul{
    list-style-type: none;
    margin-right: 30px;
}

li{
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 4px;
    background-color: white;
    margin-bottom: 10px;
    height: 30px;
    width: 200px;
    cursor: pointer;
    
       
}

li:hover{
    background-color: cornflowerblue;
}

.contenedorOpciones{
    display: flex;
    justify-content: center;
    align-content: center   ;
}

</style>