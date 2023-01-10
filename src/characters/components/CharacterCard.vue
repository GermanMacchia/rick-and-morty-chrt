<script setup lang="ts">
import { toRef } from 'vue'
import type { Character } from '../interfaces/character'
const props = defineProps<{ character: Character }>()
const character = toRef(props, 'character')
</script>

<template>
    <div class="character-card">
        <img :src="character.image" class="card-width" :alt="character.name" />
        <h3 class="card-width">{{ character.name }}</h3>
    </div>
</template>

<style scoped>
.character-card {
    margin-top: 10px;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}
.card-width {
    width: 300px;
}
img {
    border-radius: 5px 5px 0px 0px;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
}
</style>