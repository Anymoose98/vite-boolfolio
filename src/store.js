import { reactive } from "vue";

export const store = reactive({
    ApiPosts: 'http://127.0.0.1:8000/api/posts',

    menu:[
        {
            name:'Home',
            label:'Home'
        },

        {
            name:'Main',
            label:'Main'
        }
    ]
})