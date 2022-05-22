import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="hidden md:flex flex-row justify-between items-center h-[100px] px-10">
        <h1 className=" font-bold text-2xl md:text-sm">
            <Link to="/">
                <span>trademate</span>
                <span className="text-accent">.</span>
            </Link>
        </h1>
        <ul className="flex lg:flex flex-row justify-between items-center w-[200px] font-semibold">
            <li className='transition ease-in-out hover:scale-110 duration-300'>
                <Link to="/register">Sign Up</Link>
            </li>
            <li className="px-7 py-2 rounded-lg bg-accent transition ease-in-out hover:scale-110 duration-300">
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
