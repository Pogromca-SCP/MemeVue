<template>
    <ul class="meme-list">
        <!-- v-for pozwala na u¿ycie pêtli do generowania elementów -->
        <li v-for="meme in memes" :key="meme">
            <Meme v-bind:meme="meme" />
        </li>
    </ul>
</template>

<script>
    import Meme from "./Meme.vue";

    export default {
        name: "MemeList",
        components: {
            Meme
        },
        data() {
            return {
                memes: []
            };
        },
        mounted() {
            fetch("http://localhost:5000/api/").then(res => res.json()).then(data => this.memes = data).catch(error => console.log(error.message));
        }
    }
</script>
