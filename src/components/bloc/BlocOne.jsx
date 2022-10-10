// @ts-nocheck
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import ADS from "../../assets/ad.jpg"

function BlocOne() {
    const [chatWidth, setChatWidth] = useState(undefined);
    const [sidebarTop, setSidebarTop] = useState(undefined);
    const devRef = useRef(null)

    useLayoutEffect(() => {
        if (!devRef) return
        const chatEl = devRef.current.getBoundingClientRect();
        setChatWidth(chatEl.width);
        setSidebarTop(chatEl.top);
    }, []);

    const isSticky = useCallback(
        () => {
            if (!devRef) return
            const scrollTop = window.scrollY;
            const scrollClient = devRef?.current?.clientHeight;
            if (scrollTop >= sidebarTop + 10 && scrollTop < sidebarTop + scrollClient) {
                devRef.current.classList.add('is-sticky');
            } else {
                devRef.current.classList.remove('is-sticky');
            }
        },
        [sidebarTop],
    )

    useEffect(() => {
        if (!sidebarTop) return;
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };

    }, [sidebarTop, isSticky]);





    return (
        <section className='mb-5' >
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='md_title'>Star Wars, The Force Awakens</h1>
                        <p>Plus de 30 ans après la bataille
                            d'Endor, la galaxie n'en a pas fini
                            avec la tyrannie et l’oppression. Les
                            membres de l'Alliance rebelle,
                            devenus la « Résistance »,
                            combattent les vestiges de l'Empire
                            réunis sous la bannière du « Premier
                            Ordre ».</p>
                        <p>
                            Plus de 30 ans après la bataille
                            d'Endor, la galaxie n'en a pas fini
                            avec la tyrannie et l’oppression. Les
                            membres de l'Alliance rebelle,
                            devenus la « Résistance »,
                            combattent les vestiges de l'Empire
                            réunis sous la bannière du « Premier
                            Ordre ».
                        </p>

                        <p>Un mystérieux guerrier, Kylo Ren,
                            semble vouer un culte à Dark Vador
                            et pourchasse les ennemis du
                            Premier Ordre à travers la galaxie.
                            Au même moment, une jeune
                            femme nommée Rey, pilleuse
                            d'épaves sur la planète désertique
                            Jakku, va faire la rencontre de Finn,
                            un Stormtrooper en fuite, une
                            rencontre qui bouleversera sa vie.</p>

                        <p>Plus de 30 ans après la bataille
                            d'Endor, la galaxie n'en a pas fini
                            avec la tyrannie et l’oppression. Les
                            membres de l'Alliance rebelle,
                            devenus la « Résistance »,
                            combattent les vestiges de l'Empire
                            réunis sous la bannière du « Premier
                            Ordre ».</p>

                        <p>Un mystérieux guerrier, Kylo Ren,
                            semble vouer un culte à Dark Vador
                            et pourchasse les ennemis du
                            Premier Ordre à travers la galaxie.
                            Au même moment, une jeune
                            femme nommée Rey, pilleuse
                            d'épaves sur la planète désertique
                            Jakku, va faire la rencontre de Finn,
                            un Stormtrooper en fuite, une
                            rencontre qui bouleversera sa vie.</p>


                        <p>Plus de 30 ans après la bataille
                            d'Endor, la galaxie n'en a pas fini
                            avec la tyrannie et l’oppression. Les
                            membres de l'Alliance rebelle,
                            devenus la « Résistance »,
                            combattent les vestiges de l'Empire
                            réunis sous la bannière du « Premier
                            Ordre ».</p>

                        <p>Un mystérieux guerrier, Kylo Ren,
                            semble vouer un culte à Dark Vador
                            et pourchasse les ennemis du
                            Premier Ordre à travers la galaxie.
                            Au même moment, une jeune
                            femme nommée Rey, pilleuse
                            d'épaves sur la planète désertique
                            Jakku, va faire la rencontre de Finn,
                            un Stormtrooper en fuite, une
                            rencontre qui bouleversera sa vie.</p>

                    </div>
                    <div className="col-md-6 text-center hidden relative">
                        <div ref={devRef} style={{ width: chatWidth }}>
                            <img src={ADS} alt="" style={{
                                width: "200px"
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default BlocOne