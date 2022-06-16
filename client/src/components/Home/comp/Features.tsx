import { useState } from 'react'

const Features = () => {
  const [isActive, setIsActive] = useState(Array(true, false, false));

  function handleActive(index) { 
    switch(index) {
      case 0: 
        setIsActive(Array(true, false , false))
        break;
      case 1: 
        setIsActive(Array(false, true , false))
        break;
      case 2:
        setIsActive(Array(false, false , true))
        break; 
    }; 
  };

  return (
    <section className="w-full flex justify-center items-center md:my-5 xl:my-10 xl:px-10">
      <div className="w-full h-full flex flex-col justify-center items-center max-w-[1440px]">
        <h1 className="font-semibold text-3xl text-center w-full mb-8">Key Highlights</h1>
        <div className="w-10/12">
          {/*
            3 tabs displaying 3 different images with captions explaining 
            div 
              div
                -- tabs selection here 
              /div 
              div 
                -- display items here 
              /div 
            /div 
          */}

          <ul className="w-full flex flex-row justify-between items-center text-lg border-b-2 border-accent pb-2">
            <li className={`cursor-pointer font-bold ${isActive[0] ? '' : 'text-secondary-text'}`} onClick={() => handleActive(0)}><span className={`${isActive[0] ? 'text-accent' : 'text-secondary-text'} font-bold`}>01.</span><br />Unlimited Journals</li>
            <li className={`cursor-pointer font-bold ${isActive[1] ? '' : 'text-secondary-text'}`} onClick={() => handleActive(1)}><span className={`${isActive[1] ? 'text-accent' : 'text-secondary-text'} font-bold`}>02.</span><br />Journal Analytics</li>
            <li className={`cursor-pointer font-bold ${isActive[2] ? '' : 'text-secondary-text'}`} onClick={() => handleActive(2)}><span className={`${isActive[2] ? 'text-accent' : 'text-secondary-text'} font-bold`}>03.</span><br />Import & Export Reports</li>
          </ul>
          <div className="w-full flex flex-col justify-center items-center mt-5">
            <div className={`w-full flex flex-col justify-center items-center ${isActive[0] ? 'block' : 'hidden'}`}>
              <div className='w-10/12 h-[300px] bg-accent flex justify-center items-center rounded-xl mb-5'>
                <p className="font-bold text-lg">Preview Coming Soon</p>
              </div>
              <p>We understand that there are endless number of strategies out there and we do not intend to limit your ability to backtest them. Here at trademate we give you the ability to have multiple journals, and if left untouched for a period of a month, we will store it as a report in your account and you may import them to bring your journal back to life!</p>
            </div>
            <div className={`w-full flex flex-col justify-center items-center ${isActive[1] ? 'block' : 'hidden'}`}>
              <div className='w-10/12 h-[300px] bg-accent flex justify-center items-center rounded-xl mb-5'>
                <p className="font-bold text-lg">Preview Coming Soon</p>
              </div>
              <p>Backtesting isn't complete without a detailed conclusion. Trademate journals comes equipped with journal analytics engine to provide you with your strategy's performance data to determine it's worth.</p>
            </div>
            <div className={`w-full flex flex-col justify-center items-center ${isActive[2] ? 'block' : 'hidden'}`}>
              <div className='w-10/12 h-[300px] bg-accent flex justify-center items-center rounded-xl mb-5'>
                <p className="font-bold text-lg">Preview Coming Soon</p>
              </div>
              <p>Your journal may not live forever on trademate, but it can definitely be backed up in the form of a report (either as a .XLS or .CSV). And if you ever see the need to revive your journal, importing is made easy with the same report.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features