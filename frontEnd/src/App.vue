<script setup>
import MyNavbar from './components/layouts/MyNavbar.vue';
</script>

<template>
    <MyNavbar />
    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
</template>

<style scoped></style>