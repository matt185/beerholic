import React from 'react'
import { Beer } from '../types/beerType'
import { MdOutlineClose } from 'react-icons/md'

interface BeerModalProps {
    beer: Beer | undefined
    modalOpen: boolean
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    setBeer: React.Dispatch<React.SetStateAction<Beer | undefined>>
}

export const BeerModal: React.FC<BeerModalProps> = ({ beer, setBeer, modalOpen, setModalOpen }) => {
    const resetModal = () => {
        setBeer(undefined)
        setModalOpen(false)
    }
    return (<>
        {modalOpen && (

            <div className="itemModal">
                <div className="itemModal_content">
                    <div className="itemModal_content_header">
                        <div className="itemModal_content_header_block"></div>
                        <div className="itemModal_content_header_title">
                            <h1>{beer!.name}</h1>
                        </div>
                        <div className="itemModal_content_header_block">
                            <MdOutlineClose onClick={() => resetModal()} />
                        </div>
                    </div>
                    <img className="itemModal_content_img" src={beer!.image_url} alt="" />
                    <div className="itemModal_content_description">
                        {beer!.description}
                    </div>
                    <hr />
                    <div className="itemModal_content_food">
                        <h3>Food Pairing</h3>
                        <ul>
                            {beer!.food_pairing.map((food, i) => <React.Fragment key={i}> <li>{food}</li></React.Fragment>)}
                        </ul>
                    </div>
                </div>
            </div>

        )}
    </>
    )
}