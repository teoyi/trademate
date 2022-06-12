import React from 'react'
import Contact from './comp/Contact'
import Features from './comp/Features'
import Hero from './comp/Hero'
import Reason from './comp/Reason'
import Buffer from './comp/Buffer'
import MffBull from '../../assets/mff_bull.svg'

const Landing = () => {
  return (
    <>
      <Hero />
      {/*<Features />*/}
      <Buffer />
      <div className="w-full flex justify-center items-center mb-12">
        <div className="w-full mx-5 md:mb-5 xl:mb-10 flex flex-row justify-center items-center max-w-[1440px]">
          <hr className="w-full mr-2"/>
          {/*<p className="font-bold text-xl text-accent">TM</p>*/}
          <div className="w-[100px] mx-3">
            <img src={MffBull} alt="projection image" width="100%" height="10px"/>
          </div>
          <hr className="w-full ml-2"/>
        </div>
      </div>
      <Reason />
      {/*<Contact />*/}
    </>
  )
}

export default Landing