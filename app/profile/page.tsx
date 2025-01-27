// export default function Page() {
//     return (
//         <>
//         <div className="flex flex-col w-full h-screen items-center justify-center" id="div">
//             <h1 className="text-4xl">Profile Page</h1>
//         </div>
//         </>
//     )
// }


"use client"

import { useState } from "react"


export default function Page() {
  const [participants, setParticipants] = useState()

  const handleFetch = async () => {
    const result = await fetch('/api/getData')
    const data = await result.json()
    setParticipants(data.data)
  }

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center" id="div">
      <h1 className="text-4xl">{participants}</h1>

      {/* <button >Fetch Participants</button> */}
        <button onClick={handleFetch} className="bg-gray-200 p-5 rounded-full hover:bg-blue-500 transition text-black">Fetch Participants</button>
    </div>
  )
}