import { Link } from 'react-router-dom'
import { BsArrowLeft } from "react-icons/bs";

const Navbar = () => {
  return (
    <h1 className=" font-bold xl:text-[27px]">
        <Link to="/">
            <span className="text-accent uppercase flex justify-center items-center"><BsArrowLeft className="mr-3"/>back</span>
        </Link>
    </h1>
  )
}

export default Navbar
