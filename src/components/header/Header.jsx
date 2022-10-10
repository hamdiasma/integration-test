// @ts-nocheck
import React, { useState } from 'react'
import ParallaxContainer from '../paralax/ParalaxComponent'
import Header1Png from "../../assets/logo.png"
import Header2Png from "../../assets/header-bg-2x.png"
import MenuIcon from "../../assets/menu.png"
import CloseIcon from "../../assets/close.png"

import NavBar from './NavBar'

function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const links = [
        { id: 1, slug: "/", title: "LE COTÉ LUMINEUX" },
        { id: 2, slug: "/", title: "LE COTÉ OBSCUR" },
        { id: 3, slug: "/", title: "L’EMPIRE" },
        { id: 4, slug: "/", title: "LES DROÏDES" },
        { id: 5, slug: "/", title: "LES EWOKS" },
        { id: 6, slug: "/", title: "JABBA LE HUTT" },
    ]

    return (
        <div className='header'>
            <NavBar links={links} isOpen={isOpen} setIsOpen={setIsOpen} />
            <img src={!isOpen ? MenuIcon : CloseIcon} alt="" className={isOpen ? "closeBtn" : "menuBtn"} onClick={() => setIsOpen(!isOpen)} />
            <ParallaxContainer bgImage={Header2Png} className="header_image" strength={280} blur={{ min: 3, max: -1 }}>
                <div className="content">
                    <img src={Header1Png} className="header_logo" alt="" />
                </div>
            </ParallaxContainer>
        </div>
    )
}

export default Navigation