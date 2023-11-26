import { createAsyncThunk } from '@reduxjs/toolkit'

export const favoriteInitialData= createAsyncThunk(
    'favorite/initialData',
   async () => {
        try {
            const localFavorite: string | null = window.localStorage.getItem('beerholicFavorite');
            if (localFavorite) {
                return JSON.parse(localFavorite)
            }
            window.localStorage.setItem("beerholicFavorite", JSON.stringify({
                favorites: [],
                favoriteId:[]
            }))
            return []
        } catch (error) {
            console.log(error)
        }
   }
)