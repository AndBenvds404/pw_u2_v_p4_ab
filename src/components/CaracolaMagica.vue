<template>
  <h1>CARACOLA MÁGICA</h1>
    <img src="https://via.placeholder.com/250" alt="No se puede presentar">

    <input v-model="pregunta" type="text" placeholder="ajme una pregunta manito">
    <p>Recuerda terminar con un enter la pregunta</p>

    <div>
        <h2>Voy a pasar de año?</h2>
        <h1>SI, NO</h1> 
    </div>

</template>



<script>
export default {

    data(){
        return{
            pregunta: 'Hola Mundo'
        }
    }

}
</script>



<style>

</style>