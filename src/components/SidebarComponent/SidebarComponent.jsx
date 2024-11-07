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
import { useNavigate, useLocation } from "react-router-dom";
import { sidebarOpenReducer } from "../../store/Navbar/Navbar";


const SidebarComponent = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [currentPage, setCurrentPage] = useState("");
    const [isSideBarOpen, setIsSidebarOpen] = useState(true);
    const getIsSidebarOpen = useSelector((state)=> state.navbar.isSidebarOpen);
    

    useEffect(() => {
        setIsSidebarOpen(getIsSidebarOpen)
    }, [getIsSidebarOpen]);

    useEffect(()=>{
        window.addEventListener('resize', onResize)
    },[])

    const onResize = ()=>{
        let windowWidth = window.innerWidth

        if (windowWidth >= 576) {
          setIsSidebarOpen(true)
          dispatch(sidebarOpenReducer(true));
        } else {
          setIsSidebarOpen(false)
          dispatch(sidebarOpenReducer(false));
        }
    } 

    const closeSideBarOutside = () =>{
        setIsSidebarOpen(false)
        dispatch(sidebarOpenReducer(false));
    } 

    return (
        <>
            <Sidebar aria-label="Sidebar with multi-level dropdown example" className={
                    isSideBarOpen ? "absolute z-30 bg-neutral-300 h-full top-0 left-0 js-scroll scrolled slide-left color-red" : "lg:hidden js-scroll scrolled slide-right z-20 absolute top-0 left-0  color-red"}>
                <div className="flex h-full flex-col justify-between py-2 pt-24">
                    <div>
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                        <Sidebar.Item
                            onClick={()=>(navigate('/users'))}
                            icon={HiUsers}
                            className={
                            "/users" === location.pathname
                                ? "bg-gray-200 dark:bg-gray-700 cursor-pointer"
                                : "cursor-pointer"
                            }
                        >
                            Users list
                        </Sidebar.Item>
                        <Sidebar.Item
                            onClick={()=>(navigate('/unknown'))}
                            icon={HiShoppingBag}
                            className={
                            "/unknown" === location.pathname
                                ? "bg-gray-200 dark:bg-gray-700 cursor-pointer"
                                : "cursor-pointer"
                            }
                        >
                            Unknown
                        </Sidebar.Item>
                        <Sidebar.Item
                            onClick={()=>(navigate('/about'))}
                            icon={HiCollection}
                            className={
                            "/about" === location.pathname
                                ? "bg-gray-200 dark:bg-gray-700 cursor-pointer"
                                : "cursor-pointer"
                            }
                        >
                            About
                        </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                    </div>
                </div>
            </Sidebar>
            <div
                id="modal-bg" 
                onClick={closeSideBarOutside}
                className= { isSideBarOpen ?  'w-full h-full z-20 fixed top-0 right-0 blur-background-sidebar lg:hidden':''}
            >
            </div>
        </>
    )
}

export default SidebarComponent