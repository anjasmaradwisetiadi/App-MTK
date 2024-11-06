import { Sidebar, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import { ImProfile } from "react-icons/im";
import './index.scss'


const SidebarComponent = ()=>{
    const [currentPage, setCurrentPage] = useState("");
    const [isSideBarOpen, setIsSidebarOpen] = useState(true);
    const getIsSidebarOpen = useSelector((state)=> state.navbar.isSidebarOpen);
    

    useEffect(() => {
      const newPage = window.location.pathname;
      setCurrentPage(newPage);
    }, [setCurrentPage]);

    return (
        <>
            <Sidebar aria-label="Sidebar with multi-level dropdown example" className={
                    getIsSidebarOpen ? "absolute z-20 bg-neutral-300 h-full top-0 left-0 js-scroll scrolled slide-left color-red" : "lg:hidden js-scroll scrolled slide-right z-20 absolute top-0 left-0  color-red"}>
                <div className="flex h-full flex-col justify-between py-2 pt-24">
                    <div>
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="/users/list"
                            icon={HiUsers}
                            className={
                            "/users/list" === currentPage
                                ? "bg-gray-100 dark:bg-gray-700"
                                : ""
                            }
                        >
                            Users list
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/e-commerce/products"
                            icon={HiShoppingBag}
                            className={
                            "/e-commerce/products" === currentPage
                                ? "bg-gray-100 dark:bg-gray-700"
                                : ""
                            }
                        >
                            Unknown
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/e-commerce/products"
                            icon={ImProfile}
                            className={
                            "/e-commerce/products" === currentPage
                                ? "bg-gray-100 dark:bg-gray-700"
                                : ""
                            }
                        >
                            Profile
                        </Sidebar.Item>
                        </Sidebar.ItemGroup>
                        <Sidebar.ItemGroup>
                        <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
                            Sign in
                        </Sidebar.Item>
                        <Sidebar.Item href="/authentication/sign-up" icon={HiPencil}>
                            Sign up
                        </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                    </div>
                </div>
            </Sidebar>
            <div
                id="modal-bg" 
                className= { isSideBarOpen ?  'w-full h-full z-20 fixed top-0 right-0 blur-background-sidebar lg:hidden':''}
            >
            </div>
        </>
    )
}

export default SidebarComponent