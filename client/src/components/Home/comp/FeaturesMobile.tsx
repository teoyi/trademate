
const Features = () => {
  return (
    <section className="w-full flex justify-center items-center my-10">
      <div className="w-full h-full flex flex-col justify-center items-center max-w-[1440px]">
        <h1 className="font-semibold text-3xl text-center w-full mb-8">Key Highlights</h1>
        {/*
          There are 3 things I would like to display as key highlights of trademate 
          
          1. Unlimited Journals 
          2. Journal Analytics 
          3. Journal Export 
        */}
        <div className="w-full flex flex-col justify-center items-center mb-10">
          <div className='w-10/12 h-[200px] bg-accent flex justify-center items-center rounded-xl'>
            <p className="font-bold text-lg">Preview Coming Soon</p>
          </div>
          <h2 className="font-semibold text-xl my-3">Unlimited Journals</h2>
          <p className="px-7 text-center text-sm text-secondary-text">We understand that there are endless number of strategies out there and we do not intend to limit your ability to backtest them. Here at trademate we give you the ability to have multiple journals, and if left untouched for a period of a month, we will store it as a report in your account and you may import them to bring your journal back to life!</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center mb-10">
          <div className='w-10/12 h-[200px] bg-accent flex justify-center items-center rounded-xl'>
            <p className="font-bold text-lg">Preview Coming Soon</p>
          </div>
          <h2 className="font-semibold text-xl my-3">Journal Analytics</h2>
          <p className="px-7 text-center text-sm text-secondary-text">Backtesting isn't complete without a detailed conclusion. Trademate journals comes equipped with journal analytics engine to provide you with your strategy's performance data to determine it's worth.</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className='w-10/12 h-[200px] bg-accent flex justify-center items-center rounded-xl'>
            <p className="font-bold text-lg">Preview Coming Soon</p>
          </div>
          <h2 className="font-semibold text-xl my-3">Import & Export Report</h2>
          <p className="px-7 text-center text-sm text-secondary-text">Your journal may not live forever on trademate, but it can definitely be backed up in the form of a report (either as a .XLS or .CSV). And if you ever see the need to revive your journal, importing is made easy with the same report.</p>
        </div>
      </div>
    </section>
  )
}

export default Features