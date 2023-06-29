<template>
  
  <div class="contenedorOpciones">
    <ul>
        <li>p1</li>
        <li>p2</li>
        <li>p3</li>
        <li>p4</li>
    </ul>

  </div>
    
</template>

<script>
export default {

}
</script>

<style>

ul{
    list-style-type: none;
}

li{
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 4px;
    background-color: white;
    margin-bottom: 10px;
    width: 200px;
    cursor: pointer;
       
}

li:hover{
    background-color: cornflowerblue;
}

.contenedorOpciones{
    display: flex;
    justify-content: center;
}

</style>