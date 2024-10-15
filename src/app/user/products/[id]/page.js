"use client";

import axiosInstance from "@/axios/api-config";
import { product } from "@/axios/endpoints";
import ProductItemsComponent from "@/components/product-items-component";
import { CartContext } from "@/provider/CartContext";
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
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (product) => {
    addToCart(product);
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
          onClick={() => handleAddToCart(product)}
        />
      ) : null}
    </div>
  );
}
