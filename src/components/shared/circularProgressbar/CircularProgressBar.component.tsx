import React, { useState } from "react";

interface ProgressProps {
    sqSize: number;
    strokeWidth: number;
    value: number;
}

const CircularProgressBar:React.FC<ProgressProps> = (props) => {

     // Size of the enclosing square
     const sqSize = props.sqSize;
     // SVG centers the stroke width on the radius, subtract out so circle fits in square
     const radius = (props.sqSize - props.strokeWidth) / 2;
     // Enclose cicle in a circumscribing square
     const viewBox = `0 0 ${sqSize} ${sqSize}`;
     // Arc length at 100% coverage is the circle circumference
     const dashArray = radius * Math.PI * 2;
     // Scale 100% coverage overlay with the actual percent
     const dashOffset = dashArray - dashArray * props.value / 10;

    return(
        <div className="svg-wrapper-border-r">
            <svg
                width={props.sqSize}
                height={props.sqSize}
                viewBox={viewBox}>
                <circle cx={props.sqSize / 2} cy={props.sqSize / 2} r={radius} className="dashed" />
                <circle
                className="circle-background"
                cx={props.sqSize / 2}
                cy={props.sqSize / 2}
                r={radius / 1.2}
                strokeWidth={`${props.strokeWidth}px`} />
                <circle
                className="circle-progress"
                cx={props.sqSize / 2}
                cy={props.sqSize / 2}
                r={radius / 1.2}
                strokeWidth={`${props.strokeWidth}px`}
                // Start progress marker at 12 O'Clock
                transform={`rotate(-90 ${props.sqSize / 2} ${props.sqSize / 2})`}
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset,
                    transition: 'all 0.3s ease-in-out',
                }} />
                
                <circle
                    className="circle-inner"
                    cx={props.sqSize / 2}
                    cy={props.sqSize / 2}
                    r={radius / 1.7}
                    strokeWidth={`${props.strokeWidth}px`} />
                <text
                className="circle-text"
                x="50%"
                y="50%"
                dy=".3em"
                textAnchor="middle">
                {`${props.value}`}
                </text>
            </svg>              
        </div>
        
    )
}


export default CircularProgressBar;

CircularProgressBar.defaultProps = {
    sqSize: 100,
    value: 0,
    strokeWidth: 5
};