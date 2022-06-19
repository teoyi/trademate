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
        <h1 className="font-semibold text-3xl md:text-4xl text-center w-full mb-8">Key Highlights</h1>
        <div className="w-10/12">
          <ul className="w-full flex flex-row justify-start items-center text-lg lg:justify-start border-b-2 border-accent pb-2">
            <li className={`cursor-pointer mr-10 ${isActive[0] ? '' : 'text-secondary-text'}`} onClick={() => handleActive(0)}><span className={`${isActive[0] ? 'text-accent' : 'text-secondary-text'} font-bold text-xl`}>01.</span><br />Unlimited Journals</li>
            <li className={`cursor-pointer mr-10 ${isActive[1] ? '' : 'text-secondary-text'}`} onClick={() => handleActive(1)}><span className={`${isActive[1] ? 'text-accent' : 'text-secondary-text'} font-bold text-xl`}>02.</span><br />Journal Analytics</li>
            <li className={`cursor-pointer ${isActive[2] ? '' : 'text-secondary-text'}`} onClick={() => handleActive(2)}><span className={`${isActive[2] ? 'text-accent' : 'text-secondary-text'} font-bold text-xl`}>03.</span><br />Import & Export Reports</li>
          </ul>
          <div className="w-full flex flex-col justify-center items-center mt-5">
            
            <div className={`w-full flex flex-col lg:flex-row justify-center items-center ${isActive[0] ? 'block' : 'hidden'}`}>
              <div className='w-10/12 h-[300px] bg-accent flex justify-center items-center rounded-xl mb-5 lg:w-1/2 lg:mr-5'>
                <p className="font-bold text-lg">Preview Coming Soon</p>
              </div>
              <div className="flex flex-col lg:w-1/2 justify-center items-center">
                <div className="flex flex-row lg:flex-col text-2xl text-left w-full mb-3">
                  <h1 className="text-accent mr-5 font-bold lg:mb-3">01.</h1>
                  <h2>No restrictions to journal creation</h2>
                </div>
                <p className="text-secondary-text">We understand that there are endless number of strategies out there and we do not intend to limit your ability to backtest them. Here at trademate we give you the ability to have multiple journals, and if left untouched for a period of a month, we will store it as a report in your account and you may import them to bring your journal back to life!</p>
              </div>
            </div>

            <div className={`w-full flex flex-col lg:flex-row justify-center items-center ${isActive[1] ? 'block' : 'hidden'}`}>
              <div className='w-10/12 h-[300px] bg-accent flex justify-center items-center rounded-xl mb-5 lg:w-1/2 lg:mr-5'>
                <p className="font-bold text-lg">Preview Coming Soon</p>
              </div>
              <div className="flex flex-col lg:w-1/2 justify-center items-center">
                <div className="flex flex-row lg:flex-col text-2xl text-left w-full mb-3">
                  <h1 className="text-accent mr-5 font-bold lg:mb-3">02.</h1>
                  <h2>Enhance your strategy with analytics</h2>
                </div>
                <p className="text-secondary-text">Backtesting isn't complete without a detailed conclusion. Trademate journals comes equipped with journal analytics engine to provide you with your strategy's performance data to determine it's worth.</p>
              </div>
            </div>

            <div className={`w-full flex flex-col lg:flex-row justify-center items-center ${isActive[2] ? 'block' : 'hidden'}`}>
              <div className='w-10/12 h-[300px] bg-accent flex justify-center items-center rounded-xl mb-5 lg:w-1/2 lg:mr-5'>
                <p className="font-bold text-lg">Preview Coming Soon</p>
              </div>
              <div className="flex flex-col lg:w-1/2 justify-center items-center">
                <div className="flex flex-row lg:flex-col text-2xl text-left w-full mb-3">
                  <h1 className="text-accent mr-5 font-bold lg:mb-3">03.</h1>
                  <h2>Backup or restart your journal with ease</h2>
                </div>
                <p className="text-secondary-text">Your journal may not live forever on trademate, but it can definitely be backed up in the form of a report (either as a .XLS or .CSV). And if you ever see the need to revive your journal, importing is made easy with the same report.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features