'use client';

import { useCart } from "@/app/context/CartContext";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { usePathname } from "@/node_modules/next/navigation";


const NavbarComponent = () => {
  const pathname = usePathname();
  const { getTotalItems } = useCart();

  const totalItems = getTotalItems();

  console.log('Total items in cart:', totalItems);

  const menuItems = [
    { name: 'Menu', path: '/menu' },
    { name: 'Order', path: '/order' },
    { name: 'Cart', path: '/cart' },
  ];
  if (pathname === '/') {
    return null;
  }
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-5 items-center">
          <div></div>
          <div className="col-span-3 flex w-full items-center justify-between">
            <Link href="/">
              <Image alt="logo image" src={'/logo.jpeg'} width={80} height={200} />
            </Link>

            <nav className="flex justify-around gap-8">
              {menuItems.map((item) => (
                <Link key={item.name} href={item.path}>
                  <span
                    className={`${pathname === item.path ? 'text-orange-500' : 'text-gray-700'
                      } relative`}
                  >
                    {item.name}
                    {item.name === 'Cart' && totalItems >= 0 && (
                      <span className="absolute -top-4 -right-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;
