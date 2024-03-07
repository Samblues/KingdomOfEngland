import React from "react";
import Image from "next/image";

interface HomePageProps {}

const carouselItems = [
  {
    imageUrl: "/charge.png",
    title: "Charge with us into battle!",
  },
  {
    imageUrl: "/sandy.png",
    title: "Join the fun",
  },
  {
    imageUrl: "/mounted.png",
    title: "Organised Gaming!",
  },
  // Add more items as needed
];

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/chariot.gif')` }}
    >
      {/* Grey overlay */}
      <div className="absolute inset-0 opacity-50"></div>

      {/* Grey overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-white flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold mb-8 relative">
          <span className="coming-soon">Coming Soon... </span>
          Kingdom of England
        </h1>
        <Image
          src="/CoatOfArms.png" // Replace with your logo path
          alt="The Kingdom Of England Logo"
          width={200} // Adjust width and height as needed
          height={200} // Adjust width and height as needed
          className="rounded-full object-cover mb-8"
        />
        <p className="text-white text-center mt-8 text-xl">
          Welcome to the Kingdom Of England's New Website!
        </p>
        <div className="carousel flex overflow-x-auto w-full snap-x snap-mandatory gap-8 px-8 mt-8">
          {carouselItems.map((item, index) => (
            <div
              key={item.imageUrl}
              className="carousel-item snap-item w-full flex flex-col items-center"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={500} // Adjust width as needed
                height={300} // Adjust height as needed
                className="object-cover rounded-lg shadow-md mb-4 w-full h-64"
              />
              <h3
                className={`text-center font-bold text-xl ${
                  index % 2 === 0 ? "text-red-600" : "text-blue-600"
                }`}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
