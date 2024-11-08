import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate
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
  const itemStorage = localStorage.getItem("user") ? localStorage.getItem("user") : null;

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route) {
        return <Route exact path={route.route} element={route.element} key={route.key} />;
      } 
      return null
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
        <main className='flex h-full w-full z-20 overflow-hidden mb-6'>
            { 
              ((currentPath !== '/login') 
              && (currentPath !== '/register')) 
              && itemStorage
              && (<SidebarComponent></SidebarComponent>)
            }

              <div className="w-full h-full flex relative justify-center relative overflow-x-hidden overflow-y-hidden">
                  <section className={(currentPath !== '/login') && (currentPath !== '/register') ? 'pt-20 px-8 w-full flex':''}>
                  { 
                    // for flll empty space 
                    ((currentPath !== '/login') && (currentPath !== '/register')) &&
                    ( <div className="lg:w-64 lg:ml-8"></div>)
                  }
                    <Routes key={location.pathname}>
                            {getRoutes(router)}
                            <Route path="*" element={<ErrorPage />} />
                    </Routes>
                  </section>
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
