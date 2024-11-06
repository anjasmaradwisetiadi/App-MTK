

import LoadingComponent from '../../components/LoadingComponent/LoadingComponent'
import { Button } from "flowbite-react";
import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
const Dashboard = ()=>{

    return(
        <div id="Dashboard">
            <div className="w-full">
                <p>Dashboard Component</p>
                <h1 className="text-3xl font-bold underline">
                        Hello world!
                </h1>
                <Button>Click me</Button>
                <Banner>
                    <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
                        <div className="mx-auto flex items-center">
                        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                            <MdAnnouncement className="mr-4 h-4 w-4" />
                            <span className="[&_p]:inline">
                            New brand identity has been launched for the&nbsp;
                            <a
                                href="https://flowbite.com"
                                className="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
                            >
                                Flowbite Library
                            </a>
                            </span>
                        </p>
                        </div>
                        <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
                        <HiX className="h-4 w-4" />
                        </Banner.CollapseButton>
                    </div>
                </Banner>
            </div>  
        </div>
    )
}

export default Dashboard;