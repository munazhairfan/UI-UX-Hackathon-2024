import React from "react";
import Header from "@/components/header";
import Image from "next/image";

const page = () => {
  return (
    <div className="font-poppins">
      <Header />
      <div className="xl:px-[100px]">
        <div className="sm:w-[350px] h-[100px] flex justify-between items-center xs:mx-auto xl:mx-0">
          <p className="text-hackathon">Home</p>
          <Image
            src={"/images/arrow.png"}
            alt="arrow"
            height={8}
            width={14}
            className="h-[18px] w-[10px]"
          ></Image>
          <p className="text-hackathon">Shop</p>
          <Image
            src={"/images/arrow.png"}
            alt="arrow"
            height={8}
            width={14}
            className="h-[18px] w-[10px]"
          ></Image>
          <div className="w-[1px] border h-10 border-gray-500"></div>
          <p>Asgaard sofa</p>
        </div>
        {/* main */}
        <div className="w-full lg:h-[820px] py-[35px] flex xl:justify-between justify-evenly xs:flex-col lg:flex-row">
          <div className="lg:w-[530px] lg:h-[500px] flex lg:justify-between xs:justify-center">
            <div className="w-[76px] h-[416px] flex flex-col justify-between xs:hidden lg:flex">
              <div
                className="w-[76px] h-20 rounded-[10px] bg-pinki
                     flex justify-center items-center"
              >
                <Image
                  src={"/images/sixteen.png"}
                  alt="sofa"
                  height={76}
                  width={76}
                ></Image>
              </div>
              <div
                className="w-[76px] h-20 rounded-[10px] bg-pinki
                     flex justify-center items-center"
              >
                <Image
                  src={"/images/a1.png"}
                  alt="sofa"
                  height={76}
                  width={76}
                ></Image>
              </div>
              <div
                className="w-[76px] h-20 rounded-[10px] bg-pinki
                     flex justify-center items-center"
              >
                <Image
                  src={"/images/a2.png"}
                  alt="sofa"
                  height={76}
                  width={76}
                ></Image>
              </div>
              <div
                className="w-[76px] h-20 rounded-[10px] bg-pinki
                     flex justify-center items-center"
              >
                <Image
                  src={"/images/a3.png"}
                  alt="sofa"
                  height={76}
                  width={76}
                ></Image>
              </div>
            </div>
            <div
              className="lg:w-[423px] lg:h-[500px] rounded-[10px] bg-pinki
                flex justify-center items-center xs:size-80"
            >
              <Image
                src={"/images/Asgaard sofa.png"}
                alt="sofa"
                height={391}
                width={423}
              ></Image>
            </div>
          </div>
          {/* 2 */}
          <div className="md:w-[607px] lg:h-[731px] xs:ml-2 lg:ml-0">
            <div className="w-full h-[589px] border-b pb-10 justify-between flex flex-col">
              <p className="text-[42px] leading-[63px]">Asgaard sofa</p>
              <p className="font-medium leading-[36px] text-[24px] text-hackathon">
                Rs. 250,000.00
              </p>
              <div className="h-5 flex items-center gap-4 w-[300px] justify-between">
                <div className="h-[18px] flex gap-1">
                  <Image
                    src={"/images/star.png"}
                    alt="star"
                    height={18}
                    width={18}
                  ></Image>
                  <Image
                    src={"/images/star.png"}
                    alt="star"
                    height={18}
                    width={18}
                  ></Image>
                  <Image
                    src={"/images/star.png"}
                    alt="star"
                    height={18}
                    width={18}
                  ></Image>
                  <Image
                    src={"/images/star.png"}
                    alt="star"
                    height={18}
                    width={18}
                  ></Image>
                  <Image
                    src={"/images/star-half.png"}
                    alt="star"
                    height={18}
                    width={9}
                  ></Image>
                </div>
                <div className="w-[1px] border h-10 border-gray-500"></div>
                <div className="text-hackathon text-[13px] leading-5">
                  5 Customer Review
                </div>
              </div>
              <p className="text-[13px] leading-5 lg:w-[424px]">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <p className="text-hackathon text-[14px] leading-[21px]">Size</p>
              <div className="flex gap-3">
                <div
                  className="w-[30px] h-[30px] rounded bg-hamza
                flex justify-center items-center"
                >
                  L
                </div>
                <div
                  className="w-[30px] h-[30px] rounded bg-pinki
                flex justify-center items-center"
                >
                  XL
                </div>
                <div
                  className="w-[30px] h-[30px] rounded bg-pinki
                flex justify-center items-center"
                >
                  XS
                </div>
              </div>
              <p className="text-hackathon text-[14px] leading-[21px]">Color</p>
              <div className="flex gap-3">
                <div className="w-[30px] h-[30px] rounded-full bg-[#816DFA]"></div>
                <div className="w-[30px] h-[30px] rounded-full bg-black"></div>
                <div className="w-[30px] h-[30px] rounded-full bg-[#CDBA7B]"></div>
              </div>
              <div className="flex gap-4">
                <div className="w-[123px] h-[64px] rounded-[10px] border flex justify-center items-center">
                  <pre>- 1 +</pre>
                </div>
                <button className="w-[215px] h-[64px] rounded-[10px] border border-black">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="flex leading-8">
              <p className="text-hackathon">SKU</p>
              <p className="text-hackathon ml-16">: SS001</p>
            </div>
            <div className="flex leading-8">
              <p className="text-hackathon">Category</p>
              <p className="text-hackathon ml-[19px]">: Sofas</p>
            </div>
            <div className="flex leading-8">
              <p className="text-hackathon">Tags</p>
              <p className="text-hackathon ml-[56px]">
                : Sofa, Chair, Home, Shop
              </p>
            </div>
            <div className="flex leading-8">
              <p className="text-hackathon">Share</p>
              <div className="text-hackathon h-5 ml-[49px] flex gap-4 justify-center items-center mt-[8px]">
                {" "}
                :
                <Image
                  src={"/images/fb.png"}
                  alt="fb"
                  width={20}
                  height={20}
                ></Image>
                <Image
                  src={"/images/linkedIn.png"}
                  alt="LinkedIn"
                  width={20}
                  height={20}
                ></Image>
                <Image
                  src={"/images/twitter.png"}
                  alt="twitter"
                  width={20}
                  height={20}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="w-full lg:h-[744px]
        py-12 flex flex-col justify-between">
          <div className="lg:w-[649px] lg:h-[36px]
           flex justify-between lg:mx-auto xs:flex-col lg:flex-row">
            <p className="text-[24px] leading-[36px]">Description</p>
            <p className="text-[24px] leading-[36px] text-hackathon">
              Additional Information
            </p>
            <p className="text-[24px] leading-[36px] text-hackathon">
              Reviews [5]
            </p>
          </div>
          <p className="lg:w-[1026px]
           mr-auto ml-auto text-hackathon">
            Embodying the raw, wayward spirit of rock n roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
            <br></br>
            <br></br>Weighing in under 7 pounds, the Kilburn is a lightweight
            piece of vintage styled engineering. Setting the bar as one of the
            loudest speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear
            midrange and extended highs for a sound that is both articulate and
            pronounced. The analogue knobs allow you to fine tune the controls
            to your personal preferences while the guitar-influenced leather
            strap enables easy and stylish travel.
          </p>
          <div className="lg:h-[348px] xs:h-[500px] xl:w-[1225px] flex xl:justify-between xs:flex-col md:flex-row
          md:justify-evenly">
            <div className="xl:w-[605px] xl:h-[348px] xs:size-80 md:size-[500px]
             flex justify-center items-center bg-pinki">
                <Image src={'/images/f1.png'} height={348} width={605} alt="furniture"></Image>
            </div>
            <div className="xl:w-[605px] xl:h-[348px] xs:size-80 md:size-[500px]
             flex justify-center items-center bg-pinki">
                <Image src={'/images/f2.png'} height={348} width={605} alt="furniture"></Image>
            </div>
          </div>
        </div>
      </div>
        <hr></hr>
              {/* div 3 */}
      <div className="w-full lg:h-[777px] flex flex-col justify-evenly">
        {/* text div */}
        <div className="w-full h-[85px] flex flex-col justify-between">
          <p className="font-medium text-[36px] leading-[54px] text-center">Related Products</p>
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
    </div>
  );
};

export default page;
