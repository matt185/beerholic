import React from 'react'
import { AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { addFavorites,removeFavorites } from '../store/slices/favoriteSlice'
import { Beer } from '../types/beerType'

interface BeerCardProps {
    beer: Beer
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    setBeer: React.Dispatch<React.SetStateAction<Beer | undefined>>
}

export const BeerCard: React.FC<BeerCardProps> = ({ beer, setModalOpen, setBeer }) => {
    const setModal = () => {
        setModalOpen(true)
        setBeer(beer)
    }
    const dispatch = useAppDispatch()
    const { favoritesBeer } = useAppSelector(({ favorite }) => favorite)
    const addNewFavorite = () => {
        dispatch(addFavorites(beer))
    }
    const removeFromFavorite = () => {
        dispatch(removeFavorites(beer.id))
    }
   console.log(favoritesBeer.favoriteId) 
    return (
        <div className="itemCard" >
            <div className="itemCard_header">
                <div className="itemCard_header_block"></div>
                <h2 className='itemCard_header_name'>{beer.name}</h2>
                <div className="itemCard_header_block">
                    {(favoritesBeer && favoritesBeer!.favoriteId!.includes(beer!.id)) ?
                        <AiFillStar className="itemCard_header_block_icon" onClick={removeFromFavorite} /> :
                        <AiOutlineStar className="itemCard_header_block_icon" onClick={addNewFavorite} />}
                </div>
            </div>
            <img className='itemCard_img' src={beer.image_url} />
            <div className="itemCard_description"><p>{beer.description}</p></div>
            <div className="itemCard_footer">
                <div className="itemCard_footer_block"></div>
                <h2 className='itemCard_footer_name'></h2>
                <div className="itemCard_footer_block"><a onClick={() => setModal()}>more</a></div>
            </div>
        </div>
    )
}