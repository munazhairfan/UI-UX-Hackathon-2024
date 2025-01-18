import Image from "next/image";
import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="bg-hamza">
    <Header/>
    </div>
    <div className="font-poppins">
      {/* hero div */}
      <div className="w-full h-[900px] bg-hamza flex items-center justify-center lg:flex-row xs:flex-col">
        <div className="lg:w-[440px] lg:h-[276px] flex flex-col justify-between xs:h-44">
        <div className="lg:h-[192px] xs:h-16">
          <p className="font-medium xl:text-[64px] lg:text-5xl lg:leading-[96px] xs:text-3xl">Rocket single<br></br> seater</p>
        </div>
        <div className="w-[121px] h-[49px] border-b-2 border-black">
          <p className="text-[24px] leading-[36px] font-medium">Shop Now</p>
        </div>
        </div>
        <div className="lg:w-[800px] lg:h-[900px] xs:size-80">
          <Image src={'/images/hero image.png'} alt="seater image"
          height={800} width={800}></Image>
        </div>
      </div>
      {/* div 2 */}
     <div className="w-full h-[672px] xl:flex justify-center bg-fahad
       sm:flex-col md:flex-col lg:flex-row
        sm:p-6 md:p-6 lg:p-6 hidden">
        <div className="w-[605px] h-[562px] justify-evenly lg:px-14">
          <div className="w-[550px] h-[350px] sm:w-[430px] lg:w-[650px]">
            <Image src={'/images/side table.png'} alt="side table"
            width={550} height={462}></Image>
          </div>
          <p className="font-medium text-[48px] leading-[84px]">Side table</p>
          <p className="font-medium text-[28px] border-b-2 leading-[54px] border-black w-[155px]">View More</p>
        </div>
        <div className="w-[605px] h-[562px] justify-between lg:px-14 xs:hidden md:flex flex-col">
          <div className="w-[550px] h-[350px] sm:w-[430px] lg:w-[650px]">
            <Image src={'/images/sofa.png'} alt="sofa"
            width={550} height={462}></Image>
          </div>
          <p className="font-medium text-[48px] leading-[84px]">Side table</p>
          <p className="font-medium text-[28px] border-b-2 leading-[54px] border-black w-[155px]">View More</p>
        </div>
      </div>
      {/* div 3 */}
      <div className="w-full lg:h-[777px] flex flex-col justify-evenly xs:h-[2100px]">
        {/* text div */}
        <div className="w-full h-[85px] flex flex-col justify-between">
          <p className="font-medium text-[36px] leading-[54px] text-center">Top Picks For You</p>
          <p className="text-hackathon font-medium leading-6 text-center">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        </div>
        {/* furniture div */}
        <div className="w-full flex justify-evenly xs:flex-col lg:flex-row xs:items-center">
          {/* one */}
            <div className="w-[287px] h-[360px]">
            <div className="w-[287px] h-[260px] flex justify-center items-center flex-col">
              <Image src={'/images/one.png'} alt="table" height={287} width={287}></Image>
          </div>
          <p className="w-[212px]">Trenton modular sofa_3</p>
          <p className="font-medium leading-[48px] text-[24px]">Rs. 25,000.00</p>
          </div>
          {/* two */}
            <div className="w-[287px] h-[397px]">
            <div className="w-[287px] h-[287px] flex justify-center items-center flex-col">
              <Image src={'/images/two.png'} alt="table" height={287} width={287}></Image>
          </div>
          <p className="w-[212px]">Granite dining table with dining chair</p>
          <p className="font-medium leading-[48px] text-[24px]">Rs. 25,000.00</p>
          </div>
          {/* three */}
            <div className="w-[287px] h-[397px]">
            <div className="w-[287px] h-[287px] flex justify-center items-center flex-col">
              <Image src={'/images/three.png'} alt="table" height={287} width={287}></Image>
          </div>
          <p className="w-[212px]">Outdoor bar table and stool</p>
          <p className="font-medium leading-[48px] text-[24px]">Rs. 25,000.00</p>
          </div>
          {/* four */}
            <div className="w-[287px] h-[397px] lg:hidden xl:flex flex-col">
            <div className="w-[287px] h-[287px] flex justify-center items-center flex-col">
              <Image src={'/images/four.png'} alt="table" height={287} width={287}></Image>
          </div>
          <p className="w-[212px]">Granite dining table with dining chair</p>
          <p className="font-medium leading-[48px] text-[24px]">Rs. 25,000.00</p>
          </div>
        </div>
        {/* view */}
        <div className="w-full flex justify-center items-center">
        <p className="font-medium text-xl
         border-b-2 leading-[54px] border-black w-[110px]">View More</p>
        </div>
      </div>
      {/* div 3 */}
      <div className="w-full h-[639px] bg-fahad flex lg:flex-row xs:flex-col xl:justify-evenly">
        <Image src={'/images/Asgaard sofa.png'} alt="asgaard sofa" className="md:size-96 lg:w-[800px] lg:h-[500px]"
         height={639} width={920}></Image>
          <div className="text-center flex flex-col items-center justify-center">
         <div className="h-[210px]">
            <p className="font-medium text-[24px] leading-[36px]">New Arrivals</p>
            <p className="font-bold text-[48px] leading-[72px]">Asgaard sofa</p>
            <Link href={'/sofa'}>
            <button className="border text-xl w-[225px] h-16 mt-8 border-black">Order Now</button>
            </Link>
          </div>
          </div>
      </div>
      {/* div 4 */}
      <div className="w-full h-[944px] flex flex-col justify-evenly xl:px-[90px]">
        {/* text div */}
        <div className="w-full h-[85px] flex flex-col justify-between">
          <p className="font-medium text-[36px] leading-[54px] text-center">Top Picks For You</p>
          <p className="text-hackathon font-medium leading-6 text-center">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        </div>
        {/* blog div */}
        <div className="w-full h-[554px] flex flex-col justify-between">
          <div className="w-full h-[555px]
          flex lg:justify-evenly xs:justify-center xl:justify-between">
          {/* blog one */}
          <div className="md:w-[393px] xs:w-[320px] h-[555px] flex flex-col justify-between items-center">
            <Image src={'/images/blog one.png'} alt="blog one" height={393} width={393}
            className="h-[393px] md:w-[393px] xs:w-[320px]"></Image>
            <div className="md:w-[339px] xs:w-[320px] h-[120px] flex flex-col justify-between items-center">
                <p className="lg:text-xl leading-[30px] xs:text-base">Going all-in with millennial design</p>
                <Link href={'/blog'} className="w-[112px] leading-[36px] text-xl font-medium border-b-2 
                border-black cursor-pointer">Read More</Link>
                <div className="w-[223px] h-5 flex justify-between">
                  <div className="flex w-[73px] h-6 justify-between items-center">
                    <Image src={'/images/clock.png'} alt="clock" height={18} width={18}
                    className="h-[18px]"></Image>
                    <p>5 min</p>
                  </div>
                  <div className="flex w-[131px] h-6 justify-between items-center">
                    <Image src={'/images/calendar.png'} alt="calendar" height={18} width={18}
                    className="h-[18px]"></Image>
                    <p>12<sup>th</sup> Oct 2022</p>
                  </div>
                  
                </div>
            </div>
          </div>
          {/* blog two */}
          <div className="w-[393px] h-[555px] lg:flex flex-col justify-between items-center xs:hidden">
            <Image src={'/images/blog two.png'} alt="blog two" height={393} width={393}
            className="h-[393px] w-[393px]"></Image>
            <div className="w-[339px] h-[120px] flex flex-col justify-between items-center">
                <p className="text-xl leading-[30px]">Going all-in with millennial design</p>
                <Link href={'/blog'} className="w-[112px] leading-[36px] text-xl font-medium border-b-2 
                border-black cursor-pointer">Read More</Link>
                <div className="w-[223px] h-5 flex justify-between">
                  <div className="flex w-[73px] h-6 justify-between items-center">
                    <Image src={'/images/clock.png'} alt="clock" height={18} width={18}
                    className="h-[18px]"></Image>
                    <p>5 min</p>
                  </div>
                  <div className="flex w-[131px] h-6 justify-between items-center">
                    <Image src={'/images/calendar.png'} alt="calendar" height={18} width={18}
                    className="h-[18px]"></Image>
                    <p>12<sup>th</sup> Oct 2022</p>
                  </div>
                  
                </div>
            </div>
          </div>
          {/* blog three */}
          <div className="w-[393px] h-[555px] xl:flex flex-col justify-between items-center xs:hidden">
            <Image src={'/images/blog three.png'} alt="blog three" height={393} width={393}
            className="h-[393px] w-[393px]"></Image>
            <div className="w-[339px] h-[120px] flex flex-col justify-between items-center">
                <p className="text-xl leading-[30px]">Going all-in with millennial design</p>
                <Link href={'/blog'} className="w-[112px] leading-[36px] text-xl font-medium border-b-2 
                border-black cursor-pointer">Read More</Link>
                <div className="w-[223px] h-5 flex justify-between">
                  <div className="flex w-[73px] h-6 justify-between items-center">
                    <Image src={'/images/clock.png'} alt="clock" height={18} width={18}
                    className="h-[18px]"></Image>
                    <p>5 min</p>
                  </div>
                  <div className="flex w-[131px] h-6 justify-between items-center">
                    <Image src={'/images/calendar.png'} alt="calendar" height={18} width={18}
                    className="h-[18px]"></Image>
                    <p>12<sup>th</sup> Oct 2022</p>
                  </div>
                  
                </div>
            </div>
          </div>
          </div>
        </div>
        {/* view div */}
        <div className="w-full flex justify-center items-center">
        <Link href={'/blog'} className="font-medium text-xl cursor-pointer
         border-b-2 leading-[54px] border-black w-[126px]">View All Post</Link>
        </div>
      </div>
      {/* div 5 */}
      <div className="w-full h-[450px] flex justify-center items-center bg-instagram">
        <div className="w-[454px] h-[202px] flex flex-col justify-between items-center">
          <div className="flex flex-col justify-between items-center">
            <p className="font-bold lg:text-[60px] leading-[90px] xs:text-4xl">Our Instagram</p>
            <p className="text-xl leading-[30px]">Follow our store on Instagram</p>
          </div>
          <button className="rounded-full w-[225px] h-16 shadow-lg bg-fahad">Follow Us</button>
        </div>
      </div>
    </div>
    </>
  );
}
