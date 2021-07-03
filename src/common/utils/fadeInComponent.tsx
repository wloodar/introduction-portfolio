import React, { useState, useEffect, useRef } from 'react';
import cs from 'classnames';

const FadeInComponent = ({ children }) => {

    let animationSize: number;
    let wHeight: number;

    const [opacityVal, setOpacityVal] = useState<number>(1);
    const [transformVal, setTransformVal] = useState<number>(0);
    const [longTransiton, setLongTransition] = useState<boolean>(false);

    const fadeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        animationSize = window.outerHeight / 1.2;
        wHeight = window.outerHeight / 10;

        window.addEventListener("scroll", () => fadeIn());
        
        return () => { 
            window.removeEventListener("scroll", () => fadeIn());
        };
    }, []);

    const fadeIn = () => {        
        
        let yPos:number = window.scrollY + window.innerHeight;        
        let elTop: number = fadeRef.current?.offsetTop === undefined ? 0 : fadeRef.current?.offsetTop;

        if (yPos > (document.documentElement.offsetHeight - yPos / 10)) {

            setOpacityVal(1);
            setTransformVal(0);
            setLongTransition(true);

            return;
        } else {
            setLongTransition(false);
        }

        if (yPos >= elTop && (yPos - animationSize) <= elTop) {
            let opacityValue = Math.round((yPos - elTop) / (animationSize / 100)) / 100;
            let transformValue = Math.round(wHeight / 100 * Math.round((yPos - elTop) / (animationSize / 100)) - wHeight) * (-1);
            setOpacityVal(opacityValue);
            setTransformVal(transformValue);
        }

        if (yPos <= elTop) {
            setOpacityVal(0);
            setTransformVal(wHeight);
        }

        if (yPos >= (elTop + animationSize)) {
            setOpacityVal(1);
            setTransformVal(0);
        }

        // console.log(yPos + " | " + opacityVal + " | " + transformVal);
    }

    return (
        <div className={cs('fadeComponent', longTransiton ? 'fadeComponent__long' : undefined)} ref={fadeRef} style={{ opacity: opacityVal, transform: `translateY(${transformVal}px)` }}>
            {children}
        </div>
    )   
}

export default FadeInComponent;