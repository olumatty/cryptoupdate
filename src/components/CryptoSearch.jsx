"use client";
import React, { useEffect, useState } from "react";
import CryptoUpdate from "./CryptoUpdate";
import { CiSearch } from "react-icons/ci";

const CryptoSearch = () => {
  const [cryptoSearch, setCryptoSearch] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const access_key = "77cce18d948708844c4dfb0b5a1218a0";

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!cryptoSearch.trim()) {
      console.error("Invalid Search");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.coinlayer.com/live?symbols=${cryptoSearch.toUpperCase()}&access_key=${access_key}`
      );
      if (!response.ok) throw new Error("Error occurred while fetching data");
      const data = await response.json();
      if (data.success && data.rates[cryptoSearch.toUpperCase()]) {
        setResult([
          {
            name: cryptoSearch.toUpperCase(),
            price: data.rates[cryptoSearch.toUpperCase()],
            symbol: cryptoSearch.toUpperCase(),
          },
        ]);
      } else {
        setError("No data found for this cryptocurrency");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchDefault = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.coinlayer.com/live?access_key=${access_key}`
      );
      if (!response.ok) throw new Error("Error occurred while fetching data");
      const data = await response.json();
      if (data.success) {
        const fetchedData = Object.keys(data.rates).map((symbol) => ({
          name: symbol,
          price: data.rates[symbol],
          symbol: symbol,
        }));
        setResult(fetchedData);
      } else {
        setError("No data found for these cryptocurrencies");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDefault();
  }, [access_key]);

  return (
    <div className="mt-20 flex flex-col items-center">
      <div className="mb-12 flex flex-col flex-wrap items-center justify-center ">
        <h1 className="text-4xl md:text-6xl font-bold text-orange-500">
          CRYPTO UPDATE
        </h1>
        <form onSubmit={handleSearch}>
          <div className="relative flex">
            <div className="absolute right-10 top-7">
              <button className="" type="submit">
                <CiSearch className="text-2xl text-neutral-500" />
              </button>
            </div>
            <input
              type="text"
              value={cryptoSearch}
              onChange={(e) => {
                setCryptoSearch(e.target.value);
              }}
              placeholder="Example: Bitcoin"
              className=" w-[320px] mt-3 h-14 p-4 font-medium md:w-[600px] text-neutral-500 rounded-full outline-none border border-[#f97316]"
            />
          </div>
        </form>
        {loading ? (
          <p className="text-neutral-400 mt-3">Loading.....</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : result.length > 0 ? (
          <div>
            {result.slice(0,10).map((crypto, index) => (
              <CryptoUpdate
                key={index}
                name={crypto.name}
                symbol={crypto.symbol}
                price={crypto.price}
            
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-700">No data Available. Try Again</p>
        )}
      </div>
    </div>
  );
};

export default CryptoSearch;
