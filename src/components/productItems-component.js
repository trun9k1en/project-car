"use client"
import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating/Rating";


export default function ProductItemsComponent(item) {
  const [image, setImage] = useState(null);
  const {
    images = [],
    name = "",
    price,
    originalPrice,
    rate,
    promotion,
  } = item;
  
  useEffect(() => {
    if(images) {
        setImage(images[0])
    }
  }, [images]) 
  return (
     <div className="flex">
      <img src={"http://192.168.1.9:8080" + images[0]} className="border w-[470px] h-[470px]" />
      <div>
        <div className="text-3xl text-[#474a62]">{name}</div>
        <div>
          <Rating
            name="half-rating"
            defaultValue={0}
            value={rate}
            precision={0.5}
            readOnly
          />
        </div>
        <div className="flex">
          <div>{price}</div>
          <div>{originalPrice}</div>
        </div>
        <div>ƯU ĐÃI</div>
        <div>{promotion}</div>
        <div>
          ÁP DỤNG CHO ĐƠN HÀNG ĐẶT TRƯỚC. GỌI NGAY: <div>0848911111</div>
        </div>
      </div>
    </div>
  );
}
