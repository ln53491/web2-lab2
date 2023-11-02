'use client'
import Typewriter from 'typewriter-effect';
import React from "react";

export default function Header() {
    return (
        <div>
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 30,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString('Welcome to the security attack simulator!')
                        .pauseFor(1000)
                        .changeDelay(20)
                        .deleteAll()
                        .changeDelay(30)
                        .typeString('Created by Luka Nestic')
                        .pauseFor(5000)
                        .start()
                }}
            />
            <div className="type-user">
                <br/>
                <div className="help-info">
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: false,
                            delay: 1,
                            cursor: ""
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Type 'help' to view all available commands")
                                .start()
                        }}
                    />
                </div>
                <div>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: false,
                            delay: 1,
                            cursor: ""
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('----------')
                                .start()
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
