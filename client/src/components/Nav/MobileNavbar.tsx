import { Link } from 'react-router-dom'
import { Twirl as Hamburger } from 'hamburger-react'

const MobileNavbar = () => {
  return (
    <div className="md:hidden h-[100px] flex px-7 sm:px-10">
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className=" font-bold text-2xl md:text-sm">
            <Link to="/">
                <span>trademate</span>
                <span className="text-accent">.</span>
            </Link>
        </h1>
        <div className="z-20">
          <Hamburger direction="right" easing="ease-in" rounded />
        </div>
      </div>
      <div className="w-full h-screen absolute bg-base -ml-7 sm:-ml-10 flex flex-col items-center justify-center -translate-x-full"> 
          <ul className="mb-10 text-3xl"><Link to="/">Home</Link></ul>
          <ul className="mb-10 text-3xl"><Link to="/register">Sign Up</Link></ul>
          <ul className="mb-10 text-3xl"><Link to="/login">Login</Link></ul>
      </div>
    </div>
  )
}

export default MobileNavbar