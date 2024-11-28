import Image from 'next/image';
import React from 'react';


const CryptoUpdate = ({name,symbol,price}) => {
  return (
    <div className="flex justify-center mt-4">
      <div className="flex flex-row  items-center w-auto m-1">

        <div className="overflow-x-auto w-full">
          <table className="table-auto min-w-full border-collapse">
            <thead>
              <tr className="border-b text-sm font-semibold">
                <th className="pl-3 pr-10">Name</th>
                <th className="pr-10">Symbol</th>
                <th className="pr-10">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="pl-5 pr-10">{name}</td>
                <td className="pr-10">{symbol}</td>
                <td className="pr-10">${price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CryptoUpdate;
