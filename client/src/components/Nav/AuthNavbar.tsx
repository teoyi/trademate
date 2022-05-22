import { Link } from 'react-router-dom'
import { BsArrowLeft } from "react-icons/bs";

const Navbar = () => {
  return (
    <h1 className=" font-bold text-[24px] xl:text-[27px]">
      <Link to="/">
          <span>trademate</span>
          <span className="text-accent">.</span>
      </Link>
    </h1>
  )
}

export default Navbar
