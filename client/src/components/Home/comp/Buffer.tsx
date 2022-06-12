import UndrawProjection from '../../../assets/undraw_projection.svg';

const Features = () => {
  return (
    <section className="w-full flex justify-center items-center md:my-5 xl:my-10 xl:px-10">
      <div className="w-full h-full flex flex-col md:flex-row justify-center items-center max-w-[1440px] my-12 md:mx-10">
        <div className="w-4/5 mb-7 md:mb-0 md:w-1/2 max-w-[472px] xl:w-3/5">
          <img src={UndrawProjection} alt="projection image" width="100%" height="10px"/>
        </div>
        <div className="flex flex-col justify-center items-center md:w-1/2 xl:w-2/5">
          <div className="w-full px-7 md:px-0 md:pl-7 mb-7 text-center md:text-left">
            <h1 className="text-3xl font-semibold md:text-xl">Improve your discipline, test your strategy</h1>
            <p className="text-md md:text-sm mt-3 mx-2 md:mx-0">Staying disciplined is easier said than done. Here at trademate, we help you keep to your rules and verify your strategy.</p>
          </div>
          <button className="bg-accent text-sm px-6 py-3 font-semibold rounded-lg transition ease-in-out hover:scale-105 duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features