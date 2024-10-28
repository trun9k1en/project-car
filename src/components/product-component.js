"use client";

import axiosInstance from "@/axios/api-config";
import { products, productTypes } from "@/axios/endpoints";
import { useContext, useEffect, useState } from "react";
import ProductItem from "./product-item";
import { LoadingProvider, useLoading } from "@/context/loading-context";

export default function ProductComponent({ index, name, children = [], limit = 20  }) {
  const [data, setProducts] = useState([]);
  const [type, setType] = useState(0);
  console.log("children", children);
  useEffect(() => {
    if (children.length > 0) {
      axiosInstance
        .get(products + "?type=" + children[0].type +"&pageNumber=1&pageSize="+limit)
        .then((response) => {
          if (response.data.data) {
            setProducts(response.data.data);
          }
        });
    } else {
      axiosInstance.get(products + "?type=" + index+"&pageNumber=1&pageSize=" + limit).then((response) => {
        if (response.data.data) {
          setProducts(response.data.data);
        }
      });
    }
  }, [children]);
  useEffect(() => {
    if (type) {
      setProducts([]);
      axiosInstance.get(products + "?type=" + type+"&pageNumber=1&pageSize=5").then((response) => {
        if (response.data.data) {
          setProducts([...response.data.data]);
        } else {
          setProducts([]);
        }
      });
    }
  }, [type]);

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
        {children.map((m) => (
          <div
            onClick={() => setType(m.type)}
            className="text-base text-[#474a62] hover:text-[#03BE1CFF]"
          >
            {m.name}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.map((m) => (
          <div key={m.name}>{ProductItem(m)}</div>
        ))}
      </div>
    </div>
  );
}
