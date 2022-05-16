import { Outlet } from 'react-router-dom';
import Navbar from '../Nav/Navbar';

const Layout = () => {
  return (
    <div className="App bg-base h-full text-primary-text flex justify-center font-poppins">
      <div className="max-w-[1440px] w-full">
          <nav className='w-full flex flex-row justify-between items-center h-[100px] xl:px-20 2xl:px-10'>
            <Navbar />
          </nav>
          <main className='px-10'>
            <Outlet />
          </main>
          <footer></footer>
      </div>
    </div>
  )
}

export default Layout