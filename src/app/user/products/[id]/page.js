"use client";

import axiosInstance from "@/axios/api-config";
import { product } from "@/axios/endpoints";
import ProductItemsComponent from "@/components/productItems-component";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function ProductItems() {
  const params = useParams();
  const [products, setProductItems] = useState(null);
  useEffect(() => {
    if(params.id){
        axiosInstance.get(product + "?id=" + params.id).then((response) => {
            if (response.data.data) {
              setProductItems(response.data.data);
              console.log(response.data.data);
            }
          });
    }
  }, [params.id]);
  

  return (
    <div className="flex">
   
      {products ? ProductItemsComponent(products) :null}
    </div>
  );
}
