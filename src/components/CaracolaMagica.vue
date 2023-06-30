<template>
  <h1>CARACOLA MÁGICA</h1>
<<<<<<< HEAD
  
=======

   
    <img  v-if="urlImg"  v-bind:src="urlImg"  alt="No se puede presentar">
    <div class="sombreadoImg"> </div>
>>>>>>> a418f5519082d531e1925841be1314dc726d75ce
  
    <img  v-if="urlImg"  v-bind:src="urlImg"  alt="No se puede presentar">
    <div class="sombreadoImg"></div>

    <p v-if="win" class="winer">YOU WIN </p>
    <p  v-bind:class="getstile()">{{intentando}} </p>
  
    
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
            pregunta: '',
            respuesta: '',
            urlImg: null,
            win: false,
            countWin: 0,
            intentando: ''

        }
    },

    methods:{

        getstile(){
        
                if(this.win){
                    console.log("if: "+ this.win)
                    return 'stile2'
                }else{
                    console.log("else: "+ this.win)
                    return 'stile1'
                }
    

        },

        async consumirApi(){
            const respuesta = await fetch('https://yesno.wtf/api').then(r=>r.json())
            const{answer, image} = respuesta
            this.respuesta=answer
            this.urlImg=image
            this.verificarYesNo(answer)

        },


        verificarYesNo(answer){
            if(answer.toLowerCase()=="yes"){
                this.countWin++
                this.win=true
                this.getstile()
                this.intentando='una más !'
                
                if(this.countWin==3){
                    this.intentando=''
                    this.win=true;
                    this.countWin=0;
                }
                    
            }else{
                this.countWin=0;
                this.win=false;
                this.getstile()
                this.intentando = "Sigue Intentando !"
            }
            

        }


    },

    watch:{
        pregunta(value, oldValue){
<<<<<<< HEAD
                
                if(value.includes('?') ){
                  
=======
                console.log('value: '+ value)
                console.log('oldValue: '+oldValue)

                if(value.includes('?') ){
                    console.log('consumir el API')
                    this.respuesta = 'pensado...'
>>>>>>> a418f5519082d531e1925841be1314dc726d75ce
                    this.consumirApi()
                    this.pregunta = ''
                    
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

.stile1{
    margin: 0;
    position: relative;
    display: block;
    color:rgb(139, 0, 0);
    font-family: 'Courier New', Courier, monospace;
    font-size: 170px;
    text-shadow: 1px 1px  17px rgb(212, 226, 14);
}

.stile2{
    margin: 0;
    position: relative;
    display: block;
    color: blueviolet;
    font-family: 'Courier New', Courier, monospace;
    font-size: 170px;
    text-shadow: 1px 1px  17px rgb(212, 226, 14);
}

.sombreadoImg{
<<<<<<< HEAD
    background-color: rgba(0, 0, 0, 0.4);
=======
    background-color: rgba(0, 0, 0, 0.5);
>>>>>>> a418f5519082d531e1925841be1314dc726d75ce
}

.contenedor{
    position: relative;
    justify-content: center;
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