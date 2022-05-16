import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <h1 className=" font-bold xl:text-[27px]">
            <Link to="/">
                <span>trademate</span>
                <span className="text-accent">.</span>
            </Link>
        </h1>
        <ul className="flex flex-row justify-between items-center w-[200px] font-semibold">
            <li className='transition ease-in-out hover:scale-110 duration-300'>
                <Link to="/register">Sign Up</Link>
            </li>
            <li className="px-7 py-2 rounded-lg bg-accent transition ease-in-out hover:scale-110 duration-300">
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </>
  )
}

export default Navbar
