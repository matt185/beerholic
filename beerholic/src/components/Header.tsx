import React, { useEffect, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { ISize } from '../types/generalTypes'

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({ }) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [size, setSize] = useState<ISize>({
        width: undefined,
        height: undefined
    })
    useEffect(() => {
        const handleResize: any = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
            window.addEventListener('resize', handleResize)

            return window.removeEventListener('resize', handleResize)
        }
    }, [])
    useEffect(() => {
        if (size.width! > 768 && menuOpen) {
            setMenuOpen(false)
        }
    }, [size.width, menuOpen])
    const menuToggleHandler = () => {
        setMenuOpen((p) => !p)
    }
    return (
        <header className="header">
            <div className="header_content">
                <div className="header_content_logo">
                    <a href="/">BeerHolic</a>
                </div>
                <nav className={`${"header_content_nav"} ${menuOpen ? "isMenu" : ""}`}>
                    <ul>
                        <li>
                            <a href="beerholic/">Beers</a>
                        </li>
                        <li>
                            <a href="beerholic/favorite">Favorites</a>
                        </li>
                    </ul>
                </nav>
                <div className="header_content_toggle">
                    <BiMenuAltRight onClick={menuToggleHandler} />
                </div>
            </div>
        </header>
    )
}