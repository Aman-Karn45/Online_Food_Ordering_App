'use client'
import { MenuItem } from "@/interfaces/menuItem";
import { createContext, ReactNode, useContext, useState } from "react";

interface CartContextType {
    cart: MenuItem[];
    addToCart: (item: MenuItem) => void;
    removeFromCart: (id: number) => void;
    getTotalItems: () => number;
  }

const CartContext = createContext<CartContextType | undefined>(undefined)


export const CartProvider: React.FC<{children:ReactNode}>=({children})=>{
    const [cart, setCart] = useState<MenuItem[]>([]);

    const addToCart =(item:MenuItem)=>{
        setCart(prevCart=>[...prevCart,item])
    }
    const removeFromCart = (id: number) => {
      setCart(prevCart => {
        const updatedCart = [...prevCart];
        console.log("updatedCart",updatedCart);
        const index = updatedCart.findIndex(item => item.id === id);
        console.log("id==>",id,index);
        if (index !== -1) {
          updatedCart.splice(index, 1);
        }
    
        return updatedCart;
      });
    };
    
    const getTotalItems = () => cart.length;
  return(
    <CartContext.Provider value = {{cart,addToCart,removeFromCart,getTotalItems}}>
        {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  };
  