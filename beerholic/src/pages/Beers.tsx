import React, { useEffect, useState } from 'react'
import { BeerCard } from '../components/BeerCard'
import { BeerModal } from '../components/BeerModal'
import { Loader } from '../components/Loader'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { initialData } from '../store/reducers/getInitialData'
import { Beer } from '../types/beerType'

interface BeersProps {

}

const Beers: React.FC<BeersProps> = ({ }) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [beer, setBeer] = useState<Beer | undefined>(undefined)
    const dispatch = useAppDispatch()
    const { beers } = useAppSelector(({ beers }) => beers)

    useEffect(() => {
        dispatch(initialData())
    }, [dispatch])
    useEffect(() => { }, [beers, beer, modalOpen])
    return (
        <div className="beers">
            <div className="beers_title">
                <h1 className='beers_title'>beers</h1>

                {beers ? (
                    <div className="beers_grid">
                        {(beers!.map(beer =>
                            <React.Fragment key={beer.id}>
                                <BeerCard beer={beer} setBeer={setBeer} setModalOpen={setModalOpen} />
                            </React.Fragment>))}
                    </div>
                ) : <Loader />}
            </div>
            <a href=""> load more</a>
            <BeerModal beer={beer} setBeer={setBeer} modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
    )
}

export default Beers