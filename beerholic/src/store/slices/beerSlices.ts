import { createSlice } from '@reduxjs/toolkit'
import { BeersInitialState } from '../../types/beerType'
import { initialData } from '../reducers/getInitialData'

const initialState: BeersInitialState = {
    beers: undefined,
    beer:undefined
}

export const beerSlice = createSlice({
    name: 'beers',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(initialData.fulfilled, (state, actions) => {
            state.beers=actions.payload
        })
    }
})

export const {
    
}= beerSlice.actions

