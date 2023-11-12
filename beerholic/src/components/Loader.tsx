import React from 'react'

interface LoaderProps {

}

export const Loader: React.FC<LoaderProps> = ({ }) => {
    return (
        <div className="spinner"></div>
    )
}