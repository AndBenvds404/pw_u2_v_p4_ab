<template>

    <h1>Reglas del Juego </h1>

    <p class="intro-reglas">En este desafiante juego, se te presentarán imágenes ocultas de diversos Pokémon y tendrás que adivinar de quién se trata.</p>

    <div class="contain-reglas">
        <div class="reglas">
            <ul>

                <li>Se seleccionará aleatoriamente un pokemon para mostrarlo como oculto</li>
                <li>Tendras 4 nombres de pokemons para seleccionar</li>
                <li>Selecciona el correcto y gana</li>
                <li>Tienes un total de 3 intenos para conseguirlo</li>
                <li>El puntaje se calcula deacuerdo a los intentos
                    <ul>
                        <li>Consigue adivinar al primer intento y gana 5 puntos</li>
                        <li>Consigue adivinar al segundo intento y gana 3 puntos</li>
                        <li>Consigue adivinar al tercer intento y gana 1 puntos</li>
                        <li>Si no conseguiste adivinar en los tres turnos podras Reiniciar</li>
                    </ul>

                </li>
                

            </ul>
        </div>

        <div class="img-ash">
            <img class="ash" src="../../../assets/ash.png" alt="">
        </div>
    
    </div>
   

   
    
</template>

<script>

</script>

<style scoped>

.ash{
    width: 540px;
    height: 592px;
}

.contain-reglas{
    display: flex;
}

.reglas{
    text-align: left;
    font-size: 22px;
    font-family: 'Courier New', Courier, monospace;
    
}
.reglas li{
    margin-left: 70px;
    padding: 7px;
}

.intro-reglas{
    font-family: 'Courier New', Courier, monospace;
    font-size: 40px;
    padding: 20px;
}



</style>