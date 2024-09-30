"use client";

import ProductComponent from "@/components/product-component";
export default function Products() {
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
      name: "CÁC SẢN PHẨM KHÁC",
    }
  ];
  return (
    <div>
      {arraytype.map((m,index) => {
        return <div key={index}>{ProductComponent(m)}</div>;
      })}
    </div>
  );
}
