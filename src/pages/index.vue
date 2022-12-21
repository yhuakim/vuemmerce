<template>
    <section>
        <div id="home">
            <HeroSection />
        </div>
        <div id="trend">
            <TrendingSection />
        </div>
    </section>
</template>

<script setup>
import { useMeta } from 'vue-meta'
import HeroSection from '~/components/HeroSection.vue'
import TrendingSection from '~/components/TrendingSection.vue'

useMeta({
    title: 'Homepage',
})
</script>

<style>
a {
    text-decoration: underline;
    transition: color 0.3s;
}

a:hover {
    color: cadetblue;
}
</style>
