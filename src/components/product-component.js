"use client";

import axiosInstance from "@/axios/api-config";
import { products, productTypes } from "@/axios/endpoints";
import { useContext, useEffect, useState } from "react";
import ProductItem from "./product-item";
import { LoadingProvider, useLoading } from "@/context/loading-context";

export default function ProductComponent({ index, name }) {
  const [data, setProducts] = useState([]);
  const [types, setTypes] = useState([]);
  const [type,setType] = useState(0);
  
  useEffect(() => {
    axiosInstance.get(products + "?type=" + index).then((response) => {
      if (response.data.data) {
        setProducts(response.data.data);
      }
    });
    if (index == 2) {
      axiosInstance.get("product-types?skip=3").then((response) => {
        if (response.data.data) {
          setTypes(response.data.data);
          setType(response.data.data[0].type)
        }
      });
    }
  }, []);
  useEffect(() =>{
    if(type){
      setProducts([]);
 
      axiosInstance.get(products + "?type=" + type).then((response) => {
        if (response.data.data) {
          console.log('chay vao day')
          setProducts([...response.data.data]);
        }
        else{
          setProducts([]);
  
        }
        // hideLoading()
      });
    }
  },[type])
  const [textActive, setTextActive] = useState(0);
  return (
    <div className="flex flex-col">
      {index != 2 ? (
        <div className="flex items-center justify-between">
          <img src="/bg_title.webp" className="w-[417px] h-[22px]" />
          <div className="text-4xl text-[#474a62] font-medium mb-8 mt-8">
            {name}
          </div>
          <img src="/bg_title.webp" className="w-[417px] h-[22px]" />
        </div>
      ) : (
        <div className="self-center">
          <div className="text-4xl text-[#474a62] font-medium mb-8 mt-8">
            {name}
          </div>
        </div>
      )}

      <div className="flex justify-between w-[720px] self-center">
        {index == 2
          ? types.map((m) => (
              <div onClick={()=>setType(m.type)} className="text-base text-[#474a62] hover:text-[#03BE1CFF]">
                {m.name}
              </div>
            ))
          : null}
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.map((m) => (
          <div key={m.name}>{ProductItem(m)}</div>
        ))}
      </div>
    </div>
  );
}
