import React,{useState} from 'react'
import { BeerCard } from '../components/BeerCard'
import { BeerModal } from '../components/BeerModal'
import { useAppSelector } from '../store/hooks'
import { Beer } from '../types/beerType'


const Favorites: React.FC= () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [beer, setBeer] = useState<Beer | undefined>(undefined)
    const { favoritesBeer } = useAppSelector(({ favorite })=>favorite)

    return (
        <div className="favorite">
            <h1 className="favorite_title">Favorite</h1>
            {(favoritesBeer.favorites?.length!==0 )?
                <div className="favorite_grid">
                    {(favoritesBeer.favorites!.map((beer: Beer) =>
                        <React.Fragment key={beer.id}>
                            <BeerCard beer={beer} setBeer={setBeer} setModalOpen={setModalOpen} />
                        </React.Fragment>))}
                </div> : <h1 className="favorite_notFound">No Favorite Beer founded</h1>
            }
            <BeerModal beer={beer} setBeer={setBeer} modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
    )
}

export default Favorites