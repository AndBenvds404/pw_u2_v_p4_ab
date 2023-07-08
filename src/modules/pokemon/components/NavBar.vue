<template>

  <div class="barraNavegacion">

      <div class="logo">
        <img src="../../../assets/logoPokemon.png" alt="">
      </div>

      <div>
        <router-link to="/"> Bienvenida</router-link>
        <router-link to="/juego">Reglas</router-link>
        <router-link to="/premios">Premios</router-link>
        <router-link to="/juegoPokemon">Pokemon</router-link>

      </div>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>



div a{
    font-weight: bold;
    color: cornflowerblue;
    margin: 0 10px;
    font-size: 20px;
}

a:hover{
  color: aliceblue;
}

.barraNavegacion{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(148, 24, 24, 0.3);
   
}

.logo{
  align-items: center;
  
}
div img{
  width: 50px;
  height: 50px;
}


</style>
