'use client'
import React, { useState } from 'react'
import CryptoUpdate from './CryptoUpdate'

const CryptoSearch = () => {
    const [cryptoSearch, setCryptoSearch] = useState("");
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const Api_Key = "77cce18d948708844c4dfb0b5a1218a0"

    const handleSearch = async (e) => {
        if(!cryptoSearch.trim()){
            console.error("Invalid Name");
            return;
        }
        try{
        const response = await fetch (`https://api.example.com/cryptos?limit=8&query=${cryptoSearch}&apikey=${Api_Key}`);

        if(!response.ok){
            console.error("Error occurred while fetching data");
            return;
        }

        const data = await response.json();
        setResult(data)

        }catch (error){

        }

    }
  return (
    <div className='mt-20 flex flex-col items-center'>
      <div className='mb-12 flex flex-col flex-wrap items-center justify-center '>
        <h1 className='text-4xl md:text-6xl font-bold text-orange-500'>CRYPTO UPDATE</h1>
        <form>
            <input type='text' value={cryptoSearch} onChange={(e) => {setCryptoSearch(e.target.value)}} placeholder='Example: Bitcoin' 
            className=' w-[320px] mt-3 h-14 p-4 font-medium md:w-[600px] text-neutral-500 rounded-full outline-none border border-[#f97316]'/>
        </form>
        <CryptoUpdate/>
      </div>
    </div>
  )
}

export default CryptoSearch
