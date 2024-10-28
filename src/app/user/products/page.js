"use client";

import axiosInstance from "@/axios/api-config";
import { home } from "@/axios/endpoints";
import ProductComponent from "@/components/product-component";
import { useEffect, useState } from "react";
export default function Products() {
  const [homeTitle, setHomeTitle] = useState([])
  useEffect(()=>{
    axiosInstance.get(home).then((res)=>{
      if(res && res.data && res.data.code===200){
        console.log('res.data',res.data)
        setHomeTitle(res.data.data)
      }
    })
  },[])
  const arraytype = [
    {
      index: 0,
      name: "LỐP Ô TÔ",
    },
    {
      index: 1,
      name: "ẮC QUY Ô TÔ",
    },
    {
      index: 2,
      name: "Giảm xóc Tein Nhật Bản",
    },
    {
      index: 3,
      name: "Các sản phẩm khác",
    }
  ];
  return (
    <div className="flex flex-col">
      {homeTitle.map((m,index) => {
        return <div key={index}><ProductComponent index={m.type} name={m.name} children ={m.children} limit={5}/></div>;
      })}
    </div>
  );
}
