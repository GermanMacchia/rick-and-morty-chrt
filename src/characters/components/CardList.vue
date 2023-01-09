<script setup lang="ts">
// import rickAndMortyApi from '@/api/rickAndMortyApi'
// // import { Response, Character } from '../interfaces/character';
import { useCharacters } from '../composables/useCharacters'

// // //suspense
// // const {
// //     data: { results: characters },
// // } = await rickAndMortyApi.get<Response>('/character')
const { characters, isLoading } = useCharacters()
</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>
    <ul>
        <li v-for="character of characters" :key="character.id">{{
            character.name
        }}</li>
    </ul>
</template>

<style scoped></style>