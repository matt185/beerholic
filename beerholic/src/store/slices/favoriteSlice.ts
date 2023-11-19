import { createSlice } from '@reduxjs/toolkit'

const getInitialValue = () => {
    const localFavorite: string | null = window.localStorage.getItem('beerholicFavorite');
    if (localFavorite) {
        return JSON.parse(localFavorite)
    }
    window.localStorage.setItem("beerholicFavorite", JSON.stringify({
        favorites: [],
        favoriteId:[]
    }))
    return []
}

const initialState = {
    favoritesBeer:getInitialValue()
}
export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorites: (state, actions) => {
            const beer = actions.payload
            state.favoritesBeer.favorites.push(actions.payload)
            state.favoritesBeer.favoriteId.push(beer.id)
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
            const idx = state.favoritesBeer.favoriteId.indexOf(id)
            console.log(id, idx)
            state.favoritesBeer.favorites.splice(idx, 1)
            state.favoritesBeer.favoriteId.splice(idx, 1)
            const favoriteList = window.localStorage.getItem('beerholicFavorite')
            if (favoriteList) { 
                const list = JSON.parse(favoriteList)
                list.favorites.splice(idx, 1)
                list.favoriteId.splice(idx, 1)
                window.localStorage.setItem('beerholicFavorite', JSON.stringify(list))
            }
        }
    },
})

export const {
    addFavorites,
    removeFavorites
}= favoriteSlice.actions