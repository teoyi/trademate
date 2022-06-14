
import feature from "../../../assets/feature-2.jpg"
import { RiDashboardFill } from "react-icons/ri";
import { SiBookstack } from "react-icons/si";
import { MdMoneyOff } from "react-icons/md";

const Features = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center md:my-5 xl:my-10 xl:px-10">
      <div className="w-full h-full flex flex-col justify-center items-center max-w-[1440px]">
        <h1 className="font-semibold text-3xl text-center w-full mb-8">Key Highlights</h1>
        <div className="w-full">
          <div className='w-4/5 h-[200px] bg-accent flex justify-center items-center rounded-xl'>
            <p className="">Coming Soon</p>
          </div>
          <h2>Testing</h2>
        </div>
      </div>
    </section>
  )
}

export default Features