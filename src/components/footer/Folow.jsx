import React from 'react'
import Fcbebook from "../../assets/icon_facebook.png"
import Instagram from "../../assets/icon_instagram.png"
import Twitter from "../../assets/icon_twitter.png"
function Folow() {
    const items = [Fcbebook, Twitter, Instagram,]
    return (
        <div className='follows'>
            <span className='link d-block mb-1'>FOLLOW STAR WARS</span>
            <ul className='folows_links '>
                {items.map((item, index) => <li key={index} className="mx-2">
                    <a href="https://google.com">
                        <img src={item} alt="" />
                    </a>
                </li>)}
            </ul>
        </div>
    )
}

export default Folow