<template>
    <metainfo>
        <template v-slot:title="{ content }">
            {{ content ? `${content}` : '' }}
        </template>
    </metainfo>
    <router-view />
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch('getProducts')
        this.$store.commit('populateCartItems')
    },
}
</script>
