import React from 'react';
import { Dialog } from '@mui/material';


const CartCard = ({ open, onClose,cart }) => {
    
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="p-4">
        <div>Bạn đã thêm {cart[0]?.name} và giỏ hàng</div>
        <div className='h-[400px]'>{cart.map((m) =>(
            <div className='flex flex-row'>
                <div>{m?.name}</div>
                <div>{m?.price}</div>
                <div>{m?.count}</div>
                <div>{m?.price * m?.count}</div>
            </div>
        ))}</div>
        <div>Tổng tiền: </div>
        <div><div>Tiếp tục mua hàng</div> 
        <div>Tiến hành thanh toán</div> </div>

      </div>
    </Dialog>
  );
};

export default CartCard;