<script>
import { store } from '../store.js';
export default {

    data() {
        return {
            store
            
        }
    },
    methods: {
        
    
    },
    created() {
       
    }
}


</script>
<template lang="">
    <header class="p-4">
        <div class="container">
            <div class="row ">
                
                <!-- indirizzo e Email -->
                <div class="col-4 ">
                   <div class="d-flex">
                       <i class="fa-solid fa-location-dot mx-2 "></i>
                       <div class="me-3">Via Ostia 32</div>

                   </div>
                    <div class="d-flex">
                        <i class="fa-solid fa-envelope mx-2 "></i>
                        <div>prova@gmail.com</div>
                    </div>

                </div>

                <!-- Logo e intro -->
                <div class="col-4 text-center">
                    <h1>Boolfoglio</h1>
                    <div class="d-flex justify-content-center">
                        <li v-for="(item, index) in store.menu" :key="index" class="menu-list mx-1">
                                <router-link :to="{ name: item.name }">{{ item.label }}</router-link>
                        </li>
                    </div>    
                </div>

             

                <!-- Social -->
                <div class="col-4 text-end ">
                    <div class="d-flex justify-content-center">
                        <div class="col-6 text-end">
                            <i class="fa-brands fa-instagram mx-2 "></i>
                        </div>
                        <div class="col-6 text-start">
                            <div>@prova</div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <div class="col-6 ">
                            <i class="fa-brands fa-whatsapp mx-2"></i>
                        </div>
                        <div class="col-6 text-start">
                            <div class="">+39 223363839</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </header>

</template>
<style lang ="scss" scoped>
header{
    background: rgb(252,135,0);
    background: -moz-linear-gradient(171deg, rgba(252,135,0,1) 36%, rgba(35,208,75,1) 98%);
    background: -webkit-linear-gradient(171deg, rgba(252,135,0,1) 36%, rgba(35,208,75,1) 98%);
    background: linear-gradient(171deg, rgba(252,135,0,1) 36%, rgba(35,208,75,1) 98%);
    color: white;
    width: 100%; /* Imposta la larghezza del 100% */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fc8700",endColorstr="#23d04b",GradientType=1);
    
    img{
        width: 120px;
    }
    
    .altezza{
        height: 100%;
        width: 100%;
    }

    .menu-list {
    list-style: none;
    color: white;
        a{
            text-decoration: none;
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: color 0.3s;

            &:hover {
                color: rgb(17, 0, 255);
            }
        }
    }
}

    </style>

