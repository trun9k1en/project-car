"use client";

import Button from "@mui/material/Button/Button";
import Rating from "@mui/material/Rating/Rating";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ProductItem(item) {
  const { thumnail = "", name = "", price, rate, type } = item;
  const route = useRouter();
  //  const [showButton,setShowButton] = useState("1233123");
  // const showButton = "123"
  const handleChange = () => {
    console.log("123");
  };
  console.log("1", item._id);
  // const [onChange, setOnChange] = useState([]);
  const numeral = require('numeral');
  return (
    <div
      className="border rounded p-2 bg-[#FFFFFF] "
      onClick={() => {
        route.push(`/san-pham/${item._id}`);
      }}
    >
      <img
        src={`http://192.168.1.9:8080${item.thumnail}`}
        className="mb-2 w-[210px]"
      />
      <div className="color font-size: 1rem w-[210px] hover:text-[#03BE1CFF]">
        {name}
      </div>
      {type == 0 ? (
        <div>
          <Rating
            name="half-rating"
            defaultValue={0}
            value={rate}
            precision={0.5}
            readOnly
          />
        </div>
      ) : null}
      <div className="flex items-center h-[24px]">
        <div className="text-[#39b54a] font-bold mr-2 text-lg">{numeral(price).format('0,0').replace(/,/g, '.') + 'đ'}</div>
        <div className="text-sm text-[#888888] line-through">
         {numeral(item["original-price"]).format('0,0').replace(/,/g, '.') + 'đ'}
        </div>
      </div>
      <Button className="flex rounded justify-center hover:bg-[#03BE1CFF]"></Button>
    </div>
  );
}
