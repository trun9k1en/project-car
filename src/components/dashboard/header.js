import { useState } from "react";
import ItemHeader from "./item";

export default function HeaderDashboard() {
  

  return (
    <div className="flex w-full">
      <ItemHeader title ={"Kho"} value={30} type={0}/>
      <ItemHeader title ={"Đơn đặt hàng"} value={30} type={1}/>
      <ItemHeader title ={"Đăng kí dịch vụ"} value={30} type={2}/>
    </div>
  );
}
