import React, { useEffect, useState } from 'react'
import { BeerCard } from '../components/BeerCard'
import { BeerModal } from '../components/BeerModal'
import { Loader } from '../components/Loader'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { initialData } from '../store/reducers/getInitialData'
import { setBeers, setHaveMore, setPage } from '../store/slices/beerSlices'
import { Beer } from '../types/beerType'
import { apiSetting } from '../utils/api'

interface BeersProps {

}

const Beers: React.FC<BeersProps> = ({ }) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [beer, setBeer] = useState<Beer | undefined>(undefined)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const dispatch = useAppDispatch()
    let { beers, page, haveMore } = useAppSelector(({ beers }) => beers)

    const loadMore = async () => {
        const data: Beer[] | undefined = await apiSetting.getBeers(page + 1)
        if (data?.length !== 0) {
            dispatch(setBeers(data))
        } else {
            dispatch(setHaveMore())
        }
    }
    useEffect(() => {
        dispatch(initialData(page))
    }, [dispatch])
    useEffect(() => {
        setIsLoading(false)
    }, [beers, beer, modalOpen])
    return (<>
        {(isLoading) ? <Loader /> :
        <div className="beers">
            <div className="beers_title">
                <h1 className='beers_title'>beers</h1>

                {beers ? (
                    <div className="beers_grid">
                        {(beers!.map((beer: Beer) =>
                            <React.Fragment key={beer.id}>
                                <BeerCard beer={beer} setBeer={setBeer} setModalOpen={setModalOpen} />
                            </React.Fragment>))}
                    </div>
                    ) : <Loader />}
                    {isLoading ? <Loader /> : ""}
            </div>
                {(haveMore) ? <a onClick={() => loadMore()}> load more</a> : ""}
            <BeerModal beer={beer} setBeer={setBeer} modalOpen={modalOpen} setModalOpen={setModalOpen} />
            </div >

        }
    </>
    )
}

export default Beers

