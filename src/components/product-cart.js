"use client";

import { CartContext } from "@/provider/CartContext";
import numeral from "numeral";
import { useContext, useState } from "react";

export default function ProductCart(item) {
  const { img, name, countProduct, price } = item;
  const [count, setCount] = useState(1);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      {countProduct == 0 ? (
        <div>
          <div className="text-[#39b54a] text-2xl">
            Giỏ hàng của bạn <div className="text-[#8d90a6]">(0 sản phẩm)</div>
          </div>
          <div>
            Quay lại <button className="text-[#39b54a]">cửa hàng</button>để tiếp
            tục mua sắm
          </div>
        </div>
      ) : (
        <div>
          <div className="flex">
            <div className="text-base font-bold">Sản phẩm</div>
            <div className="text-base font-bold">Giá</div>
            <div className="text-base font-bold">Số lượng</div>
            <div className="text-base font-bold">Thành tiền</div>
          </div>
          <div className="flex">
            <img src={img} className="w-[98px] h-[98px]" />
            <div>
              <div className="text-base text-[#474a62]">{name}</div>
              <div className="text-sm text-[#39b54a]">Xóa sản phẩm</div>
            </div>
            <div className="text-[#474a62] text-sm">
              {numeral(price).format("0,0").replace(/,/g, ".") + "đ"}
            </div>
            <button className="flex border border=[#eaebf3] justify-around items-center">
              <div
                className="text-sm font-extrabold text-[##8d90a6] p-2"
                onClick={decrease}
              >
                -
              </div>
              <div>{count}</div>
              <div
                className="text-sm font-extrabold text-[##8d90a6] p-2"
                onClick={increase}
              >
                +
              </div>
            </button>
            <div className="text-[#474a62] text-sm">
              {numeral(price * countProduct)
                .format("0,0")
                .replace(/,/g, ".") + "đ"}
            </div>
          </div>
          <div className="bg-[#f5f6fa]">
            <div className="flex p-2 border-b">
              <div>Tạm tính:</div>
              <div>
                {numeral(price * countProduct)
                  .format("0,0")
                  .replace(/,/g, ".") + "đ"}
              </div>
            </div>
            <div className="flex p-2 border-b">
              <div className="text-[#474a62] font-medium">Thành tiền:</div>
              <div className="text-lg text-[#39b54a] font-bold">
                {numeral(price * countProduct)
                  .format("0,0")
                  .replace(/,/g, ".") + "đ"}
              </div>
            </div>
            <button className="bg-[#39b54a] text-white rounded-md p-2">
              Tiến hành thanh toán
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
