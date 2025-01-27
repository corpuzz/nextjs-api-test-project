"use client"

import { useState } from "react"
import { useEffect } from "react"

export default function Page() {

    const [count, setCount] = useState(0)
    const [clicked, setClicked] = useState(" ")
    const [name, setName] = useState(" ")


    useEffect(() => {
        // setCount(count + 1)
        setNameN();
    }, [count])

    const setNameN = () => {
        setName("Mark".repeat(count))
    }
    const handleClick = () => {
        setCount(count + 1)
    }

    const handleHi = () => {
        setClicked("Hi")
    }

    const handleHello = () => {
        setClicked("Hello")
    }

    const handleReset = () => {
        setName(" ")
        setCount(0)
    }


    return (
        <>
            <div className="flex flex-col w-full h-screen items-center justify-center" id="div">
                <h1 className="text-4xl">About Page</h1>
                <p className="text-4xl">You've clicked the button {count} times</p>
                <p className="text-4xl">{clicked}</p>
                <p className="text-4xl">{name}</p>
                <div className="flex flex-col w-32">
                    <button
                        className="bg-gray-200 px-5 py-2 m-2 rounded-full hover:bg-blue-500 transition text-black"
                        onClick={handleClick}
                    >Click me</button>
                    <button
                        className="bg-gray-200 px-5 py-2 m-2 rounded-full hover:bg-blue-500 transition text-black"
                        onClick={handleReset}
                    >Reset</button>
                    <button
                        className="bg-gray-200 px-5 py-2 m-2 rounded-full hover:bg-blue-500 transition text-black"
                        onClick={handleHi}
                    >hi</button>
                    <button
                        className="bg-gray-200 px-5 py-2 m-2 rounded-full hover:bg-blue-500 transition text-black"
                        onClick={handleHello}
                    >hello</button>

                </div>
            </div>
        </>
    )
}