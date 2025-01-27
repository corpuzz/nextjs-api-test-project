"use client"

import { useState } from "react"

export default function Page() {
  const [quote, setQuote] = useState()

  const handleFetch = async () => {
    // const result = await fetch('/api/getData')
    const result = await fetch('https://nxttt.vercel.app/api/generateQuote')
    const data = await result.json()
    setQuote(data.quote)
  }

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center" id="div">
      <h1 className="text-4xl">{quote}</h1>

      {/* <button >Fetch Participants</button> */}
        <button onClick={handleFetch} className="bg-gray-200 p-5 rounded-full hover:bg-blue-500 transition text-black">Fetch Qoute</button>
    </div>
  )
}