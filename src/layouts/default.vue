<template>
    <main class="">
        <navBar />
        <router-view />
    </main>
</template>

<script>
import navBar from './navBar.vue'
export default {
    components: {
        navBar,
    },
}
</script>
