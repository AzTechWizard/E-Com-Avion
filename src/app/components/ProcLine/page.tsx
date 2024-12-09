import Image from "next/image";
import { MdCurrencyPound } from "react-icons/md";


const ProcList = () => {
  return (
    <>
    <div className="flex justify-evenly mt-16 mb-16 ">

        <div className="">
            <div>
                <Image src='/proc1.png' alt='proc1' width={330} height={375} />
                <h2 className="underline text-2xl mt-3">The Dandy Chair</h2> 
            </div>


            <div className="flex mt-2">
                <MdCurrencyPound className="text-2xl mt-1.5"/><p className="text-2xl">250</p>
            
            </div>
        </div>


        <div className="">
            <div>
                <Image src='/proc2.png' alt='proc2' width={330} height={375} />
                <h2 className="underline text-2xl mt-3">Rustic Vase Set</h2> 
            </div>


            <div className="flex mt-2">
                <MdCurrencyPound className="text-2xl mt-1.5"/><p className="text-2xl">155</p>
            
            </div>
        </div>



        <div className="">
            <div>
                <Image src='/proc3.png' alt='proc3' width={330} height={375} />
                <h2 className="underline text-2xl mt-3">The Silky Vase</h2> 
            </div>


            <div className="flex mt-2">
                <MdCurrencyPound className="text-2xl mt-1.5"/><p className="text-2xl">125</p>
            
            </div>
        </div>

        <div className="">
            <div>
                <Image src='/proc1.png' alt='proc1' width={330} height={375} />
                <h2 className="underline text-2xl mt-3">The Lucy Lamp</h2> 
            </div>


            <div className="flex mt-2">
                <MdCurrencyPound className="text-2xl mt-1.5"/><p className="text-2xl">399</p>
            
            </div>
        </div>

    </div>
    <div className="text-center">
        <button type='button' className="w-[170px] h-[70px] bg-slate-50">View collection</button>
    </div>
    </>
  )
}

export default ProcList;