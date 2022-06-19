import UndrawJournal from "../../../assets/undraw_journal.svg"
import { Link } from 'react-router-dom'

const MoreThanJustAJournal = () => {
  return (
    <section className="w-full flex justify-center items-center md:my-5 xl:my-10 xl:px-10">
      <div className="w-full h-full flex flex-col md:flex-row-reverse justify-center items-center max-w-[1440px] my-12 md:mx-10">
        <div className="w-3/5 mb-10 md:mb-0 md:w-1/2 max-w-[472px] xl:w-2/5 max-w-[300px] md:ml-20">
          <img src={UndrawJournal} alt="projection image" width="100%" height="10px"/>
        </div>
        <div className="flex flex-col justify-center items-center md:w-1/2 xl:w-3/5 max-w-[650px]">
          <div className="w-full px-7 md:px-0 md:pl-7 mb-7 text-center md:text-left">
            <h1 className="text-3xl font-semibold lg:text-2xl xl:text-4xl">More than <span className="text-accent">just</span> a <span className="text-accent underline">trading journal</span></h1>
            <p className="text-md text-secondary-text md:text-sm mt-3 mx-2 md:mx-0">Anyone can keep a trading journal but gaining an insight to your strategy and having it on hand as you trade anywhere can be a challenge. We make it possible.</p>
          </div>
          <Link to='/register'>
            <button className="bg-accent text-sm px-6 py-3 font-semibold rounded-lg transition ease-in-out hover:scale-105 duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MoreThanJustAJournal