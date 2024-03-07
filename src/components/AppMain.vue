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
            console.log(response.data.results);
        })
    }
}
</script>

<template>
    <main class="container">
        <AppPost /> 
    </main>
</template>

<style scoped>
/* Aggiungi i tuoi stili locali qui */
</style>
