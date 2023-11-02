'use client'
import Typewriter from 'typewriter-effect';
import React from "react";

export default function PromptEffect(props: {
    initialDelay: number
}) {
    return (
        <div className="type-user row-div-effect">
            <div className="user-info">
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: false,
                        delay: 1,
                        cursor: ""
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(props.initialDelay)
                            .typeString('user0036534914')
                            .pauseFor(1000)
                            .stop()
                            .start()
                    }}
                />
            </div>
            <div className="domain-info">
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: false,
                        delay: 1,
                        cursor: ""
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(props.initialDelay + 25)
                            .typeString('@web2-lab2: ')
                            .pauseFor(1000)
                            .stop()
                            .start()
                    }}
                />
            </div>
            <div className="cursor">
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: false,
                        delay: 1,
                        cursor: ""
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(props.initialDelay + 35)
                            .typeString('$ ~')
                            .pauseFor(1000)
                            .stop()
                            .start()
                    }}
                />
            </div>
        </div>
    )
}
