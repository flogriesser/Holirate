import React from 'react';

import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

export default function ScoreBoard(props) {
    return (
        <div style={{ padding: '5% 20%' }}>
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={props.EndScore}
                duration={2}
                easingFunction={easeQuadInOut}
            >
                {(value) => {
                    const roundedValue = Math.round(value);
                    if (value < 33) {
                        return (
                            <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}
                                circleRatio={0.75}
                                styles={buildStyles({
                                    pathTransition: "none",
                                    rotation: 1 / 2 + 1 / 8,
                                    strokeLinecap: "butt",
                                    trailColor: "#eee",
                                    textColor: "#f44336",
                                    pathColor: "#f44336"
                                })}
                            />
                        );
                    } else if (value >= 33 && value < 66) {
                        return (
                            <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}
                                circleRatio={0.75}
                                styles={buildStyles({
                                    pathTransition: "none",
                                    rotation: 1 / 2 + 1 / 8,
                                    strokeLinecap: "butt",
                                    trailColor: "#eee",
                                    textColor: "#ff9800",
                                    pathColor: "#ff9800"
                                })}
                            />
                        );
                    } else {
                        return (
                            <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}
                                circleRatio={0.75}
                                styles={buildStyles({
                                    pathTransition: "none",
                                    rotation: 1 / 2 + 1 / 8,
                                    strokeLinecap: "butt",
                                    trailColor: "#eee",
                                    textColor: "primary",
                                    pathColor: "primary"
                                })}
                            />
                        );
                    }
                }}
            </AnimatedProgressProvider>
        </div>
    );
}