'use client'
import React from "react";
import TerminalBox from "@/app/terminal-box";

export default function Home() {
  return (
    <main className="root-div flex flex-col items-center justify-between">
      <div className="main-div"/>
        <TerminalBox/>
    </main>
  )
}