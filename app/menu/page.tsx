'use client'
import LoadingSpinner from "@/components/LoadingSpinner";
import MenuItemCard from "@/components/MenuItemCard";
import { menuItems } from "@/data";
import { MenuItem } from "@/interfaces/menuItem";
import { useRouter } from "@/node_modules/next/navigation";
import { useEffect, useState } from "react";

const Menu = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter()

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setItems(menuItems);
      } catch (error) {
        console.error('Error fetching menu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  const handleOnClick = (id: number) => {
    router.push(`/menu/${id}`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-orange-600 text-white p-4 rounded-md shadow-md mb-6">
        <h1 className="text-2xl font-bold">Menu</h1>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.id} onClick={() => handleOnClick(item.id)} className='cursor-pointer'>
            <MenuItemCard item={item} />
          </div>
        ))}
      </main>

    </div>
  );
};


export default Menu;
