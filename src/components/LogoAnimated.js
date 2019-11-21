import React, {useRef, useEffect} from 'react';
import {TweenMax, Linear} from 'gsap';
import styled from 'styled-components';
import CSSPlugin from 'gsap/CSSPlugin';

const C = CSSPlugin;  // here is the gotcha....

const LogoAnimated = props => {
    let logo = useRef(null);

    useEffect(() => {
        TweenMax.from(logo, 1, {rotation: -360});
    }, [])

    function twist(){
        TweenMax.to(logo, 1, {rotation: 360});
    }

    function unTwist(){
        TweenMax.to(logo, 1, {rotation: 0});
    }

    const LogoImg = styled.img`
        margin-bottom: 20px;

        ${props.nav && 'margin: 0 1rem 0 0'}
        ${props.nav && 'height: 30px'}
        ${props.nav && 'width: 30px'}
    `

    return(
        <LogoImg 
            src={props.color === 'contrast' ? require("../images/logoWhite.png") : require("../images/logoTeal.png")} 
            alt='medical marijuana logo' 
            height="90" 
            width="90" 
            ref={element => {logo = element}}
            onMouseEnter={twist}
            onMouseLeave={unTwist}
        />
    )
}

export default LogoAnimated;