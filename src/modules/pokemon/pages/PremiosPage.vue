<template>
    <h1> Estos son los Premios</h1>

    
    <div class="premios">
         
        <div class="podium">
            <h2 class="p1">1</h2>
            <h2 class="p2">2</h2>
            <h2 class="p3">3</h2>
        </div>
           
        
        <div class="descripcion">
            <div class="des1">
                <p>- Un certificado personalizado que te acredite como "Campeón Pokémon del juego" y una medalla virtual exclusiva.</p>
                <p>- Un set de tarjetas coleccionables de Pokémon en una edición especial.</p>
                <p>- Un peluche o figura de acción de un Pokémon legendario.</p>
            </div>
            
            <br>

            <div class="des1">
                <p>- Un certificado de reconocimiento como "Entrenador Élite" y una medalla virtual.</p>
                <p>- Un libro de arte oficial de Pokémon con ilustraciones exclusivas.</p>
                <p>- Un pack de expansiones de cartas del juego de cartas coleccionables de Pokémon. </p>
            </div>
            
            <br>
            <div class="des1">
                <p>- Un certificado de "Maestro Pokémon" y una medalla virtual de bronce.</p>
                <p>- Un videojuego de Pokémon de la última generación para la consola de tu elección.</p>
                <p>- Un set de pines o llaveros temáticos de Pokémon.</p>
            </div>
            
        </div>
       
        


    </div>
   
    
    
</template>

<script>

</script>

<style scoped>

.premios{
   
   
    display: flex;
    justify-content: center;
    margin: 70px;

}

.descripcion {
    font-family: 'Courier New', Courier, monospace;
    text-align: justify;
   
}

.p1{
    padding: 30px;
    background-color: rgba(236, 99, 99, 0.403) 
}
.p2{
    padding: 30px;  
    background-color: rgba(99, 149, 236, 0.403) 
    
}

.p3{
    padding: 30px;
    background-color: rgba(126, 117, 117, 0.403) 
}

.des1{
    margin-bottom: 50px;
    width: 700px;
}



</style>