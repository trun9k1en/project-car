"use client";

import axiosInstance from "@/axios/api-config";
import { product } from "@/axios/endpoints";
import CartCard from "@/components/cart-card";
import ProductItemsComponent from "@/components/product-items-component";

import { useCartContext } from "@/provider/CartContext";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
export default function ProductItems() {
  const params = useParams();
  const [products, setProductItems] = useState(null);
  useEffect(() => {
    if (params.id) {
      axiosInstance.get(product + "?id=" + params.id).then((response) => {
        if (response.data.data) {
          setProductItems(response.data.data);
        }
      });
    }
  }, [params.id]);
  const [open, isOpen] = useState(false);
  const { addToCart, cart } = useCartContext();
  const handleAddToCart = (product) => {
    addToCart(product);
    isOpen(true);
  };
  const onClose = () => {
    isOpen(false);
  };
  return (
    <div className="flex">
      {products ? (
        <ProductItemsComponent
          images={products.images}
          name={products.name}
          price={products.price}
          originalPrice={products["original-price"]}
          rate={products.rate}
          promotion={products.promotion}
          description={products.description}
          onClick={() => handleAddToCart(products)}
        />
      ) : null}
      <CartCard open={open} cart= {cart}  onClose={onClose}/>
    </div>
  );
}
