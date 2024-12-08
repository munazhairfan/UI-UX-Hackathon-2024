import React from 'react'
import Header from '@/components/header'
import Image from 'next/image'
import Products from '@/components/products'
import Footer2 from '@/components/footer2'

const page = () => {
  return (
    <div>
      <Header/>
      <div className='pb-20'>
        {/* images */}
        <div className='h-[316px] w-full bg-components_bg flex justify-center items-center'>
            <div className='flex justify-between items-center flex-col'>
            <Image src={'/images/logo.png'} alt='logo'
            height={77} width={77}></Image>
            <p className='font-medium text-[52px] leading-10'>Shop</p>
            <div className='flex w-[140px] h-16 justify-between text-xl items-center'>
                <p className='font-medium'>Home</p>
                <p><Image src={'/images/arrow.png'} alt='arrow' 
                height={8} width={14} className='h-[18px] w-[10px]'></Image></p>
                <p className='font-light'>Shop</p>
            </div>
            </div>
        </div>
        {/* div 2 */}
        <div className='w-full h-[130px] sm:flex-col bg-fahad flex items-center justify-around mt-10'>
            <div className='h-7 flex items-center w-4/12 sm:w-full justify-between'>
                <Image src={'/images/Vector.png'} alt='filter'
                 height={25} width={25} className='h-6 w-6'></Image>
                 <p className='text-xl leading-[30px] mr-5'>Filter</p>
                <Image src={'/images/Vector (1).png'} alt='grid'
                 height={25} width={25} className='h-6 w-6'></Image>
                <Image src={'/images/Vector (2).png'} alt='layout'
                 height={25} width={25} className='h-6 w-6'></Image>
                 <div className='w-[1px] border h-10 border-gray-500'></div>
                 <p>Showing 1&mdash;16 of 32 results</p>
            </div>
            <div className='w-4/12 h-[55px] text-xl flex justify-around sm:w-full'>
            <div className='flex items-center'>
            <p className='mr-4'>Show</p>
            <input placeholder='16' className='w-[55px] h-[55px] text-center'></input>
            </div>
            <div className='flex items-center'>
            <p className='mr-4'>Sort by</p>
            <input placeholder='Default' className='w-[188px] h-[55px] text-center'></input>
            </div>
            </div>
        </div>
        {/* div 3 */}
        <Products/>
        {/* div 4 */}
        <div className='w-[392px] h-[60px] flex justify-between mx-auto'>
            <button className='w-[60px] h-[60px] rounded-[10px] bg-hamza
             flex justify-center items-center'>1</button>
            <button className='w-[60px] h-[60px] rounded-[10px] bg-[#FFF9E5]
             flex justify-center items-center'>2</button>
            <button className='w-[60px] h-[60px] rounded-[10px] bg-[#FFF9E5]
             flex justify-center items-center'>3</button>
            <button className='w-[98px] h-[60px] rounded-[10px] bg-[#FFF9E5]
             flex justify-center items-center'>Next</button>
        </div>
      </div>
      <Footer2/>
    </div>
  )
}

export default page
