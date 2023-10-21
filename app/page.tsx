'use client'

import { FormEvent, useState } from 'react'
import { newRequest } from '@/server/firebase';

export default function Home() {
  const [submitted, setSubmitted] = useState(0);
  async function submit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const name: string =  (event.currentTarget.elements[0] as HTMLInputElement).value
      const id: string =  (event.currentTarget.elements[1] as HTMLInputElement).value
      const format: string =  (event.currentTarget.elements[2] as HTMLInputElement).value
      const length: string =  (event.currentTarget.elements[3] as HTMLInputElement).value
      const origin: string =  (event.currentTarget.elements[4] as HTMLInputElement).value
      newRequest(name, id, format, length, origin)
      setSubmitted(1)
  }

  return (
    <main className="flex gap-10 min-h-screen flex-col items-center bg-white">
       <div className="py-6 text-4xl text-purple-800 font-medium">Northwestern Formula CAN Request</div>
      {submitted ? (
        <div className="w-1/2 h-96 bg-gray-200 rounded-lg flex flex-col items-center justify-center gap-4">
          <button onClick={() => setSubmitted(0)} className='bg-purple-800 text-white rounded-lg w-2/5 h-8 self-center mb-4 transition duration-200 hover:bg-purple-600' type='submit'>Submit Another Response</button>
        </div>
      ) : (
        <form onSubmit={submit} className="w-1/2 h-96 bg-gray-200 rounded-lg flex flex-col items-center justify-center gap-4 drop-shadow-lg">
          <input type="text" className="w-1/2 h-10 mt-4 rounded-lg px-2" placeholder='Message Name' required/>
          <input type="text" className="w-1/2 h-10 rounded-lg px-2" placeholder='Message ID' required/>
          <select name="" id="" className="w-1/2 h-10 rounded-lg px-2" required>
            <option value="" disabled selected>ID Format</option>
            <option value="Standard">Standard</option>
            <option value="Extended">Extended</option>
          </select>
          <input type="text" className="w-1/2 h-10 rounded-lg px-2" placeholder='Length of Message (Bytes)' required/>
          <select name="" id="" className="w-1/2 h-10 rounded-lg px-2" required>
            <option value="" disabled selected>Origin Board</option>
            <option value="Aerodynamics">Aerodynamics</option>
            <option value="Coolant">Coolant</option>
            <option value="Location">Location</option>
            <option value="Suspension">Suspension</option>
            <option value="Wheel">Wheel</option>
            <option value="Dash">Dash</option>
            <option value="Wireless">Wireless</option>
            <option value="Logger">Logger</option>
          </select>
          <button className='bg-purple-800 text-white rounded-lg w-1/6 h-8 self-center mb-4 transition duration-200 hover:bg-purple-600' type='submit'>Submit</button>
        </form>
      )}
    </main>
  )
}
