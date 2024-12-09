import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { BsCreditCard } from "react-icons/bs";
import { PiPlantFill } from "react-icons/pi";

const BrandDiff = () => {
  return (
    <div className="flex  flex-col items-center justify-center">
        <div className="mt-16"><h2 className="text-4xl font-semibold text-blue-950">What makes our brand different</h2></div>

        <div className="flex gap-x-10 mt-14 mb-16">

            <div className="w-[20vw] h-[300px] bg-customWhite flex items-center justify-center" >
                <div className="w-[15vw] h-[200px] bg-customWhite">
                    <ul className="flex flex-col gap-4">
                        <li className="text-3xl"><TbTruckDelivery /></li>
                        <li><h3 className="text-2xl">Next day as standard</h3></li>
                        <li><p className="text-xl">Order before 3pm and get your order the next day as standard</p></li>
                    </ul>
                </div>
            </div>
            
            <div className="w-[20vw] h-[300px] bg-customWhite flex items-center justify-center">
                <div className="w-[15vw] h-[200px] bg-customWhite">
                    <ul className="flex flex-col gap-4">
                        <li className="text-3xl"><CiCircleCheck /></li>
                        <li><h3 className="text-2xl">Made by true artisans</h3></li>
                        <li><p className="text-xl">Handmade crafted goods made with real passion and craftmanship</p></li>
                    </ul>
                </div>
            </div>


            <div className="w-[20vw] h-[300px] bg-customWhite flex items-center justify-center">
                <div className="w-[15vw] h-[200px] bg-customWhite">
                    <ul className="flex flex-col gap-4">
                        <li className="text-3xl"><BsCreditCard /></li>
                        <li><h3 className="text-2xl">Unbeatable prices</h3></li>
                        <li><p className="text-xl">For our materials and quality you would not find better prices anywhere</p></li>
                    </ul>
                </div>
            </div>


            <div className="w-[20vw] flex items-center justify-center h-[300px] bg-customWhite">
                <div className="w-[15vw] h-[200px] bg-customWhite">
                    <ul className="flex flex-col gap-4">
                        <li className="text-3xl"><PiPlantFill /></li>
                        <li><h3 className="text-2xl">Recycled packaging</h3></li>
                        <li><p className="text-xl">We use 100% recycled to ensure our footprint is more manageable</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BrandDiff;
