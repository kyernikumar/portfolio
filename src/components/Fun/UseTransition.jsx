// import { clear } from "@testing-library/user-event/dist/clear";
import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";

const COLORS = ['ORANGE','PINK','YELLOW']

function UseTransition(){
    const [activeIndex,setActiveIndex] = useState(0);
    const [color,setColor] = useState(COLORS[0]);

    useEffect(()=>{
        const interval = setInterval(() => {
            setActiveIndex((x) => (x + 1) % COLORS.length)
        }, 2000);

        return () => clearInterval(interval)
    },[])

    useEffect(()=>{
        setColor(COLORS[activeIndex])
        setTimeout(() => {
            setColor([])
        }, 1000);
    },[activeIndex])

    const transitions = useTransition(color,{
        from: {opacity: 0, transform: 'scale(0.1)'},
        enter: {opacity: 1, transform: 'scale(1)'},
        leave: {opacity: 0, transform: 'scale(0.1)'},
        config: {duration: 500}
    })

    return (
        <div 
            style={{width: '200px',height:'300px'}}
        >

        <h2>hello</h2>
            {
        transitions((style,item) => (
            <animated.div style={{
                ...style,
                fontSize: 30,
                color: item
            }}>
                
            </animated.div>
        ))
        
        }
    </div>
    )
}

export default UseTransition;