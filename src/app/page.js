import CryptoExchange from "@/components/CryptoExchange";
import CryptoSearch from "@/components/CryptoSearch";
import CryptoUpdate from "@/components/CryptoUpdate";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-6xl mt-10 text-center font-bold text-orange-500">
        Crpto Exchange & Update
      </h1>
      <CryptoExchange />
      <CryptoSearch />
    </div>
  );
};

export default page;
