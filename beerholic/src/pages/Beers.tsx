import React, { useEffect } from 'react'
import { Loader } from '../components/Loader'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { initialData } from '../store/reducers/getInitialData'

interface BeersProps {

}

const Beers: React.FC<BeersProps> = ({ }) => {
    const dispatch = useAppDispatch()
    const { beers } = useAppSelector(({ beers }) => beers)

    useEffect(() => {
        dispatch(initialData())
    }, [dispatch])
    useEffect(() => { }, [beers])
    console.log(beers)
    return (
        <Loader />
    )
}

export default Beers