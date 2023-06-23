<template>
  <h1>CARACOLA MÁGICA</h1>
  
  <div class="sombreadoImg">
    <img  v-if="urlImg"  v-bind:src="urlImg"  alt="No se puede presentar">
  </div>
  

    <br>
    <div class="contenedor">
        <input v-model="pregunta" type="text" placeholder="ajme una pregunta manito">
            <p>Recuerda terminar con un enter la pregunta</p>

            <div>
                <h2>{{ pregunta }}</h2>
                <h1>{{ respuesta }}</h1> 
            </div>      
    </div>
  
</template>



<script>
export default {

    data(){
        return{
            pregunta: 'Hola Mundo',
            respuesta: '',
            urlImg: null
        }
    },

    methods:{

        async consumirApi(){
            const respuesta = await fetch('https://yesno.wtf/api').then(r=>r.json())
            console.log(respuesta )
            const{answer, image} = respuesta
            this.respuesta=answer
            this.urlImg=image

        }
    },

    watch:{
        pregunta(value, oldValue){
                console.log('value: '+ value)
                console.log('oldValue: '+oldValue)
                if(value.includes('?') ){
                    console.log('consumir el API')
                    this.consumirApi()
                    
                }
        }        
    }
        
}
</script>



<style>
img, .sombreadoImg {
        height: 100vh;
        width: 100vw;
    left: 0px;
    max-width: 100%;
    max-height: 100%;
    position: fixed;
    top: 0px;

}

.sombreadoImg{
    background-color: rgba(rgb(19, 2, 2), rgb(104, 95, 95), rgb(31, 29, 29), 4);
}

.contenedor{
    position: relative;
}
input{
    width: 250px;
    padding: 10px 15px;
    border-radius: 3px;
    font-size: 30px;
    border: none;

}

p, h1, h2 {
    color: antiquewhite;
}

h2  {
    font-size: 40px;
    margin-top: 0px;
}

</style>