import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const header = () => {
  return (
    <div className='w-full h-[100px] flex font-poppins flex-row-reverse sm:h-[130px]'>
      <div className='w-[1050px] flex flex-row-reverse justify-around h-[100px] items-center
      sm:flex-col'>
        <div className='w-[215px] h-7 flex justify-between items-center cursor-pointer'>
          <Link href={'/account'}><Image src={'/images/user.png'} alt='user' height={28} width={28}></Image></Link>
          <Link href={''}><Image src={'/images/search.png'} alt='user' height={28} width={28}></Image></Link>
          <Link href={''}><Image src={'/images/heart.png'} alt='user' height={28} width={28}></Image></Link>
          <Link href={'/cart'}><Image src={'/images/cart.png'} alt='user' height={28} width={28}></Image></Link>
        </div>
        <div className='w-[430px] h-6 flex items-center'>
            <ul className='flex justify-between w-[430px] font-medium cursor-pointer text-black
            no-underline'>
                <li><Link href={'./'}>Home</Link></li>
                <li><Link href={'/shop'}>Shop</Link></li>
                <li><Link href={'./'}>About</Link></li>
                <li><Link href={'/contact'}>Contact</Link></li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default header
