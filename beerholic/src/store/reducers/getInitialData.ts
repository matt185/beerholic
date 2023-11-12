import { createAsyncThunk } from '@reduxjs/toolkit'
import { Beer } from '../../types/beerType'
import {apiSetting} from '../../utils/api'

export const initialData = createAsyncThunk(
    'beers/initialData',
    async (page:number) => {
       try {
           const data: Promise<Beer[] | undefined> = apiSetting.getBeers(page)
           return await data
       } catch (error) {
            console.error(error)
       }
    
   }
)
