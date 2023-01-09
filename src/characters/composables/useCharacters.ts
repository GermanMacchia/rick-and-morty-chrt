import { ref } from 'vue'
import rickAndMortyApi from '@/api/rickAndMortyApi'
import { Character, Response } from '../interfaces/character'

export const useCharacters = () => {

    const characters = ref<Character[]>( [] )
    const isLoading = ref<boolean>( true )

    rickAndMortyApi.get<Response>( '/character' ).then( ( resp ) => {
        characters.value = resp.data.results
        isLoading.value = false
    } )


    return {
        characters,
        isLoading
    }
}