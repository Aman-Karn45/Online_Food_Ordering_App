'use client'
import LoadingSpinner from "@/components/LoadingSpinner";
import MenuItemCard from "@/components/MenuItemCard";
import { MenuItem } from "@/interfaces/menuItem";
import { log } from "console";
import { useEffect, useState } from "react";

const Menu = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Pizza',
      description: 'Cheesy and delicious',
      price: 350,
      image: '/Pizza.jpeg'
    },
    {
      id: 2,
      name: 'Burger',
      description: 'Juicy and flavorful',
      price: 499,
      image: '/Burger.jpeg'
    },
    {
      id: 3,
      name: 'Pasta',
      description: 'Rich and creamy',
      price: 199,
      image: '/Pastta.webp'
    },
    {
      id: 4,
      name: 'Gulab Jamun',
      description: 'Fresh and healthy',
      price: 199,
      image: '/gulab-jamun-featured.jpg'
    },
    {
      id: 5,
      name: 'Biryani',
      description: 'Fresh and exotic',
      price: 689,
      image: '/Biryani.jpeg'
    },
    {
      id: 6,
      name: 'Samosa',
      description: 'Spicy and crispy',
      price: 80,
      image: '/Samosa.jpeg'
    },
    {
      id: 7,
      name: 'Spring Rolls',
      description: 'Crispy and savory',
      price: 150,
      image: '/Spring roll.jpeg'
    },
    {
      id: 8,
      name: 'Tacos',
      description: 'Spicy and tangy',
      price: 220,
      image: '/Tacos.jpeg'
    },
    {
      id: 9,
      name: 'Chole Bhature',
      description: 'Hearty and filling',
      price: 270,
      image: '/CholeBhature.jpeg'
    },
    {
      id: 10,
      name: 'Chicken Tikka',
      description: 'Tender and flavorful',
      price: 350,
      image: '/ChickenTikka.jpg'
    },
    {
      id: 11,
      name: 'Caesar Salad',
      description: 'Fresh and crisp',
      price: 180,
      image: '/CaesarSalad.jpeg'
    },
    {
      id: 12,
      name: 'Momos',
      description: 'Steamed and spicy',
      price: 120,
      image: '/Momos.jpeg'
    },
    {
      id: 13,
      name: 'Butter Chicken',
      description: 'Rich and creamy',
      price: 399,
      image: '/ButterChicken.jpeg'
    },
    {
      id: 14,
      name: 'Noodles',
      description: 'Sautéed and tasty',
      price: 210,
      image: '/Noodles.jpeg'
    },
    {
      id: 15,
      name: 'Paneer Tikka',
      description: 'Spicy and grilled',
      price: 250,
      image: '/PaneerTikka.jpeg'
    }
  ];
  

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
    return <LoadingSpinner/>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-orange-600 text-white p-4 rounded-md shadow-md mb-6">
        <h1 className="text-2xl font-bold">Menu</h1>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
};


export default Menu;
