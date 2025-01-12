import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Food {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  ingredients: string[];
  price: number | null;
  priceDiscount: number | null;
  rating: number;
  totalLikes: number;
}

const Product = () => {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    fetch('https://api-bootcamp.do.dibimbing.id/api/v1/foods', {
      headers: {
        apiKey: 'w05KkI9AWhKxzvPFtXotUva-',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJmZGQwYWQ0Ny02M2I0LTQ0YjYtODY1Yi1mODk0YTliZWExMTgiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3Mjk5NDMxNzB9.IAZ5b5j_QSDALBK8KiMyoNAbpRgXi7Uol5i-ra67Xoc',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(JSON.stringify(json.data, null, 2)); // Log the foods array
        setFoods(json.data); // Update state with foods
      })
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  return (
    <div className="bg-[#F7F7F7]">
      <div className="container font-[Poppins] mx-auto flex flex-col items-center py-20">
        <div className="mb-3 text-center">
          <h1 className="text-2xl my-3 font-bold">Menu List</h1>
          <p className="text-sm text-[#6A6A6A]">
            Welcome to our menu, where each dish is crafted with care and
            passion. Discover a delightful array of flavors, from savory
            appetizers to indulgent desserts. Our selection features fresh,
            high-quality ingredients that are sure to satisfy every palate. Join
            us on this culinary journey and find your new favorite meal!
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {foods.map((food) => (
            <div
              key={food.id}
              className="flex flex-col gap-2 bg-white rounded-lg shadow-lg p-4"
            >
              <img
                src={food.imageUrl}
                className="w-full aspect-video object-cover hover:scale-105 transition-all duration-300"
              />

              <div className="flex justify-center items-center gap-2">
                <div className="w-1/2">
                  <p className="font-semibold text-lg">{food.name}</p>
                  <span className="text-sm text-[#6A6A6A]">
                    rating: {food.rating}
                  </span>
                </div>
                <div className="w-1/2">
                  <Link href={`/${food.id}`}>
                    <button
                      className="bg-[#FF69B4] transition-all duration-300 hover:bg-[#FF99CC] text-white font-medium rounded-xl px-4 py-2"
                    >
                      Explore This Dish!
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

