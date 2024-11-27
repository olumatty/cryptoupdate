'use client'
import React, { useState } from 'react'

const CryptoSearch = () => {
    const [cryptoName, setCryptoName] = useState("")
  return (
    <div className='mt-20 flex flex-col items-center'>
      <div className='mb-12 flex flex-col flex-wrap items-center justify-center '>
        <h1 className='text-4xl md:text-6xl font-bold text-orange-500'>CRYPTO UPDATE</h1>
        <form>
            <input type='text' value={cryptoName} onChange={(e) => {setCryptoName(e.target.value)}} placeholder='Example: Bitcoin Cash' 
            className=' w-[320px] mt-3 h-12 p-4 font-medium md:w-[600px]'/>
        </form>
      </div>
    </div>
  )
}

export default CryptoSearch
