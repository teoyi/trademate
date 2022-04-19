import React from 'react'

const Reason = () => {
  return (
    <section className="h-screen flex flex-col justify-start w-full items-center xl:p-10">
      <h1 className='w-full font-bold text-[36px] mb-2'>
        <span className='text-primary-text'>Why trademate</span>
        <span className='text-accent'>?</span>
      </h1>
      <p className='text-secondary-text text-[15px]'>
      Trading is hard, even more so if a trader does not remain disciplined during his career. A common advise given by successful traders is to backtest and journal the trades. Not only does it provide evidence of a proof-of-concept for a strategy, but it also allows traders to review their mistakes and refine their edge in the market. 
      </p>
      <div className='h-full bg-white w-full'></div>
    </section>
  )
}

export default Reason