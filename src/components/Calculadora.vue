<template>
  
  <div class="marcoCalc">
    
    <header class="cabecera"> 
        <h1> CALCULADORA</h1>
    </header>
    <nav> </nav>
    <section>

            <input  id="IdlabelResultado"  for="" v-model="res" />
                <div class="botonesNums">

                    <button v-on:click="insertarElemento(7)"> 7 </button>
                    <button v-on:click="insertarElemento(8)"> 8 </button>
                    <button v-on:click ="insertarElemento(9)"> 9 </button>
                    <button v-on:click ="insertarElemento(4)"> 4 </button>
                    <button v-on:click ="insertarElemento(5)"> 5 </button>
                    <button v-on:click ="insertarElemento(6)"> 6 </button>
                    <button v-on:click ="insertarElemento(1)"> 1 </button>
                    <button v-on:click ="insertarElemento(2)"> 2 </button>
                    <button v-on:click ="insertarElemento(3)"> 3 </button>
                    <button v-on:click ="insertarElemento(0)"> 0 </button> 
                    <button v-on:click ="operacion('÷')"> / </button>
                    <button v-on:click  ="operacion('+')" > + </button>
                    <button v-on:click ="operacion('-')"> - </button>
                    <button v-on:click ="operacion('*')" > * </button>
                
                    <button v-on:click="calcular()"> = </button>
                
                </div>
    
        
   
    </section>
    <footer> </footer>
</div>
  
</template>

<script>

var expresion = ""
var operador =""
var resultado =""
var numero1 = 0;
var numero2 = 0;

export default {

    data(){
        return{
            res : resultado
        }
    },

    computed:{
        multiplicacionComputado(){
            console.log('entro al metodo   Computado  '+numero1+ " - " +numero2)

                return numero1 *numero2;
        },
        sumarComputado () {
            console.log('entro al metodo   Computado  '+numero1+ " - " +numero2) 
            return numero1+numero2;
        },

         restarComputado (){
            console.log('entro al metodo   Computado  '+numero1+ " - " +numero2)
          return numero1-numero2;
        },
         multiplicarComputado (){
            console.log('entro al metodo   Computado  '+numero1+ " - " +numero2)
            return numero1*numero2;
        },
         dividirComputado (){ 
            console.log('entro al metodo   Computado  '+numero1+ " - " +numero2)
            return numero1/numero2;
        },

    },

    methods:{

        insertarElemento(num){

            var contenido = num;
            expresion += contenido;
            this.res=expresion;
           },

        calcular(){

            numero2 = parseInt(expresion);
            console.log("calcular"+numero2+"  "+numero1 + "operador: "+operador)
            switch (operador){
                case '+':

                    this.res ="=  "+ this.sumarComputado;
                    break;
                case '-':
                    this.res = "=  "+this.restarComputado;

                    break;
                case '*':
                    this.res = "=  "+this.multiplicacionComputado;

                    break;
                case '÷':
                    this.res = "=  "+ this.dividirComputado;

                    break;

            }
            expresion = " ";


        },


        operacion(signo){
            numero1 = parseInt(expresion);
            operador = signo;
            this.res= signo+"  " +numero1 
            expresion = "";    

        }
    }


}
</script>




<style>

body{
    text-align: center;
   
}
.marcoCalc{
    width: 500px;
    margin: 20px auto;
}
section{
    text-align: center;
    border: 4px double black;
    padding-top: 40px;
    background-color: rgb(88, 123, 153);
    box-shadow: 3px 3px 3px 3px cornflowerblue;
    border-radius: 20px;
}
.botonesNums {
    margin: 40px;
    padding: 10px;

}

#IdlabelResultado{
    overflow: hidden;

    white-space: nowrap;

}

.botonesNums button {
    padding: 35px 40px;
    margin: 8px;
    font-size: 40px;
    border-radius: 20px;
   
}
#botonCero{
    float: left;
    margin-left: 22px;
    
}
.cabecera h1{
    text-align: center;
}
section label{
    text-align: center;
    display: inline-block;
    background-color: rgb(67, 69, 69);
    color: aliceblue;
    font-size: 60px;
    border: 2px double black ;
    width: 350px;
    height: 60px;
    font-family: 'Courier New', Courier, monospace;
   
}


</style>