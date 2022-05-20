import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-2/5 flex flex-col justify-center items-center">
        <h1 className="text-[30px] font-bold">Sign In</h1>
        <form className="flex flex-col px-20 justify-center">
          <label htmlFor='username'>
            Username:
          </label>
          <input type="text" id="username" autoComplete='off' required />
          <label htmlFor='password'>
            Password:
          </label>
          <input type="password" id="passwrod" required />
          <div>
            <input type="checkbox" id="persist" /> 
            <label htmlFor='persist'>
              Trust this device
            </label>
          </div>
          <div>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </div>
        </form>
      </div>
      <div className="w-3/5 bg-white">image illustrations</div>
    </div>
  )
}

export default Login