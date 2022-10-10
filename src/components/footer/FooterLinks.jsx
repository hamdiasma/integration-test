import React from 'react'
import { Link } from 'react-router-dom'

function FooterLinks({ links }) {
    return (
        <ul>
            {
                links.map((link, i) => <li key={link.id}><Link to={link.slug} className='link underline'>{link.title}</Link></li>)
            }

        </ul>
    )
}

export default FooterLinks