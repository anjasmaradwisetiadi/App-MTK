import { useNavigate, useLocation } from "react-router-dom";
import './index.scss'

const Login = ()=>{
    const navigate = useNavigate();
    return (
        <>
            <div className='w-screen h-screen flex'>
                <div className='hidden lg:flex flex-col h-full justify-center items-start align-items-start px-36 w-1/2 bg-gradient-to-b from-[#0575E6] to-[#021B79] relative text-white'>
                    <div className='w-56 tilte-scroll scrolled fade-in-bottom'>
                        <div className='text-4xl font-bold'>
                            Go Finance
                        </div>
                        <div className='mt-4 text-2xl'>
                            Lorem Ipsum testing
                        </div>
                        <div className='mt-8'>
                            <button 
                                className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full font-medium text-lg'
                                onClick={()=>(navigate('/about'))}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center w-full lg:w-1/2 p-10'>
                    <div className="max-w-xs mx-auto w-full form-login-scroll scrolled fade-in-bottom">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-1">Hello Again!</h2>
                        <p className="text-gray-500 mb-8">Welcome Back</p>
                        <form action="#" className="space-y-4">
                            <div className="relative flex justify-center items-center">
                                <input
                                    type="email"
                                    placeholder="  Email Address"
                                    className="w-full py-3 mb-2 px-6 pl-10 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-500"
                                />
                                <span className="absolute left-4 top-2.5 text-gray-400 material-symbols-outlined text-2xl">
                                    mail
                                </span>
                            </div>
                            <div className="relative">
                            <input
                                type="password"
                                placeholder="  Password"
                                className="w-full py-3 px-6 pl-10 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-500"
                            />
                                <span className="absolute left-4 top-2.5 mr-2 text-gray-400 material-symbols-outlined text-2xl">
                                    lock
                                </span>
                            </div>
                            <button
                            type="submit"
                            className="w-full py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700"
                            >
                            Login
                            </button>
                        </form>
                        <p className=" flex justify-center text-center text-center text-gray-500 mt-4">
                            <a href="#" className="hover:underline">
                            Forgot Password
                            </a>
                            <span className="font-bold">&ensp; Or &ensp;</span>
                            <a onClick={()=>(navigate('/register'))} className="hover:underline cursor-pointer">
                                Create Account ?
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login