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
    <div className="flex flex-col">
      {arraytype.map((m,index) => {
        return <div key={index}><ProductComponent index={index} name={m.name} /></div>;
      })}
    </div>
  );
}
