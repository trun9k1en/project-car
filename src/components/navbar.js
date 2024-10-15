"use client";

import { useState } from "react";

const array = [
  {
    name: "TRANG CHỦ",
    hrl: "/",
  },
  {
    name: "ẮC QUY",
    hrl: "/",
  },
  {
    name: "LỐP",
    hrl: "/",
  },
  {
    name: "PHỤ TÙNG KHÁC",
    hrl: "/",
  },
  {
    name: "PHỤ KIỆN",
    hrl: "/",
  },
  {
    name: "DỊCH VỤ",
    hrl: "/",
  },
  {
    name: "BLOG",
    hrl: "/",
  },
  {
    name: "BẢO HÀNH",
    hrl: "/",
  },
  {
    name: "KẾT NỐI VỚI CHÚNG TÔI",
    hrl: "/",
  },
];

export default function Navbar() {
  const [activeText, setActiveText] = useState(0);
  return (
    <div className="flex w-full mt-4 justify-center bg-gradient-to-r from-[#006600] from-10% via-[#03BE1CFF] via-50% to-[#006600] to-90% ...">
      {array.map((m, index) => (
        <button
          key={index}
          onClick={() => setActiveText(index)}
          className={`font-semibold text-base p-4 ${
            activeText === index ? `text-[#232431FF]` : `text-white`
          }`}
        >
          {m.name}
        </button>
      ))}
    </div>
  );
}
