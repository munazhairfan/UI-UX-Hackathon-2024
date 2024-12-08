import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

const products = () => {
  return (
    <div className='px-8'>
        {/* row 1 */}
            <div className="w-full flex justify-evenly sm:flex-col sm:px-24
            md:flex-col md:px-40 lg:flex-col lg:px-60">
          {/* one */}
            <div className="w-[287px] h-[397px]">
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
            <div className="w-[287px] h-[397px]">
            <div className="w-[287px] h-[287px] flex justify-center items-center flex-col">
              <Image src={'/images/four.png'} alt="table" height={287} width={287}></Image>
          </div>
          <p className="w-[212px]">Plain console with teak mirror</p>
          <p className="font-medium leading-[48px] text-[24px]">Rs. 25,000.00</p>
          </div>
          </div>
          {/* row 2 */}
          <div className="w-full flex justify-evenly sm:flex-col sm:px-24
          md:flex-col md:px-40 lg:flex-col lg:px-60">
          {/* one */}
            <div className="w-[287px] h-[397px]">
            <div className="w-[287px] h-[287px] flex justify-center items-center flex-col">
              <Image src={'/images/five.png'} alt="table" height={287} width={287}></Image>
          </div>
          <p className="w-[212px]">Grain coffee table</p>
          <p className="font-medium leading-[48px] text-[24px]">Rs. 15,000.00</p>
          </div>
          {/* two */}
            <div className="w-[287px] h-[397px]">
            <div className="w-[287px] h-[287px] flex justify-center items-center flex-col">
              <Image src={'/images/six.png'} alt="table" height={287} width={287}></Image>
          </div>
          <p className="w-[212px]">Kent coffee table</p>
          <p className="font-medium leading-[48px] text-[24px]">Rs. 225,000.00</p>
          </div>
          {/* three */}
            <div className="w-[287px] h-[397px]">
            <div className="w-[287px] h-[287px] flex justify-center items-center flex-col">
              <Image src={'/images/seven.png'} alt="table" height={287} width={287}></Image>
          </div>
          <p className="w-[212px]">Round coffee table_color 2</p>
          <p className="font-medium leading-[48px] text-[24px]">Rs. 251,000.00</p>
          </div>
          {/* four */}
            <div className="w-[287px] h-[397px]">
            <div className="w-[287px] h-[287px] flex justify-center items-center flex-col">
              <Image src={'/images/eight.png'} alt="table" height={287} width={287}></Image>
          </div>
          <p className="w-[212px]">Reclaimed teak coffee table</p>
          <p className="font-medium leading-[48px] text-[24px]">Rs. 25,200.00</p>
          </div>
          </div>
          {/* row 3 */}
          <div className="w-full flex justify-evenly sm:flex-col sm:px-24
          md:flex-col md:px-40 lg:flex-col lg:px-60">
          {/* one */}
            <div className="w-[287px] h-[397px]">
            <div className="w-[287px] h-[287px] flex justify-center items-center flex-col">
              <Image src={'/images/nine.png'} alt="table" height={287} width={287}></Image>
          </div>
          <p className="w-[212px]">Plain console_</p>
          <p className="font-medium leading-[48px] text-[24px]">Rs. 258,200.00</p>
          </div>
          {/* two */}
            <div className="w-[287px] h-[397px]">
            <div className="w-[287px] h-[287px] flex justify-center items-center flex-col">
              <Image src={'/images/ten.png'} alt="table" height={287} width={287}></Image>
          </div>
          <p className="w-[212px]">Reclaimed teak Sideboard</p>
          <p className="font-medium leading-[48px] text-[24px]">Rs. 20,000.00</p>
          </div>
          {/* three */}
            <div className="w-[287px] h-[397px]">
            <div className="w-[287px] h-[287px] flex justify-center items-center flex-col">
              <Image src={'/images/eleven.png'} alt="table" height={287} width={287}></Image>
          </div>
          <p className="w-[212px]">SJP_0825</p>
          <p className="font-medium leading-[48px] text-[24px]">Rs. 200,000.00</p>
          </div>
          {/* four */}
            <div className="w-[287px] h-[397px]">
            <div className="w-[287px] h-[287px] flex justify-center items-center flex-col">
              <Image src={'/images/twelve.png'} alt="table" height={287} width={287}></Image>
          </div>
          <p className="w-[212px]">Bella chair and table</p>
          <p className="font-medium leading-[48px] text-[24px]">Rs. 100,000.00</p>
          </div>
          </div>
          {/* row 4 */}
          <div className="w-full flex justify-evenly sm:flex-col sm:px-24
          md:flex-col md:px-40 lg:flex-col lg:px-60">
          {/* one */}
            <div className="w-[287px] h-[397px]">
            <div className="w-[287px] h-[287px] flex justify-center pr-8 items-center flex-col">
              <Image src={'/images/side table.png'} alt="table" height={287} width={287}></Image>
          </div>
          <p className="w-[212px]">Granite square side table</p>
          <p className="font-medium leading-[48px] text-[24px]">Rs. 258,800.00</p>
          </div>
          {/* two */}
            <div className="w-[287px] h-[397px]">
          <Link href={'/sofa'}>
            <div className="w-[287px] h-[287px] flex justify-center items-center flex-col">
              <Image src={'/images/Asgaard sofa.png'} alt="table" height={287} width={287}></Image>
          </div>
          <p className="w-[212px]">Asgaard sofa</p>
          <p className="font-medium leading-[48px] text-[24px]">Rs. 250,000.00</p>
          </Link>
          </div>
          {/* three */}
            <div className="w-[287px] h-[397px]">
            <div className="w-[287px] h-[287px] flex justify-center items-center flex-col">
              <Image src={'/images/sofa.png'} alt="table" height={287} width={287}></Image>
          </div>
          <p className="w-[212px]">Maya sofa three seater</p>
          <p className="font-medium leading-[48px] text-[24px]">Rs. 115,000.00</p>
          </div>
          {/* four */}
            <div className="w-[287px] h-[397px]">
            <div className="w-[287px] h-[287px] flex justify-center items-center flex-col">
              <Image src={'/images/sixteen.png'} alt="table" height={287} width={287}></Image>
          </div>
          <p className="w-[212px]">Outdoor sofa set</p>
          <p className="font-medium leading-[48px] text-[24px]">Rs. 244,000.00</p>
          </div>
          </div>
          </div>
  )
};

export default products
