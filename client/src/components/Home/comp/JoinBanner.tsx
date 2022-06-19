import { Link } from 'react-router-dom'

const JoinBanner = () => {

  return (
    <section className="w-full flex justify-center items-center mt-20">
      <div className="w-full h-[40vh] bg-accent flex flex-col justify-center items-center text-center">
        <div className="mb-7 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">trademate.</h1>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl mx-10">Join the community of traders looking to improve</p>
        </div>
        <Link to="/register">
          <button className="bg-base text-sm px-6 py-3 font-semibold rounded-lg transition ease-in-out hover:scale-105 duration-300">
              Get Started
          </button>
        </Link>
      </div>
    </section>
  )
}

export default JoinBanner