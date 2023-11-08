import { createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'
import { Beer } from '../../types/beerType'

export const initialData = createAsyncThunk(
    'beers/initialData',
    async () => {
       try {
           const data: Beer[] = await Axios.get("https://api.punkapi.com/v2/beers?page=1&per_page=20").then((res) => res.data)
           return data
       } catch (error) {
            console.error(error)
       }
    
   }
)
