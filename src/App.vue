<template>
    <nav>
        <router-link to="/" class="nav-link">Memy</router-link>
        <router-link to="/random" class="nav-link">Losowy mem</router-link>
    </nav>
    <main>
        <router-view />
    </main>
</template>

<script>
    export default {
        name: "App"
    }
</script>
