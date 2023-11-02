'use client'
import Header from "@/app/header";
import Prompt from "@/app/prompt";
import React, {useEffect, useState} from "react";
import CustomPrompt from "@/app/custom-prompt";
import {responses} from "@/app/responses";

export default function TerminalBox() {

    const [promptsIds, setPromptsIds] = useState<number[]>([0]);
    const handleEnterPrompt = (value: string): void => {
        switch(value.toLowerCase()) {
            case "clear":
                setPromptsIds([] as number[])
                break;
            case "help":

            default:
                setPromptsIds(prompts => prompts.length === 0 ? [0] : [...prompts, prompts[prompts.length - 1] + 1]);
                break;
        }
    };

    useEffect((): void => {
        if (promptsIds.length === 0) {
            handleEnterPrompt("")
        }
    });

    return (
        <div className="hidden-div">
            <Header/>
            {promptsIds.map(promptId => (
                <Prompt
                    isDisabled={promptId != promptsIds[promptsIds.length - 1]}
                    initialDelay={promptsIds[promptsIds.length - 1] ? 150 : 500}
                    onKeyPress={handleEnterPrompt}
                />
            ))}
            {/*<CustomPrompt text={responses["help"]}/>*/}
        </div>
    )
}



