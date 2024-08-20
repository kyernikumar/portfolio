import React from "react";
import { useSpring, animated } from "react-spring";

const UseSpring = () => {
    const spring = useSpring({
        from: {opacity : 0},
        to : {opacity : 1},
        config: {duration : 1000}
    });

    return (
        <div className="play">
            <h2>hello kumar</h2>
            <br />
            <animated.div style={{
                ...spring,
                width: '100px',
                height: '100px',
                background: 'red'
            }} />

        </div>
    )
}
