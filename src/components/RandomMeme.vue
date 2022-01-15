<template>
    <Meme v-bind:meme="meme" />
</template>

<script>
    import Meme from "./Meme.vue";

    export default {
        name: "RandomMeme",
        components: {
            Meme
        },
        data() {
            return {
                meme: {
                    title: "Nope.avi",
                    link: ""
                }
            };
        },
        mounted() {
            fetch("http://localhost:5000/api/random/").then(res => res.json()).then(data => this.meme = data).catch(error => console.log(error.message));
        }
    }
</script>
