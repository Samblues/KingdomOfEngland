"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 5000); // Changed to 10 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      setTimeout(() => {
        setShowContent(true);
      }, 50); // Adjust duration to match CSS transition duration
    }
  }, [fadeOut]);

  return (
    <div className="h-screen relative">
      <div
        className={`absolute inset-0 bg-cover bg-center ${
          fadeOut ? "fadeOut" : ""
        }`}
        style={{ backgroundImage: `url('/chariot.gif')`, zIndex: -1 }} // Set z-index to -1
      >
        {/* Grey overlay */}
        <div className="absolute inset-0 opacity-50"></div>

        {/* Grey overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-50 z-10"></div>

        {/* Content */}
        <div
          className={`relative z-20 text-white flex flex-col items-center justify-center h-full transition-opacity ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <h1 className="text-5xl font-bold mb-8 relative">
            <span className="coming-soon">Welcome to... </span>
            The Kingdom of England
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
                  height={500} // Adjust height as needed
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
      {showContent && (
        <div className="h-screen flex flex-col absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
          {" "}
          {/* Ensure content is rendered above the video */}
          <nav className="bg-black text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/CoatOfArms.png"
                alt="The Kingdom Of England Logo"
                width={50}
                height={50}
                className="mr-2"
              />
              <span className="font-bold">Kingdom of England</span>
            </div>
            <div className="flex space-x-4">
              <button
                className="text-white"
                onClick={() => router.push("/home")}
              >
                Home
              </button>
              <button
                className="text-white"
                onClick={() => router.push("/gallery")}
              >
                Gallery
              </button>
              <button
                className="text-white"
                onClick={() => router.push("/guides")}
              >
                Guides
              </button>
              <button
                className="text-white"
                onClick={() => router.push("/discord")}
              >
                Discord
              </button>
            </div>
          </nav>
          <div className="flex flex-row justify-center items-center h-full">
            <div className="w-1/2 flex justify-center">
              <Image
                src="/discord1.png"
                alt="Left Hand Side Image"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center">
              <div>
                <h1 className="text-4xl font-bold mb-4">Join Our Discord!</h1>
                <p className="mb-4">
                  Simply fill in a quick form and we will be right with you!
                </p>
                <a
                  href="https://discord.gg/5QAYYqHw"
                  target="https://discord.gg/5QAYYqHw"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-red-600 transition duration-300"
                >
                  Join Us!
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
