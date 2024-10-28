"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const array = [
  {
    name: "TRANG CHỦ",
    hrl: "/san-pham",
  },
  {
    name: "ẮC QUY",
    hrl: "/ac-quy",
  },
  {
    name: "LỐP",
    hrl: "/lop-xe",
  },
  {
    name: "Phuộc giảm sóc",
    hrl: "/phuoc-giam-soc",
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
    <div className="flex w-full mt-4 justify-center bg-blue-700">
      {array.map((m, index) => (
        <Link
          key={index}
          onClick={() => {
            // route.push("/lop-xe");
            setActiveText(index);
          } }
          className={`font-semibold text-base p-4 ${activeText === index ? `text-[#232431FF]` : `text-white`}`} href={m.hrl}>
          {m.name}
        </Link>
      ))}
    </div>
  );
}
