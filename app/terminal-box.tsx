'use client'
import Header from "@/app/header";
import Prompt from "@/app/prompt";
import React, {useEffect, useState} from "react";
import SqliPrompt from "@/app/sqli_prompt";
import CsrfPrompt from "@/app/csrf_prompt";

export default function TerminalBox() {

    const [prompts, setPrompts] = useState<string[]>([""]);
    const [isProcess, setIsProcess] = useState<boolean>(false)

    const addDefaultInput = (): void => {
        setPrompts(prompts => [...prompts, ""]);
    }

    useEffect(() => {
        localStorage.setItem("csrf", "enabled")
        localStorage.setItem("sqli", "enabled")
    }, []);

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
                localStorage.setItem("sqli", "enabled")
                setPrompts(prompts => [...prompts, "sql_enable"]);
                setPrompts(prompts => prompts.length === 0 ? [""] : [...prompts, ""]);
                break;
            case "enable csrf":
                localStorage.setItem("csrf", "enabled")
                setPrompts(prompts => [...prompts, "csrf_enable"]);
                setPrompts(prompts => prompts.length === 0 ? [""] : [...prompts, ""]);
                break;
            case "disable sqli":
                localStorage.setItem("sqli", "disabled")
                setPrompts(prompts => [...prompts, "sql_disable"]);
                setPrompts(prompts => prompts.length === 0 ? [""] : [...prompts, ""]);
                break;
            case "disable csrf":
                localStorage.setItem("csrf", "disabled")
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



