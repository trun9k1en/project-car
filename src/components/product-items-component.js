"use client";

import Divider from "@mui/material/Divider/Divider";
import Rating from "@mui/material/Rating/Rating";
import { useEffect, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import axiosInstance from "@/axios/api-config";

export default function ProductItemsComponent(item) {
  const {
    images = [],
    name = "",
    price,
    originalPrice,
    rate,
    promotion,
    save = originalPrice - price,
    description,
    warranty_policy,
    onClick,
  } = item;
  const [html, setHtml] = useState("");
  const [activeContent, setActiveContent] = useState(1)
  useEffect(() => {
    axiosInstance.get(`/htmls/${activeContent == 1 ? description :warranty_policy} ` ).then((res) => {
      if (res) {
        
        setHtml(res.data);
      }
    });
  }, [activeContent]);
  const [image, setImage] = useState(images[0]);
  const [count, setCount] = useState(1);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
 ;
  const handleContentClick = (contentNumber) => {
    setActiveContent(contentNumber);
  };
  //   useEffect(() => {
  //     if (images) {
  //       setImage(images[0]);
  //     }
  //   }, [images]);
  return (
    <div>
      <div className="flex my-8">
        <div>
          <img
            src={"http://192.168.1.9:8080" + image}
            className="w-[470px] h-[470px] mb-4 mr-4"
          />
          <div className="flex justify-between w-[470px]">
            {images.map((image, index) => (
              <img
                key={index}
                src={"http://192.168.1.9:8080" + image}
                alt={`Image ${index + 1}`}
                className="w-[86px] h-[86px] border-2 border-transparent transition duration-300 hover:border-green-600"
                onClick={() => setImage(image)}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="text-3xl text-[#474a62]">{name}</div>
          <Rating
            name="half-rating"
            defaultValue={0}
            value={rate}
            precision={0.5}
            readOnly
            className="mt-3"
          />
          <div className="flex items-center">
            <div className="text-2xl text-[#39b54a] mr-2">{price}</div>
            <div className="text-lg text-[#CCCCCC] line-through mt-1">
              {originalPrice}
            </div>
          </div>
          <div className="text-sm font-bold flex mt-2">
            Tiết kiệm: <div className="font-normal ml-1">{save}</div>
          </div>
          <Divider
            sx={{
              flexGrow: 1,
              borderStyle: "dashed",
              borderColor: "#EEEEEE",
            }}
            className="my-4"
          />
          <div className="text-3xl mb-4">ƯU ĐÃI</div>
          <div>
            {promotion.length > 0
              ? promotion.map((m) => (
                  <div
                    className="text-base text-[#474a62] mb-4 ml-8"
                    dangerouslySetInnerHTML={{ __html: m.description }}
                  />
                  // <li className="text-base text-[#474a62] mb-4 ml-8">{m.description}</li>
                ))
              : null}
          </div>
          <div className="text-base text-[#474a62] flex font-normal">
            GIÁ ÁP DỤNG CHO ĐƠN HÀNG ĐẶT TRƯỚC. GỌI NGAY
            <div className="text-[#39b54a] font-bold ml-1">0848911111</div>
          </div>
          <Divider
            sx={{
              flexGrow: 1,
              borderStyle: "dashed",
              borderColor: "#EEEEEE",
            }}
            className="my-4"
          />
          <div className="flex items-center mb-8">
            <div className="font-bold text-[#474a62] mr-8">Số lượng:</div>
            <button className="flex w-[120px] h-[45px] border border=[#eaebf3] justify-around items-center rounded-full">
              <div
                className="text-xl font-extrabold text-[##8d90a6]"
                onClick={decrease}
              >
                -
              </div>
              <div>{count}</div>
              <div
                className="text-xl font-extrabold text-[##8d90a6]"
                onClick={increase}
              >
                +
              </div>
            </button>
          </div>
          <div className="flex">
            <button
              className="flex w-[270px] py-3 text-sm text-[#FFFFFF] font-bold justify-center items-center mr-4 bg-[#39b54a] rounded-md hover:bg-white hover:text-[#39b54a] hover:border hover:border-[#39b54a]"
              onClick={onClick}
            >
              MUA LẺ
              <PhoneIcon
                sx={{ fontSize: 20, color: "#FF0000" }}
                className="mx-1"
              />
              <div>0848911111</div>
            </button>
            <button className="w-[270px] py-3 text-sm text-[#FFFFFF] font-bold text-center items-center bg-[#474a62] rounded-md hover:bg-white hover:text-[#474a62] hover:border hover:border-[#39b54a]">
              MUA SỈ
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-b">
        <button
          className={`text-2xl text-[#474A62] mr-8 font-bold p-4 ${
            activeContent == 1 ? `border-b-2 border-b-[#39b54a]` : null
          }`}
          onClick={() => handleContentClick(1)}
        >
          MÔ TẢ
        </button>
        <button
          className={`text-2xl text-[#474A62] font-bold p-4 ${
            activeContent == 2 ? `border-b-2 border-b-[#39b54a]` : null
          }`}
          onClick={() => handleContentClick(2)}
        >
          CHÍNH SÁCH BẢO HÀNH
        </button>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} className="mt-4" />
    </div>
  );
}
