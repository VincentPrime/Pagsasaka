"use client"
import { Card, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { useEffect,useState } from "react"

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
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-30 p-5 flex justify-between items-center ${
                scrolled ? "bg-white/80 shadow-md " : "bg-transparent text-white"
                }`}
               >
                        <div className="flex gap-4">
                            <Image src="/Plant.png" alt="plant" width={70} height={70} />
                            <span className="text-center">
                              <h1 className="font-bold text-3xl">PAGSASAKA</h1>
                              <h1>Farmers & Consumers</h1>
                            </span>
                        </div>
        
        
                          <div >
                            <ul className="flex gap-8 font-bold">
                                <li><a href="/Landingpage">Home</a></li>
                                <li><a href="/Aboutus">About us</a></li>
                                <li><a href="">Contact us</a></li>
                            </ul>
                          </div>
                    </nav>


            <main className=" w-full">
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
          <div className="absolute inset-0 z-20 flex items-center justify-center text-white text-center w-full">
            <Card className="bg-[#608c54] text-white w-3xl p-4 border-none">
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




            <div className="flex justify-center h-[700px]">
                <div className="w-full max-w-4xl  border relative m-10">
                    <Image
                    src="/meetF-BhF_1DD8.png"
                    alt="asd"
                    fill
                    className="object-cover"
                    />
                </div>
            </div>
        </>
    )
}