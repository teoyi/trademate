import { Outlet } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import MobileNavbar from '../Nav/MobileNavbar';

const Layout = () => {
  return (
    <div className="App bg-base h-full text-primary-text flex flex-col justify-center items-center font-poppins m-0 overflow-x-hidden">
      <nav className='sticky top-0 z-50  w-full lg:max-w-[1440px]'>
        <Navbar />
        <MobileNavbar />
      </nav>
      <main className='px-10 max-w-[1440px] w-full'>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}

export default Layout