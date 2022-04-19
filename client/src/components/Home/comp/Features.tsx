
import feature from "../../../assets/feature-2.jpg"

const Features = () => {
  return (
    <section className="h-screen flex flex-row justify-center w-full items-center xl:mt-20 2xl:mt-0 xl:px-10">
      <div className='w-2/5 flex justify-center items-center'>
            <div className='z-10 xl:h-[470px] 2xl:h-[600px] xl:w-[320px] 2xl:w-[400px] rounded-lg relative overflow-hidden'>
                <img src={feature} className="absolute"/>
            </div>
        <div className='bg-accent xl:w-[320px] 2xl:w-[400px] xl:h-[470px] 2xl:h-[600px] absolute z-0 rounded-lg xl:mr-[35px] xl:mb-[35px]'></div>
        </div>
      <div className="w-3/5 flex flex-col justify-center items-start h-full xl:mr-10 xl:ml-7 2xl:ml-20 2xl:mr-0"> 
        <h1 className="text-accent font-bold mb-10 text-[36px]">Features</h1>
        <div className="mb-7 flex flex-row w-full items-center">
          <div className="w-1/6 flex justify-center items-center">
            <div className="h-[103px] w-[103px] bg-accent rounded-[50%]"></div> 
          </div>
          <div className="w-5/6 ml-5 max-w-[550px]">
            <h3 className="font-semibold xl:text-[21px] 2xl:text-[24px]">Personalized Journal Dashboard</h3>
            <p className="xl:text-[15px] 2xl:text-[16px] text-secondary-text">Users will gain personalized account analytics through their journal dashboard to gain immediate insights on their flaw as a trader</p>
          </div>
        </div>
        <div className="mb-7 flex flex-row w-full items-center">
          <div className="w-1/6 flex justify-center items-center">
            <div className="h-[103px] w-[103px] bg-accent rounded-[50%]"></div> 
          </div>
          <div className="w-5/6 ml-5 max-w-[550px]">
            <h3 className="font-semibold xl:text-[21px] 2xl:text-[24px]">Backtest-centric</h3>
            <p className="xl:text-[15px] 2xl:text-[16px] text-secondary-text">This platform is built with the goal of having an outlet for storing back-testing or even forward-testing results and display the data relevant to your strategies to you hassle-free</p>
          </div>
        </div>
        <div className="flex flex-row w-full items-center">
          <div className="w-1/6 flex justify-center items-center">
            <div className="h-[103px] w-[103px] bg-accent rounded-[50%]"></div> 
          </div>
          <div className="w-5/6 ml-5 max-w-[550px]">
            <h3 className="font-semibold xl:text-[21px] 2xl:text-[24px]">No Cost, No Commitment</h3>
            <p className="xl:text-[15px] 2xl:text-[16px] text-secondary-text">As much as financial datas are crucial to a trader, the same could be said about their own accounts as it would reflect the good as well as the flaws in a trader’s personality</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features