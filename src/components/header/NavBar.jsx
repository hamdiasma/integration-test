import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({ links, isOpen, setIsOpen }) {

    return (
        <div className={`nav_bar ${isOpen && "open"}`}>
            <div className="container">
                <ul className='nav_links'>
                    {links.map(link => <li key={link.id} className="link" onClick={() => setIsOpen(false)}>
                        <Link to={`/${link.slug}`}>{link.title}</Link>
                    </li>)}
                </ul>
            </div>


        </div>
    )
}

export default NavBar