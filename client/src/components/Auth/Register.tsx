import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-2/5 flex flex-col justify-center items-center">
        <h1 className="text-[30px] font-bold">Sign Up</h1>
        <form className="flex flex-col px-20 justify-center">
          <label htmlFor='username'>
            Username:
          </label>
          <input type="text" id="username" autoComplete='off' required />
          <label htmlFor='password'>
            Password:
          </label>
          <input type="password" id="passwrod" required />
          <label htmlFor='confirm_password'>
            Confirm Password:
          </label>
          <input type="password" id="confirm_passwrod" required />
          <div>
            Already have an account? <Link to="/login">Sign In</Link>
          </div>
          <button>Sign Up</button>
        </form>
      </div>
      <div className="w-3/5 bg-white text-black">image illustrations</div>
    </div>
  )
}

export default Register