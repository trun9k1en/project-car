"use client"

import Button from "@mui/material/Button/Button";
import Rating from "@mui/material/Rating/Rating";
import React, { useState } from "react";

export default function ProductItem(item) {
  const { thumnail = "", name = "", price, rate , type } = item;
   const [showButton,setShowButton] = useState("1233123");
  // const showButton = "123"
  const handleChange = () =>{
    console.log("123")
  }
  // const [onChange, setOnChange] = useState([]);
  return (
    <div className="border rounded p-2 bg-[#FFFFFF] " onMouseEnter={() =>handleChange()}
    onMouseLeave={() =>{}}>
      <img
        src="https://bizweb.dktcdn.net/thumb/1024x1024/100/366/403/products/michelinenergyxm2plus-b47d8a57-677c-49de-b8d0-e6f6e6b0a4b5.jpg?v=1678355816577"
        className="mb-2 w-[210px]"
      ></img>
      <div className="color font-size: 1rem w-[210px] hover:text-[#03BE1CFF]">{name}</div>
      {type == 0 ? <div><Rating name="half-rating" defaultValue={0} value={rate} precision={0.5} readOnly /></div> : null}
      <div className="flex h-[24px] items-center">
        <div className="text-[#39b54a] font-bold mr-2">{price}</div>
        <div className="line-through text-sm text-[#888888]">{item["original-price"]}</div>
      </div>
      <Button className="flex rounded justify-center mt-2 hover:bg-[#03BE1CFF]">
        <div className = "">{showButton}</div>
      </Button>
    </div>
  );
}
