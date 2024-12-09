import Image from "next/image";


const WhereItStarted = () => {
  return (
    <>
    <div className="flex justify-center mt-24 mb-24 ">

        <div className="bg-blue-100 w-[635px] h-[480px]">
            <Image src='/textBlock1.png' alt='textBlock' width={635} height={480} className="relative"  />
            <button type="button" className="relative w-[170px] h-[56px] left-[65px] bottom-[110px] bg-customPurple text-white">View collection</button>
        </div> 


        <div className="bg-green-200 ml-6 h-[480px] w-[635px]">
            <Image src='/textBlock2.png' alt='textBlock' width={635} height={480} />
        </div>

    </div>
    </>
  )
}

export default WhereItStarted;