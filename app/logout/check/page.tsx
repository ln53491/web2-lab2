'use client'
import React, {useEffect, useState} from "react";
import {useCookies} from "react-cookie"
import {csrfSecretToken} from "@/app/responses";
import {useParams} from "next/navigation";

export default function Logout() {
    const params = useParams();
    const [cookie, setCookie, removeCookie] = useCookies(["user"]);
    const [logout, setLogout] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        if (params["token"] == csrfSecretToken || localStorage.getItem("csrf") == "ENABLED") {
            setLogout(true);
            removeCookie("user", {path:'/'});
        } else {
            setLogout(false);
        }
    }, []);

    return (
        <>
            {logout === undefined ?
                <div className="text-logout color-white root-div flex flex-col items-center">
                    <div className="text-logout">
                        Verifying...
                    </div>
                </div>
            : (logout ?
                    <div className="text-logout color-white root-div flex flex-col items-center">
                        <div className="text-logout">
                            You are successfully logged out!
                        </div>
                        <div className="text-logout-2">
                            You may close this page.
                        </div>
                    </div> :
                    <div className="text-logout color-white root-div flex flex-col items-center">
                        <div className="text-logout">
                            Logout failed.
                        </div>
                        <div className="text-logout-2">
                            Please check your anti-CSRF token.
                        </div>
                    </div>
                )
            }
        </>
    )
}
