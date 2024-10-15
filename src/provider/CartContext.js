import React, { createContext, useState } from 'react';

// Tạo Context với giá trị mặc định
export const CartContext = createContext({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {}
});

// Tạo Provider
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};