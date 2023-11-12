import React, { useEffect, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
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
                    <Link to="/">BeerHolic</Link>
                </div>
                <nav className={`${"header_content_nav"} ${menuOpen ? "isMenu" : ""}`}>
                    <ul>
                        <li>
                            <Link to="/">Beers</Link>
                        </li>
                        <li>
                            <Link to="/favorites">Favorites</Link>
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