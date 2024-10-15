"use client";

import { useState } from "react";
import DropDownComponent from "./dropdown-component";
import { useEffect } from "react";
import { car, carTypes } from "@/axios/endpoints";
import axiosInstance from "@/axios/api-config";

export default function Banner() {
  const [activeButton, setActiveButton] = useState(1);
  const [carCompany, setCarCompany] = useState([]);
  const [carName, setCarName] = useState([]);
  const [selectedCarCompanyId, setSelectedCarCompanyId] = useState(null);
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  useEffect(() => {
    axiosInstance.get(carTypes).then((response) => {
      if (response.data.data) {
        setCarCompany(response.data.data);
      }
    });
  }, []);
  useEffect(() => {
    if(selectedCarCompanyId){
      axiosInstance.get(car + "?id=" + selectedCarCompanyId.id).then((response) => {
        if (response.data.data) {
          setCarName(response.data.data.children);
          console.log("kien",response.data.data);
        }
      });
    }
 
  }, [selectedCarCompanyId]);
  return (
    <div className="flex w-full bg-[url('/slider_1.webp')] bg-cover h-[500px] relative">
      <div className="w-[500px] h-[345px] backdrop-brightness-75 text-center absolute left-20 top-20">
        <div className="text-white text-3xl font-bold pt-4 pb-8">
          ẮC QUY & LỐP CHO XẾ YÊU
        </div>
        <div className="flex justify-center mb-4">
          <button
            className={`font-bold text-xl w-[220px] text-center py-2 ${
              activeButton == 1
                ? `bg-[#00783A] text-white`
                : `bg-[#FFFFFF] text-[#474a62]`
            }`}
            onClick={() => handleButtonClick(1)}
          >
            Ắc quy
          </button>
          <button
            className={`font-bold text-xl w-[220px] text-center py-2 ${
              activeButton == 2
                ? `bg-[#00783A] text-white`
                : `bg-[#FFFFFF] text-[#474a62]`
            }`}
            onClick={() => handleButtonClick(2)}
          >
            Lốp
          </button>
        </div>
        <DropDownComponent
          data={carCompany}
          onChange={(e) => setSelectedCarCompanyId(e.target.value)}
          value={selectedCarCompanyId}
          name={"Hãng xe"}
        />
        <DropDownComponent
          data={carName}
          onChange={() => {}}
          value={carName[0]}
          name={"Tên xe"}
        />
        <button className="bg-[#00783A] text-white w-[440px] h-[40px] font-semibold">
          TÌM THEO XE
        </button>
      </div>
    </div>
  );
}
