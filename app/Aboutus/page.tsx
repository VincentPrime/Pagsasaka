"use client"
import { Card, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { useEffect,useState } from "react"
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Ellipsis } from "lucide-react";
export default function Aboutus(){

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
        <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 sm:px-10 md:px-20 lg:px-70 p-5 flex justify-between items-center ${
          scrolled ? "bg-white/80 shadow-md text-black" : "bg-transparent text-white"
        }`}
      >
        {/* Logo */}
        <div className="flex gap-4 items-center">
          <Image src="/Plant.png" alt="plant" width={50} height={50} />
          <span className="leading-tight">
            <h1 className="font-bold text-xl sm:text-3xl">PAGSASAKA</h1>
            <p className="text-sm">Farmers & Consumers</p>
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-8 font-bold">
          <li><a href="/Landingpage" className="hover:text-[#03a336] ">Home</a></li>
          <li><a href="/Aboutus" className="text-[#32ed6d] hover:text-[#03a336]">About us</a></li>
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



            <main className="w-full mb-40">
                  
                  {/* Background Image */}
                  
                 <div className="relative w-full h-[80vh]">
                    <Image
                      src="/Farmers.jpg"
                      alt="nagtatanim"
                      fill
                      className="object-cover z-0"
                      priority
                    />
              <div className="absolute inset-0 bg-black/60 backdrop-brightness-90 z-10"></div>

                  {/* Text Content */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center text-white text-center w-full p-4 ">
                      <Card className="bg-[#608c54] text-white w-full max-w-xl p-4 border-none">
                        <h1 className="text-4xl font-extrabold">About us</h1>
                        <h1 className="font-bold">
                          Pagsasaka connects farmers directly with consumers, ensuring fair pricing
                          and access to fresh produce, livestock, and farming tools. Our platform
                          supports sustainable farming while empowering communities to make
                          informed food choices and fostering a thriving agricultural future.
                        </h1>
                      </Card>
                    </div>
                  </div>
                        
            </main>

          <div className="flex justify-center h-[500px] sm:h-[700px] mb-20 p-4">
            <div className="w-full max-w-4xl relative group overflow-hidden rounded-2xl">
              {/* Image */}
              <Image
                src="/happyfarmer.jpeg"
                alt="Happy Farmer"
                fill
                className="object-cover rounded-2xl"
              />
                  <div className="absolute bottom-0 w-full bg-opacity-50 text-white p-4 bg-[#608c54]">
                      <p className="text-lg font-semibold">
                        Meet our farmers, the champions behind the exceptional
                        food we cherish. Their dedication empowers us to thrive
                        as a community, and we are proud to support their
                        commitment to quality and sustainability <a href="#"><Ellipsis className="animate-bounce"/></a>
                       
                      </p>
                  </div>
            </div>
          </div>


        </>
    )
}