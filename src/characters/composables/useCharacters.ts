import { onMounted, ref } from 'vue'
import rickAndMortyApi from '@/api/rickAndMortyApi'
import { Character, Response } from '../interfaces/character'
import axios from 'axios'

const characters = ref<Character[]>( [] )
const isLoading = ref<boolean>( true )
const isError = ref<boolean>( false )
const error = ref<string>()

export const useCharacters = () => {

    onMounted( async () => {
        loadCharacters()
    } )

    const loadCharacters = async () => {
        if ( characters.value.length > 0 ) return
        try {
            const { data } = await rickAndMortyApi.get<Response>( '/character' )
            characters.value = data.results
            isLoading.value = false
        } catch ( err ) {
            isError.value = true
            isLoading.value = false
            if ( axios.isAxiosError( err ) ) {

                return error.value = err.message
            }
            error.value = JSON.stringify( err )
        }
    }

    return {
        characters,
        isLoading,
        isError,
        error
    }
}