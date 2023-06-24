<template>
  <h1>CARACOLA MÁGICA</h1>
  
  
    <img  v-if="urlImg"  v-bind:src="urlImg"  alt="No se puede presentar">
    <div class="sombreadoImg"></div>

    <p v-if="win" class="winer">YOU WIN </p>
  
    
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
            urlImg: null,
            win: false,
            countWin: 0
        }
    },

    methods:{

        async consumirApi(){
            const respuesta = await fetch('https://yesno.wtf/api').then(r=>r.json())
            console.log(respuesta )
            const{answer, image} = respuesta
            this.respuesta=answer
            this.urlImg=image
            this.verificarYesNo(answer)

        },


        verificarYesNo(answer){
            if(answer.toLowerCase()=="yes"){
                this.countWin++
                if(this.countWin==2){
                    
                    this.win=true;
                    this.countWin=0;
                }
                    
            }else{
                this.countWin=0;
                this.win=false;
            }
            

        }


    },

    watch:{
        pregunta(value, oldValue){
                
                if(value.includes('?') ){
                  
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
    background-color: rgba(0, 0, 0, 0.4);
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
.winer{
    margin: 0;
    position: relative;
    display: block;
    color: aqua;
    font-family: 'Courier New', Courier, monospace;
    font-size: 170px;
    text-shadow: 1px 1px  17px rgb(212, 226, 14);
}

h2  {
    font-size: 40px;
    margin-top: 0px;
}

</style>