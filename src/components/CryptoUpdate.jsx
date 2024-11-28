import Image from 'next/image';
import React from 'react';


const CryptoUpdate = ({image,name,symbol,price, volume, priceChange, marketCap}) => {
  return (
    <div className="flex justify-start">
      <div className="flex flex-row border border-[#f97316] border-b items-center w-auto md:w-auto m-3">

        <div className="overflow-x-auto w-full">
          <table className="table-auto min-w-full border-collapse">
            <thead>
              <tr className="border-b text-sm font-semibold">
                <th className="pl-3 pr-10">Crypto</th>
                <th className="pr-10">Name</th>
                <th className="pr-10">Symbol</th>
                <th className="pr-10">Price</th>
                <th className="pr-10">Volume</th>
                <th className="pr-10">Price Change</th>
                <th className="pr-10">Market Cap</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="pl-5 pr-10">
                  <Image src={image} alt='crypto'/>
                </td>
                <td className="pr-10">{name}</td>
                <td className="pr-10">{symbol}</td>
                <td className="pr-10">${price}</td>
                <td className="pr-10">${volume}</td>
                {priceChange<0 ? (<td className='text-red-500'>{priceChange.toFixed(2)}%</td>): (<td className='text-green-500'>{priceChange.toFixed(2)}%</td>)}
                <td className="pr-10">${marketCap.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CryptoUpdate;
