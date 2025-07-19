"use client"

import { Button } from "@/components/ui/button"
import { Fullscreen } from "lucide-react"
import Image from "next/image"
import { useEffect,useState } from "react"
export default function Landingpage() {

  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div>
        <nav 
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-30 p-5 flex justify-between items-center ${
          scrolled ? "bg-white/80 shadow-md " : "bg-transparent text-white"
          }`}
        >
          <div className="flex items-center gap-4">
            <Image src="/Plant.png" alt="plant" width={70} height={70} />
            <span className="text-center">
              <h1 className="font-bold text-3xl">PAGSASAKA</h1>
              <h1>Farmers & Consumers</h1>
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="relative w-full h-svh">
          {/* Background Image */}
          <Image
            src="/MAGSASAKA.jpg"
            alt="nagtatanim"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 backdrop-brightness-75 z-10"></div>

          {/* Optional content on top of image */}
          <div className="absolute inset-0 z-20 mt-50 text-white text-center">
            <h1 className="text-7xl font-extrabold">
                Food's Journey Connecting Farmers andConsumers for a Healthier Future
            </h1>
            <h1>
                We bridge the gap between those who grow our
                food and those who consume it, creating a healthier,
                more connected food system for everyone.
            </h1>

            <a href="/loginform"><Button className="mt-2 cursor-pointer">JOIN NOW!</Button></a>
          </div>
        </main>
      </div>
    </>
  )
}
