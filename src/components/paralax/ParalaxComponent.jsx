
import React from "react"
import { Parallax } from 'react-parallax';

const ParallaxContainer = ({ children, bgImage, ...resProps }) => (
    <Parallax bgImage={bgImage} {...resProps}>
        {children}
    </Parallax>
);

export default ParallaxContainer