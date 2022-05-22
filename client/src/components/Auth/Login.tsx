import { Link } from 'react-router-dom';
import { FaUserAlt, FaLock } from "react-icons/fa";


const Login = () => {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-full lg:w-2/5 flex flex-col justify-center items-center">
        <h1 className="text-[30px] font-bold mb-10">Sign In</h1>
        <form className="flex flex-col px-12 justify-center w-full lg:w-5/6 max-w-[500px]">
          <div className="flex flex-row items-center justify-center mb-5 border-b-2 border-accent pb-2">
            {/* <label htmlFor='username' className='hidden text-sm mb-3'>
              Username:
            </label> */}
            <i className="text-md mr-3"><FaUserAlt /></i>
            <input type="text" id="username" autoComplete='off' placeholder="Username" required className="bg-transparent  w-full focus:outline-0"/>
          </div>
          <div className="flex flex-row items-center justify-center mb-3 border-b-2 border-accent pb-2">
            <label htmlFor='password' className="hidden text-sm mb-3 display">
              Password:
            </label>
            <i className="text-md mr-3"><FaLock /></i>
            <input type="password" id="password" placeholder="Password" required className="bg-transparent  w-full focus:outline-0" />
          </div>
          <div className='flex flex-row justify-between items-center text-xs mb-1'>
            <div>
              <input type="checkbox" id="persist" /> 
              <label htmlFor='persist' className="ml-1">
                Remember Me
              </label>
            </div>
            <Link to="/forgot" className="text-accent underline">Forgot Password?</Link>
          </div>
          <div className='text-xs mb-10'>
            Don't have an account? <Link to="/register" className='text-accent ml-1 underline'>Sign Up</Link>
          </div>
          <div className="flex justify-center items-center">
            <button className="text-md bg-accent py-2 w-full rounded-lg">Login</button>
          </div>
        </form>
      </div>
      <div className="hidden lg:block w-3/5  h-full text-black bg-login-img bg-cover brightness-75"></div>
    </div>
  )
}

export default Login