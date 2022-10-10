import React from 'react'
import LogoFooter from "../../assets/darthvader_2x.jpg"
import Folow from './Folow'
import FooterLinks from './FooterLinks'
function Footer() {

    const linksOne = [
        { id: 1, slug: "/", title: "Terms of Use" },
        { id: 2, slug: "/", title: "Legal Notices" },
        { id: 3, slug: "/", title: "Privacy Policy" },
    ]

    const linkTwo = [
        { id: 1, slug: "/", title: "Your California Privacy Rights" },
        { id: 2, slug: "/", title: "Star Wars at Disney Store" },
        { id: 3, slug: "/", title: "Privacy Policy" },
    ]
    return (
        <section className='footer'>
            <img src={LogoFooter} alt="" className='footer_bg' />
            <div className="footer_content">
                <div className="container">
                    <h1 className='sm_title footer_title text-center'>TM Lucasfilm Ltd. All Rights Reserved.</h1>
                    <div className="row footer_links">
                        <div className="col-md-4 col-6 mb-5 leftL">
                            <FooterLinks links={linksOne} />
                        </div>
                        <div className="col-md-4 col-6 mb-5 centerL">
                            <FooterLinks links={linkTwo} />
                        </div>
                        <div className="col-md-4 col-12 rightF">
                            <Folow />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer