import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="App bg-base h-full">
        <nav></nav>
        <main>
            <Outlet />
        </main>
        <footer></footer>
    </div>
  )
}

export default Layout