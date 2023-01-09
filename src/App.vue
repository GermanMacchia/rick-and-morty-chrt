<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './shared/components/NavBar.vue'
import { routerLinks } from './router/link-routes'
</script>

<template>
    <div class="wrapper">
        <header>
            <NavBar title="Rick & Morty" :links="routerLinks" />
        </header>
        <main>
            <Suspense>
                <RouterView />
            </Suspense>
        </main>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
}
</style>