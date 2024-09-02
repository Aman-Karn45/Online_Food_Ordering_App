'use client'
import { menuItems } from "@/data";
import Image from "@/node_modules/next/image";
import { usePathname, useRouter } from "@/node_modules/next/navigation";


const Detail = () => {
  const router = useRouter();
  const pathname = usePathname();
  const slug = pathname?.split('/');
  const id = Number(slug.pop());

  const item = menuItems.find((menuItem) => menuItem.id === id);

  if (!item) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-800">Item not found</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-md w-full">
        <Image
          src={item.image}
          alt={item.name}
          width={500}
          height={300}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
          <p className="text-gray-600 mt-2">{item.description}</p>
          <div className="mt-4">
            <span className="text-xl font-semibold text-orange-600">
              ₹{item.price}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => router.back()}
        className="mt-6 bg-orange-500 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300"
      >
        Back
      </button>
    </div>
  );
}

export default Detail;
