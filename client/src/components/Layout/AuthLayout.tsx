import { Outlet } from 'react-router-dom';
import AuthNavbar from '../Nav/AuthNavbar';

const Layout = () => {
  return (
    <div className="App bg-base h-full text-primary-text flex justify-center font-poppins">
      <div className="w-full">
          <nav className='w-full absolute flex flex-row justify-between items-center h-[100px] px-10 xl:px-10 2xl:px-10'>
            <AuthNavbar />
          </nav>
          <main className=''>
            <Outlet />
          </main>
          <footer></footer>
      </div>
    </div>
  )
}

export default Layout