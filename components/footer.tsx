import React from 'react'

const footer = () => {
  return (
    <div className='font-poppins w-full h-[555px] px-[90px] pt-[90px] pb-[40px] 
    flex flex-col justify-between sm:h-[900px]'> 
        <div className='h-[312px] flex justify-between sm:flex-col'>
            <div className='flex h-[312px] items-center'>
                <p className='w-[286px] text-hackathon'>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <div>
                <ul className='font-medium h-[312px] flex justify-between flex-col'>
                    <li className='text-hackathon'>Links</li>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <ul className='font-medium h-[242px] flex sm:mt-6 justify-between flex-col'>
                    <li className='text-hackathon'>Help</li>
                    <li>Payment Options</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                </ul>
            </div>
            <div className='w-[286px] h-[101px] sm:mt-6 text-hackathon flex justify-between items-start flex-col'>
                <p className=''>Newsletter</p>
                <div className='flex justify-evenly'>
                    <input placeholder='Enter Your Email Address'
                    className='leading-[21px] text-sm border-b-2'></input>
                    <button className='leading-[21px] text-sm border-b-2 text-black'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <div className='w-full h-[59px] flex items-end border-t-2'>
            <p>2022 Meubel House. All rights reverved</p>
        </div>
      </div>
  )
}

export default footer
