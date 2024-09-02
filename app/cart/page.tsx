'use client'
import React from 'react';
import { useCart } from '../context/CartContext'; // Adjust import path as needed

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-orange-600 text-white p-4 rounded-md shadow-md mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <span className="bg-red-500 text-white text-xs rounded-full px-3 py-1">
            {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
          </span>
        </div>
      </header>

      <main>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4 mb-6">
              {cart.map(item => (
                <li key={item.id} className="border rounded-lg p-4 shadow-md bg-white flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-lg font-semibold">Rs {item.price.toFixed(2)}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total:</span>
              <span>Rs {totalPrice.toFixed(2)}</span>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Cart;
