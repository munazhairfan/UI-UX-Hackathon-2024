import React from "react";
import Header from "@/components/header";
import Footer2 from "@/components/footer2";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Header />
      <div className="font-poppins">
        <div className="h-[316px] w-full bg-components_bg flex justify-center items-center">
          <div className="flex justify-between items-center flex-col">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              height={77}
              width={77}
            ></Image>
            <p className="font-medium text-[52px] leading-10">Blog</p>
            <div className="flex w-[140px] h-16 justify-between text-xl items-center">
              <p className="font-medium">Home</p>
              <p>
                <Image
                  src={"/images/arrow.png"}
                  alt="arrow"
                  height={8}
                  width={14}
                  className="h-[18px] w-[10px]"
                ></Image>
              </p>
              <p className="font-light">Blog</p>
            </div>
          </div>
        </div>
        {/* main */}
        <div className="w-full lg:px-[100px] lg:py-[100px]
         flex xl:justify-between xs:justify-center">
            {/* blog one */}
            <div>
            <div className="lg:w-[830px] flex flex-col gap-5 mt-10 xs:justify-center px-2">
            <div className="lg:w-full justify-center">
              <Image
                src={"/images/b1.png"}
                alt="blog 3"
                width={830}
                height={500}
                className="rounded-[15px]"
              ></Image>
            </div>
            <div className="lg:w-[400px] flex lg:justify-between xs:justify-evenly">
              <div className="flex lg:w-[100px] justify-between items-center">
                <Image
                  src={"/images/user.png"}
                  alt="user"
                  width={28}
                  height={28}
                ></Image>
                <p className="text-hackathon lg:text-xl xs:text-sm">Admin</p>
              </div>
              <div className="flex lg:w-[150px] justify-between items-center">
                <Image
                  src={"/images/calendar.png"}
                  alt="calendar"
                  width={28}
                  height={28}
                ></Image>
                <p className="text-hackathon lg:text-xl xs:text-sm">14 Oct 2022</p>
              </div>
              <div className="flex lg:w-[100px] justify-between items-center">
                <Image
                  src={"/images/tag.png"}
                  alt="tag"
                  width={28}
                  height={28}
                ></Image>
                <p className="text-hackathon lg:text-xl xs:text-sm">Wood</p>
              </div>
            </div>
            {/* paragraph */}
            <div className="flex flex-col gap-3">
              <p className="font-semibold lg:text-4xl text-2xl">
                Going all-in with millennial design
              </p>
              <p className="text-hackathon">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate voluptatem repellendus officia maiores inventore
                magni explicabo veritatis sit dicta enim? Officia itaque modi
                perferendis provident. Culpa possimus inventore natus omnis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, ab cumque! Doloremque sed pariatur alias architecto
                ipsa quae suscipit quo tempore necessitatibus, velit recusandae
                ullam nam. Excepturi est commodi blanditiis! Lorem, ipsum d olor
                sit amet consectetur adipisicing elit. Illum perferendis neque
                nobis, esse nisi maxime suscipit facere? Nostrum ad aut pariatur
                esse eius, porro doloribus vel, error veritatis, necessitatibus
                quam.
              </p>
            </div>
            <div>
            <Link href={'/blog'} className="lg:w-[112px] leading-[36px] border-b 
                border-black cursor-pointer">Read More</Link>
            </div>
          </div>
          {/* blog two */}
          <div className="lg:w-[830px] flex flex-col gap-5 mt-10 xs:justify-center px-2">
            <div className="lg:w-full justify-center">
              <Image
                src={"/images/b2.png"}
                alt="blog 3"
                width={830}
                height={500}
                className="rounded-[15px]"
              ></Image>
            </div>
            <div className="lg:w-[400px] flex lg:justify-between xs:justify-evenly">
              <div className="flex lg:w-[100px] justify-between items-center">
                <Image
                  src={"/images/user.png"}
                  alt="user"
                  width={28}
                  height={28}
                ></Image>
                <p className="text-hackathon lg:text-xl xs:text-sm">Admin</p>
              </div>
              <div className="flex lg:w-[150px] justify-between items-center">
                <Image
                  src={"/images/calendar.png"}
                  alt="calendar"
                  width={28}
                  height={28}
                ></Image>
                <p className="text-hackathon lg:text-xl xs:text-sm">14 Oct 2022</p>
              </div>
              <div className="flex lg:w-[100px] justify-between items-center">
                <Image
                  src={"/images/tag.png"}
                  alt="tag"
                  width={28}
                  height={28}
                ></Image>
                <p className="text-hackathon lg:text-xl xs:text-sm">Wood</p>
              </div>
            </div>
            {/* paragraph */}
            <div className="flex flex-col gap-3">
              <p className="font-semibold lg:text-4xl text-2xl">
                Exploring new ways of decorating
              </p>
              <p className="text-hackathon">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate voluptatem repellendus officia maiores inventore
                magni explicabo veritatis sit dicta enim? Officia itaque modi
                perferendis provident. Culpa possimus inventore natus omnis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, ab cumque! Doloremque sed pariatur alias architecto
                ipsa quae suscipit quo tempore necessitatibus, velit recusandae
                ullam nam. Excepturi est commodi blanditiis! Lorem, ipsum d olor
                sit amet consectetur adipisicing elit. Illum perferendis neque
                nobis, esse nisi maxime suscipit facere? Nostrum ad aut pariatur
                esse eius, porro doloribus vel, error veritatis, necessitatibus
                quam.
              </p>
            </div>
            <div>
            <Link href={'/blog'} className="lg:w-[112px] leading-[36px] border-b 
                border-black cursor-pointer">Read More</Link>
            </div>
          </div>
          {/* blog three */}
          <div className="lg:w-[830px] flex flex-col gap-5 mt-10 xs:justify-center px-2">
            <div className="lg:w-full justify-center">
              <Image
                src={"/images/b3.png"}
                alt="blog 3"
                width={830}
                height={500}
                className="rounded-[15px]"
              ></Image>
            </div>
            <div className="lg:w-[400px] flex lg:justify-between xs:justify-evenly">
              <div className="flex lg:w-[100px] justify-between items-center">
                <Image
                  src={"/images/user.png"}
                  alt="user"
                  width={28}
                  height={28}
                ></Image>
                <p className="text-hackathon lg:text-xl xs:text-sm">Admin</p>
              </div>
              <div className="flex lg:w-[150px] justify-between items-center">
                <Image
                  src={"/images/calendar.png"}
                  alt="calendar"
                  width={28}
                  height={28}
                ></Image>
                <p className="text-hackathon lg:text-xl xs:text-sm">14 Oct 2022</p>
              </div>
              <div className="flex lg:w-[100px] justify-between items-center">
                <Image
                  src={"/images/tag.png"}
                  alt="tag"
                  width={28}
                  height={28}
                ></Image>
                <p className="text-hackathon lg:text-xl xs:text-sm">Wood</p>
              </div>
            </div>
            {/* paragraph */}
            <div className="flex flex-col gap-3">
              <p className="font-semibold lg:text-4xl text-2xl">
                Handmade pieces that took time to make
              </p>
              <p className="text-hackathon">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate voluptatem repellendus officia maiores inventore
                magni explicabo veritatis sit dicta enim? Officia itaque modi
                perferendis provident. Culpa possimus inventore natus omnis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, ab cumque! Doloremque sed pariatur alias architecto
                ipsa quae suscipit quo tempore necessitatibus, velit recusandae
                ullam nam. Excepturi est commodi blanditiis! Lorem, ipsum d olor
                sit amet consectetur adipisicing elit. Illum perferendis neque
                nobis, esse nisi maxime suscipit facere? Nostrum ad aut pariatur
                esse eius, porro doloribus vel, error veritatis, necessitatibus
                quam.
              </p>
            </div>
            <div>
            <Link href={'/blog'} className="lg:w-[112px] leading-[36px] border-b 
                border-black cursor-pointer">Read More</Link>
            </div>
          </div>
          </div>
          {/* 2 */}
          <div className="w-[320px] flex-col gap-10 hidden xl:flex">
            <div className="w-full h-[55px] border border-gray-400 rounded-[15px] flex items-center">
                <input className="w-11/12 h-[50px] rounded-[15px]"></input>
                <Image src={'/images/search.png'} alt="search"
                height={28} width={28} className="h-9 w-9"></Image>
            </div>
            <div className="px-8 gap-10 flex flex-col">
                <p className="text-2xl font-medium">Categories</p>
                <div className="flex justify-between">
                    <p className="text-hackathon">Crafts</p>
                    <p className="text-hackathon ml-auto">2</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-hackathon">Design</p>
                    <p className="text-hackathon ml-auto">8</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-hackathon">Handmade</p>
                    <p className="text-hackathon ml-auto">7</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-hackathon">Interior</p>
                    <p className="text-hackathon ml-auto">1</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-hackathon">Wood</p>
                    <p className="text-hackathon ml-auto">6</p>
                </div>
            </div>
            {/* recents */}
            <div className="px-6 flex flex-col gap-10 mt-10">
            <p className="text-2xl font-medium">Recent Posts</p>
            {/* four */}
            <div className="h-[100px] flex items-center gap-3">
                <Image src={'/images/b4.png'} alt="blog 4"
                height={100} width={100} className="
                w-[100px] h-[100px] rounded-[15px]"></Image>
                <div className="w-[270px]">
                    <p>Going all-in with millennial design</p>
                    <p className="text-sm text-hackathon leading-8">03 Aug 2022</p>
                </div>
            </div>
            {/* five */}
            <div className="h-[100px] flex items-center gap-3">
                <Image src={'/images/b5.png'} alt="blog 5"
                height={100} width={100} className="
                w-[100px] h-[100px] rounded-[15px]"></Image>
                <div className="w-[200px]">
                    <p>Exploring new ways of decorating</p>
                    <p className="text-sm text-hackathon leading-8">03 Aug 2022</p>
                </div>
            </div>
            {/* six */}
            <div className="h-[100px] flex items-center gap-3">
                <Image src={'/images/b6.png'} alt="blog 6"
                height={100} width={100} className="
                w-[100px] h-[100px] rounded-[15px]"></Image>
                <div className="w-[200px]">
                    <p>Handmade pieces that took time to make</p>
                    <p className="text-sm text-hackathon leading-8">03 Aug 2022</p>
                </div>
            </div>
            {/* seven */}
            <div className="h-[100px] flex items-center gap-3">
                <Image src={'/images/b7.png'} alt="blog 7"
                height={100} width={100} className="
                w-[100px] h-[100px] rounded-[15px]"></Image>
                <div className="w-[200px]">
                    <p>Modern home in Milan</p>
                    <p className="text-sm text-hackathon leading-8">03 Aug 2022</p>
                </div>
            </div>
            {/* eight */}
            <div className="h-[100px] flex items-center gap-3">
                <Image src={'/images/b8.png'} alt="blog 8"
                height={100} width={100} className="
                w-[100px] h-[100px] rounded-[15px]"></Image>
                <div className="w-[200px]">
                    <p>Colorful office redesign</p>
                    <p className="text-sm text-hackathon leading-8">03 Aug 2022</p>
                </div>
            </div>
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className='lg:w-[392px] h-[60px] flex lg:justify-between mx-auto xs:justify-evenly'>
            <button className='lg:w-[60px] lg:h-[60px] xs:size-11 rounded-[10px] bg-hamza
             flex justify-center items-center'>1</button>
            <button className='lg:w-[60px] lg:h-[60px] xs:size-11 rounded-[10px] bg-[#FFF9E5]
             flex justify-center items-center'>2</button>
            <button className='lg:w-[60px] lg:h-[60px] xs:size-11 rounded-[10px] bg-[#FFF9E5]
             flex justify-center items-center'>3</button>
            <button className='lg:w-[98px] lg:h-[60px] xs:size-11 rounded-[10px] bg-[#FFF9E5]
             flex justify-center items-center'>Next</button>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default page;
