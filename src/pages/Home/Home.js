import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';

const Home = () => {
    const [ roomcode,setRoomCode] = useState("")
    const navigate = useNavigate();

    const handleForm = (e) =>{
        e.preventDefault();
        navigate(`/room/${roomcode}`)

    }
  return (

    <>
    <Navbar/>
        <div className='home-page h-[500px] p-10 '>
        <form onSubmit={handleForm} className='form'>
            <div>
                <label className='text-4xl p-4' htmlFor="">Enter Room Code</label>
                <input className='w-96 h-9 border border-purple-800 mb-9 p-4' type="text" value={roomcode} onChange={e => setRoomCode(e.target.value)} required placeholder='Room Code' />
            </div>
           
            <button type="submit" class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Enter Room
</button>
        </form>
        
    </div>
    </>
  )
}

export default Home