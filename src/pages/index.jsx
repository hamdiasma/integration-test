import React from 'react'
import BlocImage from '../components/bloc/BlocImage'
import BlocOne from '../components/bloc/BlocOne'
import BlocTwo from '../components/bloc/BlocTwo'
import ImageOne from "../assets/kiloren.jpg"
import ImageTwo from "../assets/stormtroopers.jpg"

function Home() {
    return (
        <div>
            <BlocOne />
            <BlocImage img={ImageOne} className="w-100 bloc1_img mb-5" />
            <BlocTwo />
            <BlocImage img={ImageTwo} className="w-100 bloc2_img" />
        </div>
    )
}

export default Home