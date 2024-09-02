
import { useCart } from '@/app/context/CartContext';
import { MenuItem } from '@/interfaces/menuItem';
import Image from '@/node_modules/next/image';
import { useState } from 'react';
import Toast from './Toast';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { cart, addToCart } = useCart()
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = () => {
    setToastMessage('Added to Cart!');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = () => {
    addToCart(item);
    showToast();
  };


  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <Image src={item.image} alt={item.name} width={200} height={500} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{item.name}</h2>
        <p className="text-gray-600 mb-2">{item.description}</p>
        <p className="text-lg font-semibold">Rs {item.price.toFixed(2)}</p>
        <button
          className="bg-orange-500 text-white py-2 px-4 rounded mt-2"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
      {toastMessage && (
        <Toast
          message={toastMessage}
          type="success"
          duration={3000}
        />
      )}
    </div>
  );
};

export default MenuItemCard;
