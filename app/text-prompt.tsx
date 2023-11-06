'use client'
import React from "react";
import Typewriter from "typewriter-effect";

export default function TextPrompt(props: {
    text: string[]
}) {
    return (
        <div className="type-user">
            <div className="shifted-div">
                {props.text.map((line,index) => (
                    <Typewriter
                        key={index}
                        options={{
                            autoStart: true,
                            loop: false,
                            delay: 1,
                            cursor: ""
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(100)
                                .typeString(line)
                                .pauseFor(1000)
                                .stop()
                                .start()
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
