import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Beer } from '../types/beerType'

interface BeerCardProps {
    beer: Beer
}

export const BeerCard: React.FC<BeerCardProps> = ({ beer }) => {
    return (
        <div className="itemCard" >
            <div className="itemCard_header">
                <div className="itemCard_header_block"></div>
                <h2 className='itemCard_header_name'>{beer.name}</h2>
                <div className="itemCard_header_block"><AiOutlineStar className="itemCard_header_block_icon" /></div>
            </div>
            <img className='itemCard_img' src={beer.image_url} />
            <div className="itemCard_description"><p>{beer.description}</p></div>
            <div className="itemCard_footer">
                <div className="itemCard_footer_block"></div>
                <h2 className='itemCard_footer_name'></h2>
                <div className="itemCard_footer_block"><a>more</a></div>

            </div>
        </div>
    )
}