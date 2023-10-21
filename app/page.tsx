'use client'

import { FormEvent, useState } from 'react'
import { newRequest } from '@/server/firebase';

export default function Home() {
  async function submit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const name: string =  (event.currentTarget.elements[0] as HTMLInputElement).value
      const id: string =  (event.currentTarget.elements[1] as HTMLInputElement).value
      const format: string =  (event.currentTarget.elements[2] as HTMLInputElement).value
      const lengtth: string =  (event.currentTarget.elements[3] as HTMLInputElement).value
      const origin: string =  (event.currentTarget.elements[4] as HTMLInputElement).value
      // console.log(firstName, lastName, email, netid, major, year)
      newRequest(firstName, lastName, email)
  }

  return (
    <main className="flex gap-10 min-h-screen flex-col items-center bg-white">
      <div className="py-6 text-4xl text-purple-800 font-medium">Northwestern Formula CAN Request</div>
      <form action="" className="w-1/2 h-1/3 bg-gray-200 rounded-lg flex flex-col items-center justify-center gap-4 drop-shadow-lgbg-white drop-shadow-lg">
        <input type="text" className="w-1/2 h-10 mt-4 rounded-lg px-2" placeholder='Message Name'/>
        <input type="text" className="w-1/2 h-10 rounded-lg px-2" placeholder='Message ID'/>
        <select name="" id="" className="w-1/2 h-10 rounded-lg px-2">
          <option value="" disabled selected>ID Format</option>
          <option value="Standard">Standard</option>
          <option value="Extended">Extended</option>
        </select>
        <input type="text" className="w-1/2 h-10 rounded-lg px-2" placeholder='Length of Message (Bytes)'/>
        <select name="" id="" className="w-1/2 h-10 rounded-lg px-2">
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
    </main>
  )
}
