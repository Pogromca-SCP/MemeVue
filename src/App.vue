<!--
    Komponenty w Vue definiuje si� u�ywaj�c HTML z dodatkami

    W sekcji template definiujemy elementy komponentu, a w sekcji script
    dodajemy funkcjonalno�� (mo�na te� doda� css'a w sekcji style)
-->
<template>
    <nav>
        <!-- router-link pozwala na stworzenie linku do komponentu w ruterze -->
        <router-link to="/" class="nav-link">Memy</router-link>
        <router-link to="/random" class="nav-link">Losowy mem</router-link>
    </nav>
    <main>
        <!-- router-view renderuje komponenty wybrane przez ruter -->
        <router-view />
    </main>
</template>

<script>
    export default {
        name: "App"
    }
</script>
