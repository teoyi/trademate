import { Link } from 'react-router-dom';
import { FaUserAlt, FaLock, FaEnvelope, FaCheck } from "react-icons/fa";

const Register = () => {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-full lg:w-2/5 flex flex-col justify-center items-center">
        <h1 className="text-[30px] font-bold mb-8">Sign Up</h1>
        <form className="flex flex-col px-12 justify-center w-full lg:w-5/6 max-w-[500px]">
          <div className="flex flex-row items-center justify-center mb-5 border-b-2 border-accent pb-2">
            <i className="text-md mr-3"><FaEnvelope /></i>
            <input type="text" id="email" autoComplete='off' placeholder="Email" required className="bg-transparent  w-full focus:outline-0"/>
          </div>
          <div className="flex flex-row items-center justify-center mb-5 border-b-2 border-accent pb-2">
            <i className="text-md mr-3"><FaUserAlt /></i>
            <input type="text" id="username" autoComplete='off' placeholder="Username" required className="bg-transparent  w-full focus:outline-0"/>
          </div>
          <div className="flex flex-row items-center justify-center mb-5 border-b-2 border-accent pb-2">
            <i className="text-md mr-3"><FaLock /></i>
            <input type="password" id="password" placeholder="Password" required className="bg-transparent  w-full focus:outline-0" />
          </div>
          <div className="flex flex-row items-center justify-center mb-3 border-b-2 border-accent pb-2">
            <i className="text-md mr-3"><FaCheck /></i>
            <input type="confirm-password" id="confirm-password" placeholder="Confirm Password" required className="bg-transparent  w-full focus:outline-0" />
          </div>
          <div className='text-xs mb-10'>
            Already have an account? <Link to="/login" className='text-accent ml-1 underline'>Sign In</Link>
          </div>
          <div className="flex justify-center items-center">
            <button className="text-md bg-accent py-2 w-full rounded-lg">Register</button>
          </div>
        </form>
      </div>
      <div className="hidden lg:block w-3/5  h-full text-black bg-register-img bg-cover brightness-75"></div>
    </div>
  )
}

export default Register