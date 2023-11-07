import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

interface LayoutProps {
    children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className="layout_header">
                <Header />
            </div>
            <div className="layout_body">{children}</div>
            <div className="layout_footer">
                <Footer />
            </div>
        </>
    )
}