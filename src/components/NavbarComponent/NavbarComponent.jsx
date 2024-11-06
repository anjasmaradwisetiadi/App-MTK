
import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import { sidebarOpenReducer } from "../../store/Navbar/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";

const NavbarComponent = ()=>{
    const dispatch = useDispatch();

    const getIsSidebarOpen = useSelector((state)=> state.navbar.isSidebarOpen);
    const openSidebar = () =>{
        dispatch(sidebarOpenReducer(!getIsSidebarOpen));
    }
    // useEffect(()=>{
    //     console.log("getCreateResponse = ")
    //     console.log(getCreateResponse)
    // },[])
    
    return(
        <>
        <Navbar fluid className="z-30 w-full bg-white border-b border-gray-800 dark:bg-gray-800 dark:border-gray-700 fixed">
            <div className="w-full p-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Navbar.Brand href="/">
                    <img alt="" src="/images/logo.svg" className="mr-3 h-6 sm:h-8" />
                    <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                        Flowbite
                    </span>
                    </Navbar.Brand>
                </div>
                <div className="flex items-center gap-3">
                    <iframe
                    height="30"
                    src="https://ghbtns.com/github-btn.html?user=themesberg&repo=flowbite-react-admin-dashboard&type=star&count=true&size=large"
                    title="GitHub"
                    width="90"
                    className="hidden sm:block"
                    />
                    <Button color="primary" href="https://flowbite.com/pro/">
                    Upgrade to Pro
                    </Button>
                    <DarkThemeToggle />
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                        onClick={openSidebar}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                        </svg>
                    </button>
                </div>
                </div>
            </div>
        </Navbar>
        </>
    )
}

export default NavbarComponent;