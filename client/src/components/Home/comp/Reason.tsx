import React from 'react'
import { MdMoneyOff } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { BiLineChart } from "react-icons/bi";

const Reason = () => {
  return (
    <section className="flex flex-col justify-start w-full items-center xl:p-10">
      <h1 className='w-full font-bold text-[36px] mb-2'>
        <span className='text-primary-text'>Why trademate</span>
        <span className='text-accent'>?</span>
      </h1>
      <p className='text-secondary-text xl:text-[15px] 2xl:text-[17px] mb-10'>
      Trading is hard, even more so if a trader does not remain disciplined during his career. A common advise given by successful traders is to backtest and journal the trades. Not only does it provide evidence of a proof-of-concept for a strategy, but it also allows traders to review their mistakes and refine their edge in the market. 
      </p>
      <div className='h-full w-full mt-5 flex flex-row justify-center items-center'>
        <div className='w-72 h-96 bg-secondary-base mx-6 rounded-lg transition ease-in-out duration-300 hover:scale-105'>
          <div className="w-full flex justify-center items-center h-4/5 mb-6">
            <div className="h-[200px] w-[200px] bg-accent rounded-[50%] flex justify-center items-center">
              <i className='text-base text-[100px]'><MdMoneyOff /></i>
            </div> 
          </div>
          <div className='h-1/5 flex flex-col justify-start items-center'>
            <h1 className='font-semibold text-primary-text text-center text-[24px] mb-2 -mt-5'>No Cost to Start</h1>
            {/* <p className='text-secondary-text text-[13px] max-w-[250px]'>
              Trading is an expensive hobby, Trademate provides a free solution to journalling without breaking the bank!
            </p> */}
          </div>
        </div>
        <div className='w-72 h-96 bg-secondary-base mx-6 rounded-lg transition ease-in-out duration-300 hover:scale-105'>
          <div className="w-full flex justify-center items-center h-4/5 mb-6">
            <div className="h-[200px] w-[200px] bg-accent rounded-[50%] flex justify-center items-center">
              <i className='text-base text-[100px]'><FaDatabase /></i>
            </div> 
          </div>
          <div className='h-1/5 flex flex-col justify-start items-center'>
            <h1 className='font-semibold text-primary-text text-center text-[24px] mb-2 -mt-5'>Backtest-centric</h1>
            {/* <p className='text-secondary-text text-[13px] max-w-[250px]'>
              Formulating a strategy requires data and trademate does just that with each trade your journal! 
            </p> */}
          </div>
        </div>
        <div className='w-72 h-96 bg-secondary-base mx-6 rounded-lg transition ease-in-out duration-300 hover:scale-105'>
          <div className="w-full flex justify-center items-center h-4/5 mb-6">
            <div className="h-[200px] w-[200px] bg-accent rounded-[50%] flex justify-center items-center">
              <i className='text-base text-[100px]'><BiLineChart /></i>
            </div> 
          </div>
          <div className='h-1/5 flex flex-col justify-start items-center'>
            <h1 className='font-semibold text-primary-text text-center text-[24px] mb-2 -mt-5'>Track Your Progress</h1>
            {/* <p className='text-secondary-text text-[13px] max-w-[250px]'>
              Traders often give up before seeing improvements, journal your trade and watch as you improve!
            </p> */}
          </div> 
        </div>
      </div>
    </section>
  )
}

export default Reason