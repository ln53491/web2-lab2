'use client'
import React, {useEffect, useRef, useState} from "react";
import Typewriter from "typewriter-effect";
import {responses} from "@/app/responses";
import {useCookies} from "react-cookie"
import TextPrompt from "@/app/text-prompt";

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
        const currValue = value.toLowerCase().trim();
        switch(currValue) {
            case "kill":
                props.killPrompt();
                break;
            default:
                const usernameValue = currValue.replaceAll(" ", "");
                if (usernameValue != "") {
                    setUsername(usernameValue);
                    setCookie("user", usernameValue, {
                        path: "*",
                        maxAge: 3600
                    })
                }
                break;
        }
    }

    const initInputSession = (): void => {
        setCurrData([1]);
    }

    const onKeyPressSession = (value: string): void => {
        const currValue = value.toLowerCase().trim();
        switch(currValue) {
            case "kill":
                props.killPrompt();
                break;
            case "status":
                setCurrData(prompts => [...prompts, -888888, prompts[prompts.length - 1]+1]);
                break;
            case "enable sqli":
            case "enable csrf":
            case "disable sqli":
            case "disable csrf":
            case "clear":
                setCurrData(prompts => [...prompts, -444444, prompts[prompts.length - 1]+1]);
                break;
            case "check session":
                setCurrData(prompts => [...prompts, -prompts[prompts.length - 1], prompts[prompts.length - 1]+1]);
                break;
            default:
                break;
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
                    (
                        value != -444444 && value != -888888 ?
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
                                            .typeString(cookie.user ? "LOGGED_IN = true" : "LOGGED_IN = false")
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
                            </div> :
                            (value == -444444 ?
                                <div key={value} className="shifted-div">
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
                                                .pauseFor(250)
                                                .typeString("This command is only available when simulation is not running. Use 'kill' to return to the main screen.")
                                                .stop()
                                                .start()
                                        }}
                                    />
                                </div> :
                                    //@ts-ignore
                                <TextPrompt key={value} text={[`SQLi = ${localStorage.getItem("sqli").toUpperCase()}`, `CSRF = ${localStorage.getItem("csrf").toUpperCase()}`]}/>
                            )

                    )
            ))}
        </div>
    )
}
