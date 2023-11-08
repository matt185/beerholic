import React, { useEffect } from 'react'
import { BeerCard } from '../components/BeerCard'
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
    return (
        <div className="beers">
            <div className="beers_title">
                <h1 className='beers_title'>beers</h1>

                {beers ? (
                    <div className="beers_grid">
                        {(beers!.map(beer =>
                            <React.Fragment key={beer.id}>
                                <BeerCard beer={beer} />
                            </React.Fragment>))}
                    </div>
                ) : <Loader />}
            </div>
        </div>
    )
}

export default Beers