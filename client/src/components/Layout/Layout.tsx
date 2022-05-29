import { Outlet } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import MobileNavbar from '../Nav/MobileNavbar';

const Layout = () => {
  return (
    <div className="App bg-base h-full text-primary-text flex flex-col justify-center items-center font-poppins m-0">
      <nav className={`fixed top-0 z-50 w-full lg:max-w-[1440px]`}>
        <Navbar />
        <div className="w-full">
          <MobileNavbar />
        </div>
      </nav>
      <main className='w-full'>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}

export default Layout