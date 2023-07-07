import {createRouter, createWebHashHistory} from 'vue-router'



const routes = [
    {
        path:"/",
        component: ()=> import('../modules/pokemon/pages/BienvenidaPage.vue')
      },
    {
        path:"/juego",
        component:()=> import( '../modules/pokemon/pages/JuegoPage.vue')
    },
    {
        path:"/premios",
        component:()=> import('../modules/pokemon/pages/PremiosPage.vue')
    },
    {
        path:"/juegoPokemon",
        component:()=> import('../modules/pokemon/pages/PokemonPage.vue')
    },
    {
        path:"/:pathMatch(.*)*",
        component: ()=> import('../modules/pokemon/pages/NotFound404Page.vue')

    }

]

const router = createRouter({
    //configuracion
        history: createWebHashHistory(),
    //rutas
        routes
})

export default router