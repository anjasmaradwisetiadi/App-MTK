
import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import { sidebarOpenReducer } from "../../store/Navbar/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { Dropdown } from "flowbite-react";
import { useNavigate, useLocation } from "react-router-dom";

const NavbarComponent = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getIsSidebarOpen = useSelector((state)=> state.navbar.isSidebarOpen);
    const openSidebar = () =>{
        dispatch(sidebarOpenReducer(!getIsSidebarOpen));
    }

    const buttonProfileComponent = ()=>{
        return (
            <div className="flex align-center items-center justify-center text-white cursor-pointer">
                <div className="">
                    <span className="material-symbols-outlined md:text-2xl lg:text-2xl text-4xl">
                        person
                    </span>
                </div>
                <div className="flex hidden lg:block">
                    <span className="text-xs lg:text-base">
                        Bonnie Green
                    </span>
                    <span className="material-symbols-outlined">
                        arrow_drop_down
                    </span>
                </div>
            </div>
        )
    }
    
    return(
        <>
        <Navbar fluid className="z-30 w-full bg-blue-primary border-b border-gray-800 dark:border-gray-700 fixed">
            <div className="w-full p-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Navbar.Brand href="/">
                        <span className="self-center whitespace-nowrap text-2xl lg:text-3xl font-semibold text-white">
                            App User
                        </span>
                        </Navbar.Brand>
                    </div>
                    <div className="flex items-center gap-3">
                        <DarkThemeToggle className="bg-white" />
                        <button
                            data-collapse-toggle="navbar-default"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 bg-white"
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
                        <div>
                        <Dropdown label="" dismissOnClick={false} renderTrigger={buttonProfileComponent}>
                            <Dropdown.Header>
                                <span className="block text-sm">Bonnie Green</span>
                                <span className="block truncate text-sm font-medium">bonnie@flowbite.com</span>
                            </Dropdown.Header>
                            <Dropdown.Item onClick={()=>(navigate('/profile'))}>Profile</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Sign out</Dropdown.Item>
                        </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
        </>
    )
}

export default NavbarComponent;