<template>
    <div class="meme">
        <h1 class="meme-header">{{ meme.title }}</h1>
        <img v-bind:src="meme.link" v-bind:alt="meme.title" width="400" height="400" class="meme-img" />
    </div>
</template>

<script>
    export default {
        name: "Meme",
        props: {
            meme: Object
        }
    }
</script>
