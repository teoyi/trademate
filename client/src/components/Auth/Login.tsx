import { Link } from 'react-router-dom';
import { FaUserAlt, FaLock } from "react-icons/fa";


const Login = () => {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-2/5 flex flex-col justify-center items-center">
        <h1 className="text-[30px] font-bold mb-10">Sign In</h1>
        <form className="flex flex-col px-20 justify-center w-5/6">
          <div className="flex flex-row items-center justify-center mb-5">
            {/* <label htmlFor='username' className='hidden text-sm mb-3'>
              Username:
            </label> */}
            <i className="text-md mr-3"><FaUserAlt /></i>
            <input type="text" id="username" autoComplete='off' placeholder="Username" required className="bg-transparent border-b-2 border-accent w-full focus:outline-0"/>
          </div>
          <div className="flex flex-row items-center justify-center mb-5">
            <label htmlFor='password' className="hidden text-sm mb-3 display">
              Password:
            </label>
            <i className="text-md mr-3"><FaLock /></i>
            <input type="password" id="password" placeholder="Password" required className="bg-transparent border-b-2 border-accent w-full focus:outline-0" />
          </div>
          <div className='flex flex-row justify-start items-center mb-1'>
            <input type="checkbox" id="persist" /> 
            <label htmlFor='persist' className="text-sm ml-2">
              Trust this device
            </label>
          </div>
          <div className='text-sm mb-10'>
            Don't have an account? <Link to="/register" className='text-accent'>Sign Up</Link>
          </div>
          <div className="flex justify-center items-center">
            <button className="text-md bg-accent py-2 px-8 rounded-lg">Login</button>
          </div>
        </form>
      </div>
      <div className="w-3/5 bg-white text-black">image illustrations</div>
    </div>
  )
}

export default Login