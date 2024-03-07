<script>
import AppPost from './AppPost.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppMain',
    components: {
        AppPost 
    },
    data() {
        return {
            store,
            posts:[],

        }
    },
    methods: {
       
    },
    created() {
        axios.get(this.store.ApiPosts)
        .then(response => {
            this.posts = response.data.results;
        })
    }
}
</script>

<template>
    <main class="container">
        <div class="row">
            <div class="d-flex flex-wrap">
            
                <AppPost v-for="post in posts" :key="posts" :post="post"/> 
            </div>
        </div>
    </main>
</template>

<style scoped>
</style>
