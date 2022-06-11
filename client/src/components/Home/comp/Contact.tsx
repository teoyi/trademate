import React from 'react'
import { FaGithubAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <section className="h-screen flex flex-col w-full justify-center items-center xl:p-10">
      <div className="max-w-[1440px] w-full flex flex-col justify-center items-center">
        <h1 className='w-full font-bold text-[36px] mb-2'>
          <span className='text-primary-text'>Want to know more</span>
          <span className='text-accent'>?</span>
        </h1>
        <p className="text-secondary-text xl:text-[15px] 2xl:text-[17px] mb-20">
          Trademate is a work in progress by <span className='text-accent font-bold'>Luke Teo</span>. Though it is his dream to create more open source projects that benefits someone down the road, it is still difficult for a single man to complete a full-scale application on his own. If you are interested in contibuting to this project, do not hesitate to contact him through the following methods: 
        </p>
        <div className='flex flex-col md:flex-row justify-center items-center'> 
          <a href="https://github.com/teoyi/" target="_blank" className='flex flex-col justify-center items-center hover:scale-105'>
            <i className='text-accent xl:text-[150px] 2xl:text-[200px]'><FaGithubAlt /></i>
            <p className='2xl:text-[24px]'>@teoyi</p>
          </a>
          <p className='mx-20 2xl:mx-[10rem] 2xl:text-[25px]'>or</p>
          <a href="mailto:yipengteo.luke@gmail.com" className='flex flex-col justify-center items-center hover:scale-105'>
            <i className="text-accent xl:text-[150px] 2xl:text-[200px]"><SiGmail /></i>
            <p className='2xl:text-[24px]'>yipengteo.luke@gmail.com</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
