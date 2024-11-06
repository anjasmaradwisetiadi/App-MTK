import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom"
import router from './routes/index.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
// import WrapAuth from './views/auth/WrapAuth/WrapAuth.jsx';
import NavbarComponent from './components/NavbarComponent/NavbarComponent.jsx';
import FooterComponent from './components/FooterComponent/FooterComponent.jsx';
import SidebarComponent from './components/SidebarComponent/SidebarComponent.jsx';

function App() {
  const [count, setCount] = useState(0)
  const [currentPath, setCurrentPath] = useState('');
  const location = useLocation()

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.name !== 'login') {
        return <Route exact path={route.route} element={route.element} key={route.key} />;
      } else {
        return <Route exact path={route.route} element={route.element} key={route.key} />;
      }
      
  });

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <>
      <div className='flex flex-col w-full h-screen bg-gray-200 dark:bg-gray-900'>
        { 
          ((currentPath !== '/login') && (currentPath !== '/register')) &&
          (<NavbarComponent></NavbarComponent>)
        }
        <main className='flex h-full w-full z-20'>
            { 
              ((currentPath !== '/login') && (currentPath !== '/register')) &&
              (<SidebarComponent></SidebarComponent>)
            }
              <div className="w-full h-full flex relative justify-center relative overflow-x-hidden overflow-y-auto pt-28">
                  <div className="lg:w-56 lg:ml-10 ">
                  </div>
                  <Routes key={location.pathname}>
                          {getRoutes(router)}
                          <Route path="*" element={<ErrorPage />} />
                  </Routes>
              </div>
        </main>
        { 
          ((currentPath !== '/login') && (currentPath !== '/register')) &&
          (<FooterComponent></FooterComponent>)
        }
      </div>
    </>
  )
}

export default App
