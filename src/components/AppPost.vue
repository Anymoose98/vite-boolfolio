<script>
import { store } from '../store.js'
    export default {
        props:{
            post: Object,
        },
    
        data() {
            return {
                store
            }
        },
    }
</script>

<template lang="">
    <div class="col-4">
        <div class="card m-2" >
            <img :src="'http://127.0.0.1:8000/storage/'  + post.img" class="card-img-top" :alt="post.title">
            <div class="card-body">
                <h5 class="card-title">{{post.title}}</h5>
                <p class="card-text">{{post.description}}</p>
                <a href="#" class="btn btn-primary">Per dettagli clicca qui</a>
            </div>
        </div>          
    </div>
</template>

<style lang="">
    
</style>