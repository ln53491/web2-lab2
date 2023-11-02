'use client'
import React from "react";
import Typewriter from "typewriter-effect";
import Prompt from "@/app/prompt";

export default function CustomPrompt(props: {
    text: string[]
}) {
    return (
        <div className="type-user">
            <div className="shifted-div">
                {props.text.map(line => (
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: false,
                            delay: 1,
                            cursor: ""
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(250)
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
