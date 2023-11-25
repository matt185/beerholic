import { createSlice } from '@reduxjs/toolkit'
import { BeersInitialState } from '../../types/beerType'
import { initialData } from '../reducers/getInitialData'

const initialState: BeersInitialState = {
    page: 1,
    haveMore:true,
    beers: undefined,
    beer:undefined
}

export const beerSlice = createSlice({
    name: 'beers',
    initialState,
    reducers: {
        setBeers: (state, actions) => {
            if (state.beers){
                state.beers = [...state.beers, ...actions.payload]
            } else {
                state.beers=[...actions.payload]
            }
            state.page ++
        },
        setPage: (state) => {
            state.page++
        },
        setHaveMore: (state) => {
            state.haveMore=!state.haveMore
        }
    },
    extraReducers: builder => {
        builder.addCase(initialData.fulfilled, (state, actions) => {
            state.beers = actions.payload
        })
    }
})

export const {
    setBeers,
    setPage,
    setHaveMore
}= beerSlice.actions

