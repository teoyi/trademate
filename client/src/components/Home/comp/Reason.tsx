import React from 'react'
import { MdMoneyOff } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { BiLineChart } from "react-icons/bi";

const Reason = () => {
  return (
    <section className="flex justify-center w-full items-center xl:p-10 mb-10">
      <div className="w-full max-w-[1440px] flex flex-col justify-start">
        <h1 className='w-full font-semibold text-3xl md:text-4xl text-center mb-5'>
          <span className='text-primary-text'>Why trademate</span>
          <span className='text-accent'>?</span>
        </h1>
        <div className='h-full w-full mt-5 flex flex-col md:flex-row justify-center items-center'>
          <div className='w-64 lg:w-72 h-80 lg:h-96 bg-secondary-base mx-3 rounded-lg transition ease-in-out duration-300 hover:scale-105 mb-5'>
            <div className="w-full flex justify-center items-center h-4/5 mb-6">
              <div className="h-[170px] w-[170px] lg:h-[200px] lg:w-[200px] bg-accent rounded-[50%] flex justify-center items-center">
                <i className='text-base text-[100px]'><MdMoneyOff /></i>
              </div> 
            </div>
            <div className='h-1/5 flex flex-col justify-start items-center'>
              <h1 className='font-semibold text-primary-text text-center text-xl mb-2 -mt-5'>No Cost to Start</h1>
            </div>
          </div>
          <div className='w-64 lg:w-72 h-80 lg:h-96 bg-secondary-base mx-3 rounded-lg transition ease-in-out duration-300 hover:scale-105 mb-5'>
            <div className="w-full flex justify-center items-center h-4/5 mb-6">
              <div className="h-[170px] w-[170px] lg:h-[200px] lg:w-[200px] bg-accent rounded-[50%] flex justify-center items-center">
                <i className='text-base text-[80px] lg:text-[100px]'><FaDatabase /></i>
              </div> 
            </div>
            <div className='h-1/5 flex flex-col justify-start items-center'>
              <h1 className='font-semibold text-primary-text text-center text-xl mb-2 -mt-5'>Backtest-centric</h1>
            </div>
          </div>
          <div className='w-64 lg:w-72 h-80 lg:h-96 bg-secondary-base mx-3 rounded-lg transition ease-in-out duration-300 hover:scale-105 mb-5'>
            <div className="w-full flex justify-center items-center h-4/5 mb-6">
              <div className="h-[170px] w-[170px] lg:h-[200px] lg:w-[200px] bg-accent rounded-[50%] flex justify-center items-center">
                <i className='text-base text-[100px]'><BiLineChart /></i>
              </div> 
            </div>
            <div className='h-1/5 flex flex-col justify-start items-center'>
              <h1 className='font-semibold text-primary-text text-center text-xl mb-2 -mt-5'>Superior Analytics</h1>
            </div> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reason