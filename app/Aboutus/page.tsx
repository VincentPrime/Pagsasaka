"use client"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { useEffect,useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Quote,Menu,Ellipsis,MapPinned,Phone,Mail} from "lucide-react";
import {Tooltip, TooltipTrigger, TooltipContent, TooltipProvider} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"


const cardContents = [
  {
    title: <Quote/>,
    description: 'Malaki ang naging tulong ng Pagsasaka sa aming pamilya.Ngayon, hindi na kami nag-aalala sa kung saan ibebenta ang aming mga produkto. Ang mga mamimili ay mas madali nang maabot, at kami ay nabibigyan ng mas magandang oportunidad sa negosyo.',
    extra: '-Pedro Reyes, Magsasaka',
  },
  {
    title: <Quote/>,
    description: 'Bilang isang mamimili, labis akong natutuwa sa Pagsasaka. Ang mga sariwang produkto mula sa mga lokal na mag sasaka ay abot-kaya at mataas ang kalidad. Sa pamamagitan ng Pag sasaka, Nakakaktulong ako sa mga lokal na komunidad',
    extra: '-Maria Santos, Mamimili',
  },
  {
    title: <Quote/>,
    description: 'Sa tulong ng Pagsasaka, mas madali na ang pagbebenta ng aming mga ani. Nakakabenta kami ng mas mabilis at mas mataas ang kita. Salamat sa platform na ito na nag0uugnay sa amin sa mga mamimili',
    extra: '-Juan, Dela Cruz, Magsasaka',
  }
]

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


  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cardContents.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const { title, description, extra } = cardContents[index]






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
            
              <div className="flex justify-center px-4">
                <div className="w-full max-w-4xl overflow-hidden rounded-2xl">
                  <div className="relative h-[500px] sm:h-[700px] rounded-t-2xl overflow-hidden">
                    <Image
                      src="/happyfarmer.jpeg"
                      alt="Happy Farmer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-[#608c54] text-white p-4 rounded-b-2xl">
                    <p className="text-lg font-semibold">
                      Meet our farmers, the champions behind the exceptional food we cherish.
                      Their dedication empowers us to thrive as a community, and we are proud
                      to support their commitment to quality and sustainability.
                      <a href="#" className="flex justify-end items-center gap-1 mt-2">
                        Read more
                        <Ellipsis className="animate-bounce" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

        <Card className="rounded-none bg-[#608c54] text-white mt-40">
              <CardContent className="flex flex-col md:flex-row gap-7 p-4">
                  <Image
                    src="/farming.png"
                    alt="Farming"
                    width={800}
                    height={800}
                    className="w-full h-auto object-contain"
                  />
                  <p className="font-bold text-2xl">
                      Our work is deeply connected to care and community. We prioritize
                      personal relationships while recognizing the links between the food we consume,
                      the future we aspire to create for our children, and the role of biodiversity in
                      shaping our identity and sovereignty as Filipinos.
                  </p>
              </CardContent>
        </Card>




       <Card className="min-h-screen border-none rounded-none  justify-center items-center">
          <CardContent className="flex flex-col md:flex-row gap-6 md:gap-20 items-center w-full max-w-6xl">
            <Card className="px-5 py-10 bg-[#608c54] text-white font-medium text-2xl w-full md:w-60 flex justify-center">
              <p>
                What our Clients Say about Pagsasaka
              </p>
            </Card>
            <Card className="w-full md:w-[800px] h-100 bg-[#608c54] text-white font-medium text-2xl p-5 flex flex-col justify-center gap-2" >
            <p className="text-lg font-bold">{title}</p>
            <p>{description}</p>
            <p className="text-sm text-white">{extra}</p>
            </Card>
          </CardContent>
       </Card>


      <Card className="min-h-screen border rounded-none">
          <CardHeader className="text-center">
            <p className="font-medium text-5xl">
              Introducing the leader steering the
              vision that fuels our mission.
            </p>
          <CardDescription className="font-bold text-2xl text-black">
            We are a diverse team with roots in various farming communities, each contributing unique perspectives, experiences,
            and expertise. This rich blend of backgrounds allows us to bring innovative solutions that bridge the gap between
            farmers and consumers, creating a more efficient and sustainable agricultural marketplace.
          </CardDescription>
          </CardHeader>
      </Card>





      <Card className="bg-[#00721e] w-full rounded-none border-none text-white">
        <div className="flex flex-col md:flex-row justify-evenly">
          <CardContent>
            <div className="flex gap-4 items-center">
              <Image src="/Plant.png" alt="plant" width={50} height={50} />
              <span className="leading-tight">
                <h1 className="font-bold text-xl sm:text-3xl">PAGSASAKA</h1>
                <p className="text-sm">Farmers & Consumers</p>
              </span>
            </div>
            <p className="mt-2">Pagsasaka connects farmers with consumers for buying and selling fresh, local produce, supporting sustainable agriculture.</p>
           
            <div className="flex gap-2 mt-5">
             <Tooltip>
              <TooltipTrigger asChild>
                  <Image
                    src="/facebook.png"
                    alt="facebook"
                    width={20}
                    height={20}
                    className="bg-white"
                    />
              </TooltipTrigger>
              <TooltipContent>
                <p>Face.oms</p>
              </TooltipContent>
             </Tooltip>
               <Tooltip>
              <TooltipTrigger asChild>
                  <Image
                    src="/instagram.png"
                    alt="facebook"
                    width={20}
                    height={20}
                    className="bg-white"
                    />
              </TooltipTrigger>
              <TooltipContent>
                <p>insta.oms</p>
              </TooltipContent>
             </Tooltip>
            </div>
          </CardContent>

          <CardContent>
          <p className="font-bold text-2xl mb-2">Quick Links</p> 
          <ul>
            <li><a href="">About us</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Meet Our Farmers</a></li>
          </ul> 
          </CardContent>

          <CardContent >
          <p className="font-bold text-2xl mb-2">Contact Us</p>
          <p>need Support?</p>
          <ul className="flex flex-col gap-2">
              <li className="flex gap-2"><MapPinned/>619 West side, Los Angeles, Pampanga</li>
              <li className="flex gap-2"><Phone/>(+63 912 345 6789)</li>
              <li className="flex gap-2"><Mail/>Pagsasaka@gmail.com</li>
          </ul>
          </CardContent>
        </div>



      </Card>
        </>
    )
}


