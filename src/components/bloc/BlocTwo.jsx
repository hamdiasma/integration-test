import React from 'react'
import ImageArticle from "../../assets/r2d2_c3p0-2x.jpg"
function BlocTwo() {
    return (
        <section className='mb-5'>
            <div className="container">
                <h1 className='bg_title text-center mb-5'>A long time ago,
                    in a galaxy far, far
                    away…</h1>

                <div className='bloc_grid'>

                    <img src={ImageArticle} alt="" className='mb-3' />
                    <p className='mb-3'>
                        <span className='tib'>La Guerre des étoiles</span> (titre original <span className='tib'>Star Wars</span>, soit littéralement
                        Guerres Stellaires ) est une épopée cinématographique de sciencefiction
                        créée par George Lucas, considérée comme un élément phare
                        du space opera. Prévue à la base pour être une suite de trois trilogies
                        (triptyque), Lucas fut contraint, par manque de moyens techniques, de
                        commencer par la seconde trilogie (l'Épisode IV - Un nouvel espoir) en
                        1977. La série connut un succès phénoménal partout dans le monde
                        et engendra une très importante communauté de fans. Sans
                        prétendre expliquer le succès du premier film (s'il y avait une recette,
                        cela se saurait), on peut, toutefois, noter que, malgré le manque de
                        moyens (le budget était relativement modeste, les acteurs presque
                        inconnus):
                    </p>
                </div>
                <p>
                    Il fait appel à des références connues et appréciées des jeunes de l'époque : films de cape et d'épée, westerns,
                    péplums, contes de fées et même le Seigneur des Anneaux de J.R.R. Tolkien ; cette oeuvre n'apparaît pas comme de la
                    science-fiction au sens strict mais plutôt comme du space fantasy.
                </p>
                <p>
                    - Les effets spéciaux, supervisés par Ken Ralston, étaient réellement novateurs, avec notamment la participation deJohn
                    Dykstra (qui a également participé au premier film de Star Trek), qui avait développé une nouvelle manière d'animer les
                    maquettes des vaisseaux en coordonnant leurs mouvements par ordinateur (Dykstraflex).
                </p>
                <p>
                    - Le film a développé un univers cohérent, avec, comme préoccupation constante, autant la création d'une ambiance
                    que l'action proprement dite.
                </p>
                <p>
                    - La musique, composée par John Williams, introduit des thèmes récurrents et des leitmotivs (procédé classique mais
                    renforçant la cohérence).
                </p>
            </div>
        </section>
    )
}

export default BlocTwo