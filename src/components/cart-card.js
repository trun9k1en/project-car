import React, { useEffect, useState } from "react";
import { Dialog } from "@mui/material";
import ProductTable from "./table-product";
import Link from "next/link";

const CartCard = ({ open, onClose, cart }) => {
    const [total,setTotal] = useState(0)
    useEffect(() =>{
        if(cart){
            let initialValue = 0;
            console.log("cart",cart)
            const sumWithInitial =  cart.reduce(
              (accumulator, currentValue) =>accumulator + currentValue.count * currentValue.price,
              initialValue
            );
            console.log("sumWithInitial",sumWithInitial)
            setTotal(sumWithInitial)
        }
    },[cart])
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          width: "1000px", // Kích thước tùy chỉnh
          maxWidth: "80%", // Chiều rộng tối đa
        },
      }}
    >
      <div className="p-4 w-[1000px] flex flex-col justify-center items-center">
        <h2 className="text-lg font-bold ">Giỏ hàng</h2>
        <div className="font-semibold text-green-600">
          {">>>>>"}Thêm {cart[0]?.name} và giỏ hàng {"<<<<<"}
        </div>
        <div></div>
        <ProductTable products={cart} />
        <div className="text-right text-red-600 font-medium flex flex-row items-center justify-end w-full">Tổng tiền: <div className="font-bold text-lg">{total.toLocaleString()}</div> VNĐ</div>
        <div className="flex flex-row justify-between w-full mt-4">
          <Link href={"/san-pham"} className="text-green-500 ">
            Tiếp tục mua hàng{">>>"}
          </Link>
          <div className="px-2 py-2 border rounded bg-green-500 text-white">
            Tiến hành thanh toán
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default CartCard;
