import Axios from 'axios'
import {Beer} from '../types/beerType'

export const apiSetting ={
    getBeers:async (page:number) => {
         try {
           const data: Beer[] = await Axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=25`).then((res) => res.data)
           return data
       } catch (error) {
            console.error(error)
       }
    }
}