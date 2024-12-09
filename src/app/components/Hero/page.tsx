import Image from "next/image"
const Hero = () => {
  return (
    <>
    <div>
        <Image src='/heroImage.png' alt="HeroImage" className="relative" width={1920} height={710} />
        <button className="h-[73px] bg-slate-100 w-[250px] absolute right-[620px] text-xl top-[719px]">View collection</button>
    </div>
    </>
  )
}

export default Hero;