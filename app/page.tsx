import Head from '@/node_modules/next/head';
import Link from '@/node_modules/next/link';

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gray-100">
      <Head>
        <title>Foodie - Online Food Ordering</title>
        <meta name="description" content="Order your favorite food online with Foodie." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className="relative overflow-hidden bg-orange-500">
          <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
            <div className="relative text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Delicious Food Delivered to Your Doorstep
              </h1>
              <p className="mt-4 text-lg text-white">
                Choose from a wide variety of dishes and enjoy hassle-free delivery.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/menu"
                  className="inline-block bg-white text-yellow-500 py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center">Why Choose Us?</h2>
            <div className="mt-12 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              <div className="relative flex flex-col gap-6 sm:flex-row sm:gap-8">
                <div className="flex-shrink-0">
                  <svg
                    className="h-12 w-12 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 6h18M3 14h18M3 18h18" />
                  </svg>
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold text-gray-900">Variety of Dishes</p>
                  <p className="mt-2 text-base text-gray-600">
                    From appetizers to desserts, we offer a wide range of dishes to satisfy all tastes.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col gap-6 sm:flex-row sm:gap-8">
                <div className="flex-shrink-0">
                  <svg
                    className="h-12 w-12 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15h16M4 19h16M4 7h16M4 11h16" />
                  </svg>
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold text-gray-900">Fast Delivery</p>
                  <p className="mt-2 text-base text-gray-600">
                    Enjoy fast and reliable delivery right to your door with real-time tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="order-now" className="bg-orange-500 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Order?</h2>
            <p className="mt-4 text-lg text-white">
              Click below to start your food journey with us!
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-white text-yellow-500 py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
              >
                Start Ordering
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 py-8 text-center text-white">
        <p>&copy; 2024 Aman. All rights reserved.</p>
      </footer>
    </div>
  );
}
