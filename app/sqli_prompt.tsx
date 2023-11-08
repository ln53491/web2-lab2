'use client'
import React, {useEffect, useRef, useState} from "react";
import Typewriter from "typewriter-effect";
import {dbErrMsg, responses} from "@/app/responses";
import TextPrompt from "@/app/text-prompt";

export default function SqliPrompt(props: {
    killPrompt: CallableFunction,
}) {
    const [isInput, setIsInput] = useState<boolean>(false);
    const [delay, setDelay] = useState<boolean>(false);
    const [query, setQuery] = useState<string>("");
    const [currData, setCurrData] = useState<any[]>([0]);
    const inputRef = useRef(null);

    useEffect(() => {
        async function getData() {
            const status = localStorage.getItem("sqli");
            const res = await fetch(`/sqli/${status}?value=${query}`, {
                method: 'GET',
            });
            const data = await res.json();
            const rows: Object[] = data.message

            setQuery("");
            if (rows.length == 0) {
                setCurrData(prompts => [...prompts, dbErrMsg, prompts[prompts.length - 1]+1])
            } else {
                const personRows: string[] = []
                rows.map(row => {
                    personRows.push(JSON.stringify(row));
                })
                setCurrData(prompts => [...prompts, personRows, prompts[prompts.length - 1]+1])
            }
        }
        if (query != "") {
            getData();
        }
    }, [query]);

    const onKeyPress = (value: string): void => {
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
                setQuery(value);
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
                            .typeString(responses.sqli_info[0])
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
                            .pauseFor(2750 + 400)
                            .typeString(responses.sqli_info[1])
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
                            .pauseFor(2750 + 400 + 3000)
                            .typeString(responses.sqli_info[2])
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
                            .pauseFor(2750 + 400 + 3000 + 1000)
                            .typeString(responses.sqli_info[3])
                            .stop()
                            .start()
                    }}
                />


                <div className="row-div">
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
                                    .pauseFor(2750 + 400 + 3000 + 1000 + 1000)
                                    .typeString(responses.sqli_info[4])
                                    .stop()
                                    .start()
                            }}
                        />
                    </div>
                    {/*<div className="divider"></div>*/}
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
                                    .pauseFor(2750 + 400 + 3000 + 1000 + 1000 + 500)
                                    .typeString(responses.sqli_info[5])
                                    .stop()
                                    .start()
                            }}
                        />
                    </div>
                    <div className="divider"></div>
                    <div className="">
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
                                    .pauseFor(2750 + 400 + 3000 + 1000 + 1000 + 500 + 200)
                                    .typeString(responses.sqli_info[6])
                                    .stop()
                                    .start()
                            }}
                        />
                    </div>
                    <div className="divider"></div>
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
                                    .pauseFor(2750 + 400 + 3000 + 1000 + 1000 + 500 + 200 + 50)
                                    .typeString(responses.sqli_info[7])
                                    .stop()
                                    .start()
                            }}
                        />
                    </div>
                    <div className="">
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
                                    .pauseFor(2750 + 400 + 3000 + 1000 + 1000 + 500 + 200 + 50 + 100)
                                    .typeString(responses.sqli_info[8])
                                    .stop()
                                    .start()
                            }}
                        />
                    </div>
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
                            .pauseFor(2750 + 400 + 3000 + 1000 + 1000 + 500 + 500 + 200 + 50 + 100)
                            .typeString(responses.sqli_info[9])
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
                            .pauseFor(2750 + 400 + 3000 + 1000 + 1000 + 500 + 150 + 750 + 200 + 50 + 100)
                            .typeString(responses.sqli_info[2])
                            .stop()
                            .callFunction(() => {
                                setDelay(true)
                            })
                            .start()
                    }}
                />
            </div>

            {currData.map((value, index) => (
                typeof value === "number" ?
                    (value === -888888 ?
                            //@ts-ignore
                            <TextPrompt key={value} text={[`SQLi = ${localStorage.getItem("sqli").toUpperCase()}`, `CSRF = ${localStorage.getItem("csrf").toUpperCase()}`]}/> :
                    (value === -444444 ?
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
                        <div>
                        <div key={index} className="row-div">
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
                                            .pauseFor(delay ? 1000 : 2750 + 400 + 3000 + 1000 + 200 + 50 + 100)
                                            .typeString("Enter value:")
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
                                   key={value}
                                   autoFocus={isInput}
                                   disabled={value != currData[currData.length - 1]}
                                   onKeyDown={event => {
                                       if (event.key === 'Enter') {
                                           onKeyPress(event.currentTarget.value)
                                       }
                                   }}
                            />
                        </div>
                    {query != "" && index == currData.length-1 ?
                        <div className="shifted-div">
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 1,
                                    cursor: "",
                                    wrapperClassName: "color-white"
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("/")
                                        .pauseFor(20)
                                        .deleteAll()
                                        .typeString("-")
                                        .pauseFor(20)
                                        .deleteAll()
                                        .typeString("\\")
                                        .pauseFor(20)
                                        .deleteAll()
                                        .typeString("|")
                                        .pauseFor(20)
                                        .deleteAll()
                                        .start()
                                }}
                            />
                            <br/>
                        </div> : <></>}
                            </div>
                    )
                    )
                    :(
                        typeof value === "string" ?
                            <div key={index} className="domain-info shifted-div">
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
                                            .typeString(value)
                                            .stop()
                                            .start()
                                    }}
                                />
                            </div> :
                    <div key={index} className="shifted-div">
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
                                        .pauseFor(250)
                                        .typeString("Query returned " + value.length + " result(s):")
                                        .stop()
                                        .start()
                                }}
                            />
                        </div>
                        <div className="cursor">
                            {value.map((person: string) => (
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
                                            .pauseFor(750)
                                            .typeString(person)
                                            .stop()
                                            .start()
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    )
            ))}
        </div>
    )
}
