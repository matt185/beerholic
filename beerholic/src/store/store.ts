
import {configureStore,ThunkAction,Action} from '@reduxjs/toolkit'
import { beerSlice } from './slices/beerSlices'

export const store = configureStore({
    reducer: {
        beers: beerSlice.reducer
    }
})

export type AppDispach = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppTrunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>