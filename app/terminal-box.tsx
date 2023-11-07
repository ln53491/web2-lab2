'use client'
import Header from "@/app/header";
import Prompt from "@/app/prompt";
import React, {useEffect, useState} from "react";
import {responses} from "@/app/responses";
import SqliPrompt from "@/app/sqli_prompt";
import CsrfPrompt from "@/app/csrf_prompt";

export default function TerminalBox() {

    const [prompts, setPrompts] = useState<string[]>([""]);
    const [isProcess, setIsProcess] = useState<boolean>(false)

    const addDefaultInput = (): void => {
        setPrompts(prompts => [...prompts, ""]);
    }

    const handleEnterPrompt = (value: string): void => {
        switch(value.toLowerCase().trim()) {
            case "kill":
                setPrompts(prompts => prompts.length === 0 ? [""] : [...prompts, ""]);
                break;
            case "start sqli":
                setPrompts(prompts => [...prompts, "sqli_info"]);
                break;
            case "start csrf":
                setPrompts(prompts => [...prompts, "csrf_info"]);
                break;
            case "enable sqli":
                responses["status"][0] = "SQLi = ENABLED"
                setPrompts(prompts => [...prompts, "sql_enable"]);
                setPrompts(prompts => prompts.length === 0 ? [""] : [...prompts, ""]);
                break;
            case "enable csrf":
                responses["status"][1] = "CSRF = ENABLED"
                setPrompts(prompts => [...prompts, "csrf_enable"]);
                setPrompts(prompts => prompts.length === 0 ? [""] : [...prompts, ""]);
                break;
            case "disable sqli":
                responses["status"][0] = "SQLi = DISABLED"
                setPrompts(prompts => [...prompts, "sql_disable"]);
                setPrompts(prompts => prompts.length === 0 ? [""] : [...prompts, ""]);
                break;
            case "disable csrf":
                responses["status"][1] = "CSRF = DISABLED"
                setPrompts(prompts =>[...prompts, "csrf_disable"]);
                setPrompts(prompts => prompts.length === 0 ? [""] : [...prompts, ""]);
                break;
            case "clear":
                setPrompts([] as string[])
                break;
            case "help":
                setPrompts(prompts => [...prompts, "help"]);
                setPrompts(prompts => prompts.length === 0 ? [""] : [...prompts, ""]);
                break;
            case "status":
                setPrompts(prompts => [...prompts, "status"]);
                setPrompts(prompts => prompts.length === 0 ? [""] : [...prompts, ""]);
                break;
            default:
                if (value.trim() != "") setPrompts(prompts => [...prompts, "error"]);
                setPrompts(prompts => prompts.length === 0 ? [""] : [...prompts, ""]);
                break;
        }
    };

    useEffect((): void => {
        if (prompts.length === 0) {
            handleEnterPrompt("")
        }
    });

    return (
        <div className="hidden-div">
            <Header/>
            {prompts.map((promptValue, index) => (
                promptValue == "sqli_info" ?
                    <SqliPrompt key={index} killPrompt={addDefaultInput}/> :
                    (promptValue == "csrf_info" ?
                        <CsrfPrompt key={index} killPrompt={addDefaultInput}/> :
                            <Prompt
                                key={index}
                                isDisabled={promptValue != prompts[prompts.length - 1]}
                                initialDelay={(index == (prompts.length - 1)) ? 150 : 500}
                                onKeyPress={handleEnterPrompt}
                                isTextOnly={promptValue != ""}
                                value={promptValue}
                                showEffect={true}
                            />
                    )
            ))}
        </div>
    )
}



