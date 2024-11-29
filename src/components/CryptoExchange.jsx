'use client'
import React, { useState } from 'react'

const CryptoExchange = () => {
    const[amount, setAmount] = useState('');
    const[cryptoTo, setCryptoTo] = useState('')
    const[cryptoFrom, setCrytoFrom] = useState('')
    const[result,setResult]= useState([])
    const[Loading, setLoading] = useState(false);
    const[error, setError] = useState(null);
  return (
    <div className='mt-6 flex flex-col flex-wrap items-center justify-center'>
        <div className='border border-orange-500 rounded-lg w-[320px] p-4'>
        <form>
            <div className='flex flex-col mb-2'>
                <label htmlFor='Amount'>Amount</label>
                <input type ="text" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder='Enter Amount' className='mt-1 h-8 bg-transparent border border-orange-500 p-4 outline-none rounded'/>
            </div>
            <div className='flex flex-col mb-2'>
                <label htmlFor='From'>From</label>
                <input type ="text" value={cryptoTo} onChange={(e)=> setCryptoTo(e.target.value)}  placeholder ='ETH' className='mt-1 h-8 bg-transparent border border-orange-500 p-4 outline-none rounded'/>
            </div>
          
            <div className='flex flex-col mb-2'>
                <label htmlFor='To'>To</label>
                <input typr ="text"  value={cryptoFrom} onChange={(e)=> setCrytoFrom(e.target.value)}  placeholder='BTC' className='mt-1 h-8 bg-transparent border border-orange-500 p-4 outline-none rounded'/>
            </div>

            <button className='w-[200px] flex justify-center items-center mx-auto font-bold h-8 border bg-orange-500 text-white rounded '> Convert</button>
        </form>
        <div className='mt-2'> 
            <p className='text-center font-bold'>Result</p>
        </div>

        </div>
      
    </div>
  )
}

export default CryptoExchange
