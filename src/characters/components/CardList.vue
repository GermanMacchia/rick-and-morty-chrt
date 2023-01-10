<script setup lang="ts">
//! 1
// import rickAndMortyApi from '@/api/rickAndMortyApi'
// import { Response, Character } from '../interfaces/character';
//! 2
// import { useCharacters } f../composables/useCharacters'
//! 3
import CharacterCard from './CharacterCard.vue'
import { useQuery } from '@tanstack/vue-query'
import type { Response, Character } from '../interfaces/character'
import rickAndMortyApi from '@/api/rickAndMortyApi'

//! 1- Suspense
// const {
//     data: { results: characters },
// } = await rickAndMortyApi.get<Response>('/character')

//! 2- Composable functions
// const { characters, isLoading, eError, error } = useCharacters()

//! 3- TanStack Query
const getCharactersSlow = async (): Promise<Character[]> => {
    return new Promise((resolve) => {
        setTimeout(async () => {
            const { data } = await rickAndMortyApi.get<Response>('/character')
            resolve(data.results)
        }, 2000)
    })
}

const { isLoading, data: characters } = useQuery(
    ['characters'],
    getCharactersSlow,
    {
        refetchOnReconnect: 'always',
    }
)
</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>
    <div class="card-list">
        <CharacterCard
            v-for="character of characters"
            :key="character.id"
            :character="character" />
    </div>
</template>

<style scoped>
.card-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>