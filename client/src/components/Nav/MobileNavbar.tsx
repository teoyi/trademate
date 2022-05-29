import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Twirl as Hamburger } from 'hamburger-react'

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);  

  useEffect(() => {
    if (isOpen) { 
      document.body.style.overflow = 'hidden';
      document.body.style.maxHeight = '100%';
    } else { 
      document.body.style.overflow = 'unset';
      document.body.style.maxHeight = 'unset';
    }
  }, [isOpen]);

  return (
    <div className="h-[100px] flex absolute w-full px-7 sm:px-10 md:hidden">
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="font-bold text-2xl md:text-sm">
            <Link to="/">
                <span>trademate</span>
                <span className="text-accent">.</span>
            </Link>
        </h1>
        <div className="z-20">
          <Hamburger direction="right" easing="ease-in" rounded  toggled={isOpen} toggle={setIsOpen}/>
        </div>
      </div>
      <ul className={`w-full h-screen absolute bg-base -ml-7 sm:-ml-10 flex flex-col items-center justify-center transition-all ease-in-out duration-700 ${isOpen ? "translate-x- opacity-100" : 'translate-x-full opacity-0'}`}> 
            <li className="mb-10 text-3xl"><Link to="/">Home</Link></li>
            <li className="mb-10 text-3xl"><Link to="/register">Sign Up</Link></li>
            <li className="mb-10 text-3xl"><Link to="/login">Login</Link></li>
        </ul>
    </div>
  )
}

export default MobileNavbar