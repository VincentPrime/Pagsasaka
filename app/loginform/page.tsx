"use client"
import { LoginForm } from "@/components/login/signupcomponents/Logincomp"
import Image from "next/image"
import { useEffect,useState } from "react"

export default function Loginform(){

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
    return(
       <div className="w-full">
            <nav
             className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-30 p-5 flex justify-between items-center ${
                scrolled ? "bg-white/80 shadow-md " : "bg-transparent text-white"
                }`}
            >
                  <div className="flex  gap-4">
                    <Image src="/Plant.png" alt="plant" width={70} height={70} />
                    <span className="text-center">
                      <h1 className="font-bold text-3xl">PAGSASAKA</h1>
                      <h1>Farmers & Consumers</h1>
                    </span>
                  </div>


                  <div className="">
                    <ul className="flex gap-8 font-bold">
                        <li><a href="/Landingpage">Home</a></li>
                        <li><a href="/Aboutus">About us</a></li>
                        <li><a href="">Contact us</a></li>
                    </ul>
                  </div>
            </nav>


        <main className="relative w-full h-svh">
          {/* Background Image */}
          <Image
            src="/Farmerhappy.jpg"
            alt="nagtatanim"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 backdrop-brightness-75 z-10"></div>

          {/* Optional content on top of image */}
          <div className="absolute inset-0 z-20 flex items-center justify-center text-white text-center w-full">
            
            <LoginForm/>
          
          </div>
        </main>
       </div>
    )
}