'use client'
import React from "react";
import PromptEffect from "@/app/prompt-effect";
import TextPrompt from "@/app/text-prompt";
import {responses} from "@/app/responses";

export default function Prompt(props: {
    isDisabled: boolean,
    onKeyPress: CallableFunction,
    initialDelay: number
    isTextOnly: boolean
    value: string
    showEffect: boolean
}) {
    return (
        <div className="type-user">
            {props.isTextOnly ?
                <div className="row-div">
                    {// @ts-ignore
                    <TextPrompt text={[`SQLi = ${localStorage.getItem("sqli").toUpperCase()}`, `CSRF = ${localStorage.getItem("csrf").toUpperCase()}`]}/>
                    }
                </div> :
                <div className="row-div">
                    {props.showEffect ? <PromptEffect initialDelay={props.initialDelay}/> : <></>}
                    <input className="prompt" type="text"
                           autoFocus={!props.isDisabled}
                           disabled={props.isDisabled}
                           onKeyDown={event => {
                               if (event.key === 'Enter') {
                                   props.onKeyPress(event.currentTarget.value)
                               }
                           }}
                    />
                </div>
            }
        </div>
    )
}
