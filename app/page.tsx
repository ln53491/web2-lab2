'use client'
import Typewriter from 'typewriter-effect';

import React from "react";
// const GenericScrollBox = require('react-scroll-box').GenericScrollBox; // ES5
// @ts-ignore
import {GenericScrollBox, ScrollAxes, FastTrack} from 'react-scroll-box'; // ES6

export default function Home() {
  return (
    <main className="root-div flex flex-col items-center justify-between">
      <div className="main-div"/>
    <div className="hidden-div">
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
                            .typeString('Type /help to view all options...')
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

            <div className="row-div">
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
                                .pauseFor(500)
                                .typeString('user0036545914')
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
                                .pauseFor(514)
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
                                .pauseFor(526)
                                .typeString('$ ~')
                                .pauseFor(1000)
                                .stop()
                                .start()
                        }}
                    />
                </div>
                <input className="prompt" type="text" id="lname" name="lastname" autoFocus="true"/>
            </div>
        </div>
    </div>
    </main>
  )
}
