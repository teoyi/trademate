import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const changeBackground = () => { 
        if (window.scrollY >= 100) {
            setIsScrolled(true);
        } else { 
            setIsScrolled(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    
    return (
        <div className={`hidden px-10 absolute w-full h-[100px] lg:max-w-[1440px] text-md md:flex flex-row justify-between items-center transition-all ease-in-out duration-500 xl:px-20 ${ isScrolled ? 'bg-base h-[80px]' : '' }`}>
            <h1 className=" font-bold text-2xl">
                <Link to="/">
                    <span>trademate</span>
                    <span className="text-accent">.</span>
                </Link>
            </h1>
            <ul className="flex lg:flex flex-row justify-between items-center font-semibold text-md">
                <li className='mr-10 '>
                    <Link to="/register">Sign Up</Link>
                </li>
                <li className="">
                    <Link to="/login">
                        <button className="px-9 py-3 rounded-lg bg-accent font-semibold hover:bg-hover">
                            Login
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
