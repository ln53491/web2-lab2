'use client'
import React, {useEffect, useRef, useState} from "react";
import Typewriter from "typewriter-effect";
import {responses} from "@/app/responses";
import initDb, {getDbData} from "@/app/db";
import {QueryResultRow} from "pg";

export default function SqliPrompt(props: {
    killPrompt: CallableFunction,
}) {
    var isDb: boolean = false;
    const [isInput, setIsInput] = useState<boolean>(false);
    const [delay, setDelay] = useState<boolean>(false);
    const [query, setQuery] = useState<string>("");
    const [currData, setCurrData] = useState<any[]>([0]);
    const inputRef = useRef(null);

    useEffect(() => {
        async function getDbClient() {
            isDb = true;
            await initDb();
        }
        if (!isDb) {
            getDbClient();
        }
    }, []);

    useEffect(() => {
        async function getData() {
            setQuery("");
            const rows = await getDbData(query);
            console.log(rows)
            if (typeof rows === "string") {
                setCurrData(prompts => [...prompts, rows, prompts[prompts.length - 1]+1])
            } else {
                const personRows: string[] = []
                rows.map(row => {
                    personRows.push(JSON.stringify(row));
                })
                setCurrData(prompts => [...prompts, personRows, prompts[prompts.length - 1]+1])
            }
        }
        if (query != "") {
            getData()
        }
    }, [query]);

    const onKeyPress = (value: string): void => {
        const currValue = value.toLowerCase().trim();
        if (currValue == "kill") {
            props.killPrompt();
        } else {
            setQuery(value);
            console.log(currData)
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
                        cursor: ""
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
                        cursor: ""
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
                        cursor: ""
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
                        cursor: ""
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
                                    .pauseFor(2750 + 400 + 3000 + 1000 + 1000 + 500)
                                    .typeString(responses.sqli_info[5])
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
                        cursor: ""
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(2750 + 400 + 3000 + 1000 + 1000 + 500 + 150)
                            .typeString(responses.sqli_info[6])
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
                            .pauseFor(2750 + 400 + 3000 + 1000 + 1000 + 500 + 150 + 750)
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
                                        .pauseFor(delay ? 1000 : 2750 + 400 + 3000 + 1000)
                                        .typeString("Enter ID:")
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
                    </div> :(
                        typeof value === "string" ?
                            <div className="domain-info shifted-div">
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
                    <div className="shifted-div">
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
