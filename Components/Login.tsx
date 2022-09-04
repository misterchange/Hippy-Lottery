import { useMetamask } from '@thirdweb-dev/react'
import React from 'react'

function Login() {

    const connectWithMetamask = useMetamask();

  return (
    <div className='bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center'>
        <div className='flex flex-col items-center mb-10'>
            <img  className='h-56 w-56 mb-10 rounded-full' src="https://i.postimg.cc/63qXyM7w/HIPPY-1.png" alt=""/>
        </div>
        <h1 className='text-5xl text-white font-bold'>HIPPY LOTTERY</h1>
        <h2 className='text-2xl text-white folt-semibold'>TRY OUT YOUR LUCK</h2>
        <h2 className='text-white'>Get Started by logging in with your Metamask</h2>

        <button onClick={connectWithMetamask} className='bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold'>
            Log in with Metamask
        </button>

    </div>
  )
}

export default Login