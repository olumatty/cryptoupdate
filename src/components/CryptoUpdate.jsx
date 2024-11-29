
import React from 'react';


const CryptoUpdate = ({name, price,low, high, cap}) => {
  return (
    <div className="flex justify-start mt-4">
      <div className="flex flex-row w-auto m-1">

        <div className="overflow-x-auto w-full">
          <table className="table-auto min-w-full border-collapse">
            <thead>
              <tr className="border-b text-sm font-semibold">
                <th className="pl-3 pr-10">Name</th>
                <th className="pr-10">Price</th>
                <th className="pr-10">High</th>
                <th className="pr-10">Low</th>
                <th className="pr-10">Cap</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="pl-3 pr-10">{name}</td>
              
                <td className="pr-10">${price}</td>
                <td className='pr-10'>${high}</td>
                <td className='pr-10'>${low}</td>
                <td className='pr-10'>${cap}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CryptoUpdate;
