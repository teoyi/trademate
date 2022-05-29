import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="hidden px-10 absolute w-full h-[100px] text-md md:flex flex-row justify-between items-center xl:px-20">
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
