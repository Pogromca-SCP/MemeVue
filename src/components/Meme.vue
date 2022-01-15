<template>
    <div class="meme">
        <!-- innerHTML wstrzykujemy w podwójnych klamrach, lecz atrybuty wstrzykujemy u¿ywaj¹c v-bind:atrybut -->
        <h1 class="meme-header">{{ meme.title }}</h1>
        <img v-bind:src="meme.link" v-bind:alt="meme.title" width="400" height="400" class="meme-img" />
    </div>
</template>

<script>
    // Parametrom mo¿na przypisaæ oczekiwany typ
    export default {
        name: "Meme",
        props: {
            meme: Object
        }
    }
</script>
