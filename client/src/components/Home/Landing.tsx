import React from 'react'
import Contact from './comp/Contact'
import Features from './comp/Features'
import FeaturesMobile from './comp/FeaturesMobile'
import Hero from './comp/Hero'
import Reason from './comp/Reason'
import LandingBuffer from './comp/LandingBuffer'
import MoreThanJustAJournal from './comp/MoreThanJustAJournal'
import MffBull from '../../assets/mff_bull.svg'

const Landing = () => {
  return (
    <>
      <Hero />
      {/*<Features />*/}
      <LandingBuffer />
      <div className="w-full flex justify-center items-center">
        <div className="w-full mx-5 mb-10 flex flex-row justify-center items-center max-w-[1440px]">
          <hr className="w-full mr-2"/>
          {/*<p className="font-bold text-xl text-accent">TM</p>*/}
          <div className="w-[100px] mx-3">
            <img src={MffBull} alt="projection image" width="100%" height="10px"/>
          </div>
          <hr className="w-full ml-2"/>
        </div>
      </div>
      <Reason />
      <MoreThanJustAJournal />
      <div className="md:hidden">
        <FeaturesMobile />
      </div>
      <div className="md:block">
        <Features />
      </div>
      {/*<Contact />*/}
    </>
  )
}

export default Landing