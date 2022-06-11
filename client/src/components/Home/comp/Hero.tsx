import React from 'react'
import { Link } from 'react-router-dom'
import hero from "../../../assets/hero-1.jpg"

const Hero = () => {
  return (
    <section className='h-screen w-full flex flex-row justify-center md:justify-start items-center relative'>
        <div className='flex flex-col justify-center items-center z-10 w-full'>
            <h1 className='font-bold text-3xl w-full pointer-events-none md:text-4xl lg:hidden text-center'>
                <span className='text-accent'>Review</span>
                <span> your trades<br/></span>
                <span>Become a</span>
                <span className='text-accent'> better</span>
                <span> trader</span>
            </h1>
            <h1 className='hidden font-bold pointer-events-none text-center text-5xl mt-20 2xl:text-7xl lg:block'>
                <span className='text-accent'>Review</span>
                <span> your trades<br/></span>
                <span>Become a</span>
                <span className='text-accent'> better</span>
                <span> trader</span>
            </h1>
            <p className='text-secondary-text text-sm text-center pointer-events-none font-semibold my-4 mx-20 lg:text-md xl:text-lg 2xl:text-xl'>Your one stop trading journal to enhance your trading journey</p>
            <Link to='/register' className='bg-accent text-sm px-6 py-3 font-semibold rounded-lg mt-5 transition ease-in-out hover:scale-105 duration-300'>Get Started</Link>
        </div>
        <div className="absolute bg-hero-img lg:bg-hero2-img bg-cover brightness-50 w-full h-screen z-0"></div>
        {/* <div className="w-2/5 h-full bg-hero-img bg-cover brightness-75 hidden lg:block"></div> */}
    </section>
  )
}

export default Hero