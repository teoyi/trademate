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
        <Hamburger direction="right" easing="ease-in" rounded />
      </div>
      <div className="w-full h-screen absolute bg-black -ml-7 sm:-ml-10 -translate-x-full"> 
          <ul><Link to="/">Home</Link></ul>
          <ul><Link to="/register">Sign Up</Link></ul>
          <ul><Link to="/login">Login</Link></ul>
      </div>
    </div>
  )
}

export default MobileNavbar