'use client'
import React from "react";
import PromptEffect from "@/app/prompt-effect";

export default function Prompt(props: {
    isDisabled: boolean,
    onKeyPress: CallableFunction,
    initialDelay: number
}) {
    return (
        <div className="type-user">
            <div className="row-div">
                <PromptEffect initialDelay={props.initialDelay}/>
                <input className="prompt" type="text" id="lname" name="lastname"
                       autoFocus={!props.isDisabled}
                       disabled={props.isDisabled}
                       onKeyDown={event => {
                           if (event.key === 'Enter') {
                               props.onKeyPress(event.currentTarget.value)
                           }
                       }}
                />
            </div>
        </div>
    )
}
