import { Outlet } from 'react-router-dom';
import AuthNavbar from '../Nav/AuthNavbar';

const Layout = () => {
  return (
    <div className="App bg-base h-full text-primary-text flex justify-center font-poppins">
      <div className="w-full">
          <nav className='w-full flex flex-row justify-between items-center h-[100px] xl:px-10 2xl:px-10'>
            <AuthNavbar />
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