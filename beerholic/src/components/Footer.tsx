import React from 'react'
import { AiOutlineCopyright } from 'react-icons/ai'

export const Footer: React.FC = ({ }) => {
    return (
        <div className="footer">
            <p><AiOutlineCopyright className="footer_copyright" /> Marcenta Mattia {new Date().getFullYear()}</p>
        </div>
    )
}