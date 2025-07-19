"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 sm:px-10 md:px-20 lg:px-70 p-5 flex justify-between items-center ${
          scrolled ? "bg-white/80 shadow-md text-black" : "bg-transparent text-white"
        }`}
      >
        {/* Logo */}
        <div className="flex gap-4 items-center">
          <a href="/Landingpage" className="cursor-pointer" ><Image src="/Plant.png" alt="plant" width={50} height={50}/></a>
          <span className="leading-tight">
            <h1 className="font-bold text-xl sm:text-3xl">PAGSASAKA</h1>
            <p className="text-sm">Farmers & Consumers</p>
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-8 font-bold">
          <li><a href="/Landingpage" className=" text-[#32ed6d] hover:text-[#03a336] ">Home</a></li>
          <li><a href="/Aboutus" className="hover:text-[#03a336]">About us</a></li>
        </ul>

        {/* Mobile Sheet Menu */}
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Open Menu">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white text-black w-3/4">
              <div className="flex flex-col space-y-6 mt-10 font-semibold text-lg ml-3">
                <a href="/Landingpage">Home</a>
                <a href="/Aboutus">About us</a>
              </div>
            </SheetContent>
          </Sheet>
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
          <div className="absolute inset-0 z-20 m-70 text-white text-center">
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
