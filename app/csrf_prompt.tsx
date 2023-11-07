'use client'
import React, {useEffect, useRef, useState} from "react";
import Typewriter from "typewriter-effect";
import {responses} from "@/app/responses";
import {useCookies} from "react-cookie"

export default function CsrfPrompt(props: {
    killPrompt: CallableFunction,
}) {
    const [isInput, setIsInput] = useState<boolean>(false);
    const [delay, setDelay] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [currData, setCurrData] = useState<number[]>([]);
    const inputRef = useRef(null);
    const [cookie, setCookie, removeCookie] = useCookies(["user"])

    useEffect(() => {
        removeCookie("user", {path:'/'});
    }, []);

    const onKeyPressUsername = (value: string): void => {
        const currValue = value.toLowerCase().replaceAll(" ", "");
        if (currValue == "kill") {
            props.killPrompt();
        } else {
            if (currValue != "") {
                setUsername(currValue);
                setCookie("user", currValue, {
                    path: "*",
                    maxAge: 3600
                })
            }
        }
    }

    const initInputSession = (): void => {
        setCurrData([1]);
    }

    const onKeyPressSession = (value: string): void => {
        const currValue = value.toLowerCase().trim();
        if (currValue == "kill") {
            props.killPrompt();
            return
        }
        if (currValue == "check session") {
            setCurrData(prompts => [...prompts, -prompts[prompts.length - 1], prompts[prompts.length - 1]+1])
        }
    }

    return (
        <div className="type-user">
            <div className="shifted-div">
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: false,
                        delay: 1,
                        cursor: "",
                        wrapperClassName: "color-white"
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(500)
                            .typeString(responses.csrf_info[0])
                            .stop()
                            .start()
                    }}
                />
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: false,
                        delay: 1,
                        cursor: "",
                        wrapperClassName: "color-white"
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(2750 + 700)
                            .typeString(responses.csrf_info[1])
                            .stop()
                            .start()
                    }}
                />
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: false,
                        delay: 1,
                        cursor: "",
                        wrapperClassName: "color-white"
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(2750 + 700 + 2250)
                            .typeString(responses.csrf_info[2])
                            .stop()
                            .start()
                    }}
                />

                <Typewriter
                    options={{
                        autoStart: true,
                        loop: false,
                        delay: 1,
                        cursor: "",
                        wrapperClassName: "color-white"
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(2750 + 700 + 2250 + 1000)
                            .typeString(responses.csrf_info[3])
                            .stop()
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
                                        .pauseFor(delay ? 1000 : 2750 + 500 + 3000 + 1000)
                                        .typeString("Enter username:")
                                        .stop()
                                        .callFunction(() => {
                                            setIsInput(true)
                                            // @ts-ignore
                                            inputRef.current.focus()
                                        })
                                        .start()
                                }}
                            />
                        </div>
                        <div className="divider"></div>
                        <input className="prompt" ref={inputRef} type="text"
                               autoFocus={isInput}
                               disabled={username != ""}
                               onKeyDown={event => {
                                   if (event.key === 'Enter') {
                                       onKeyPressUsername(event.currentTarget.value)
                                   }
                               }}
                        />
                    </div>
            {username != "" ?
                <div className="shifted-div">
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
                                    .pauseFor(500)
                                    .typeString(responses.csrf_info[4])
                                    .stop()
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
                                cursor: "",
                                wrapperClassName: "color-white"
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(500)
                                    .typeString(responses.csrf_info[5])
                                    .stop()
                                    .start()
                            }}
                        />
                    </div>
                    <div className="row-div">
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: false,
                                delay: 1,
                                cursor: "",
                                wrapperClassName: "color-white"
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(500 + 1000)
                                    .typeString(responses.csrf_info[6])
                                    .stop()
                                    .start()
                            }}
                        />
                        <div className="divider"></div>
                        <a className="url-text" href={"https://web2-cute-cats.vercel.app"} target="_blank" rel="noopener noreferrer">
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: false,
                                    delay: 1,
                                    cursor: ""
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .pauseFor(500 + 1000 + 750)
                                        .typeString(responses.csrf_info[7])
                                        .stop()
                                        .start()
                                }}
                            />
                        </a>
                    </div>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: false,
                            delay: 1,
                            cursor: "",
                            wrapperClassName: "color-white"
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(500 + 1000 + 750 + 250 + 500)
                                .typeString(responses.csrf_info[9])
                                .stop()
                                .start()
                        }}
                    />
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
                                    .pauseFor(500 + 1000 + 750 + 250 + 1200 + 500)
                                    .callFunction(() => {
                                        initInputSession()
                                    })
                                    .typeString(responses.csrf_info[10])
                                    .stop()
                                    .start()
                            }}
                        />
                    </div>
                </div> : <></>
            }

            {currData.map((value, index) => (
                value >= 0 ?
                    <div key={value} className="row-div">
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
                                        .typeString("Enter:")
                                        .stop()
                                        .start()
                                }}
                            />
                        </div>
                        <div className="divider"></div>
                        <input className="prompt" ref={inputRef} type="text"
                               key={value}
                               autoFocus={isInput}
                               disabled={value != currData[currData.length - 1]}
                               onKeyDown={event => {
                                   if (event.key === 'Enter') {
                                       onKeyPressSession(event.currentTarget.value)
                                   }
                               }}
                        />
                    </div> :
                    <div key={value} className="cursor shifted-div">
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
                                    .typeString(cookie.user ? "ACTIVE = true" : "ACTIVE = false")
                                    .stop()
                                    .start()
                            }}
                        />
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
                                    .typeString( cookie.user ? "USERNAME = " + cookie.user : "USERNAME = undefined")
                                    .stop()
                                    .start()
                            }}
                        />
                    </div>
            ))}
        </div>
    )
}
