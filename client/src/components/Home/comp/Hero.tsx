import React from 'react'
import { Link } from 'react-router-dom'
import hero from "../../../assets/hero-1.jpg"

const Hero = () => {
  return (
    <section className='h-screen flex flex-row justify-start items-center'>
        <div className='flex flex-col justify-center items-start w-3/5 ml-10'>
            <h1 className='font-bold xl:text-[50px] leading-[50px] pointer-events-none xl:-mt-5 2xl:-mt-10'>
                <span className='text-accent'>Review</span>
                <span> your trades to<br/></span>
                <span>become a</span>
                <span className='text-accent'> better</span>
                <span> trader</span>
            </h1>
            <p className='text-secondary-text pointer-events-none font-semibold xl:text-[25px] leading-[30px] my-5'>Your one stop trading journal to enhance your<br/> trading journey</p>
            <Link to='/register' className='bg-accent px-6 py-3 font-semibold rounded-lg mt-5 transition ease-in-out hover:scale-105 duration-300'>Get Started</Link>
        </div>
        <div className='flex justify-center items-center w-2/5'>
            <div className='z-10 xl:h-[470px] 2xl:h-[600px] xl:w-[320px] 2xl:w-[400px] rounded-lg relative overflow-hidden'>
                <img src={hero} className="absolute"/>
            </div>
            <div className='bg-accent xl:w-[320px] 2xl:w-[400px] xl:h-[470px] 2xl:h-[600px] absolute z-0 rounded-lg xl:mr-[35px] xl:mt-[35px]'></div>
        </div>
    </section>
  )
}

export default Hero