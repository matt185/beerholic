import { createSlice } from '@reduxjs/toolkit'
import { FavoritesInitialData } from '../../types/beerType'
import { favoriteInitialData } from '../reducers/getFavoriteInitialData'

// const getInitialValue = () => {
//     const localFavorite: string | null = window.localStorage.getItem('beerholicFavorite');
//     if (localFavorite) {
//         return JSON.parse(localFavorite)
//     }
//     window.localStorage.setItem("beerholicFavorite", JSON.stringify({
//         favorites: [],
//         favoriteId:[]
//     }))
//     return []
// }

const initialState:FavoritesInitialData = {
    favorites:[],
    favoriteId:[]
}
export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorites: (state, actions) => {
            const beer = actions.payload
            state.favorites!.push(actions.payload)
            state.favoriteId!.push(beer.id)
            const favoriteList = window.localStorage.getItem('beerholicFavorite')
            if (favoriteList) {
                const list = JSON.parse(favoriteList)
                if (!list.favoriteId.includes(beer.id)){
                    list.favorites.push({ ...actions.payload })
                    list.favoriteId.push(beer.id)
                    window.localStorage.setItem('beerholicFavorite', JSON.stringify(list))
                }
            }
        },
        removeFavorites: (state, actions) => {
            const id = actions.payload
            const idx = state.favoriteId!.indexOf(id)
            console.log(id, idx)
            state.favorites!.splice(idx, 1)
            state.favoriteId!.splice(idx, 1)
            const favoriteList = window.localStorage.getItem('beerholicFavorite')
            if (favoriteList) { 
                const list = JSON.parse(favoriteList)
                list.favorites.splice(idx, 1)
                list.favoriteId.splice(idx, 1)
                window.localStorage.setItem('beerholicFavorite', JSON.stringify(list))
            }
        }
    },
    extraReducers: builder =>{
        builder.addCase(favoriteInitialData.fulfilled,(state,actions)=>{
            if (actions.payload.favoriteId){
            state.favoriteId=actions.payload.favoriteId
            }
            if (actions.payload.favorites){
                state.favorites= actions.payload.favorites
            }
        })
    }
})

export const {
    addFavorites,
    removeFavorites
}= favoriteSlice.actions