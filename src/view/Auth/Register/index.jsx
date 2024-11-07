import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { utilize } from "../../../utilize";
import './index.scss';
import { errorHandle } from "../../../utilize/ErrorHandle";
import { registerService } from "../../../service/Auth";
import Swal from "sweetalert2";

const Register = ()=>{
    const navigate = useNavigate();
    const isLoading = false;

    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // ******** error state on form 
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [formatEmailError, setFormatEmailError] = useState(false);


    const onRegister = (e) =>{
        e.preventDefault(); // Mencegah halaman reload
        if(!checkValidity()){
            const payload = {
                email: email,
                password: password,
                name: name
            }
            const response = registerService(payload)
            response.then((result)=>{
                if (result.success) {
                    Swal.fire({
                        title: "Successfull Login ",
                        text: "You will redirect to Login",
                        icon: "success",
                        confirmButtonText: "Go To Login",
                        confirmButtonColor:"#1874e7",
                      }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/login')
                        }
                      });
                  } else {
                    // Menangani error jika diperlukan
                    errorHandle.errorMessage(result.error.response.data.error)
                  }
            })
        }  else {
            errorHandle.errorMessage('Check name, email and password input fill')
        } 
    }

    const checkValidity = ()=>{
        const nameValidate = name.length ? false : true;
        const emailValidate = email.length ? false : true;
        const passwordValidate = password.length ? false : true; 
        const emailFormatValidate = utilize.checkFormatEmail(email) ? false : true
        
        setNameError(nameValidate)
        setEmailError(emailValidate)
        setPasswordError(passwordValidate)
        setFormatEmailError(emailFormatValidate)

        return ( nameValidate
            || emailValidate 
            || passwordValidate 
            || emailFormatValidate)
    }


    return (
        <>
            <div
                id="ModalLoading"
            >
                    {isLoading && createPortal(
                        <LoadingComponent></LoadingComponent>,
                        document.body
                    )}
            </div>
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
                        <h2 className="text-3xl font-semibold text-gray-800 mb-1">Hello!</h2>
                        <p className="text-gray-500 mb-8">Sign Up to Get Started</p>
                        <form className="space-y-4" onSubmit={onRegister}>
                            <div className="relative">
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full py-3 mb-2 px-6 pl-10 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-500 indent-3"
                                />
                                <span className="absolute left-4 top-2.5 text-gray-400 material-symbols-outlined text-2xl">
                                    person
                                </span>
                                {
                                    nameError && 
                                    (<span className="invalid-feedback"> Please fill your full name</span>)
                                }
                            </div>
                            <div className="relative">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="  Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full py-3 mb-2 px-6 pl-10 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-500 indent-3"
                                />
                                <span className="absolute left-4 top-2.5 text-gray-400 material-symbols-outlined text-2xl">
                                    mail
                                </span>
                                {
                                        emailError && 
                                        (<span className="invalid-feedback"> Please fill your mail</span>)
                                    }
                                    {
                                        !emailError 
                                        && formatEmailError 
                                        && (<span className="invalid-feedback"> Please fill your format mail correct</span>)
                                    }
                            </div>
                            <div className="relative">
                            <input
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full py-3 px-6 pl-10 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-500 indent-3"
                            />
                                <span className="absolute left-4 top-2.5 mr-2 text-gray-400 material-symbols-outlined text-2xl">
                                    lock
                                </span>
                                {
                                        passwordError && 
                                        (<span className="invalid-feedback" > Please fill your password</span>)
                                    }
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:bg-gray-300"
                            >
                            Register
                            </button>
                        </form>
                        <p className="text-center text-gray-500 mt-4">
                            <a onClick={()=>navigate('/login')} className="hover:underline cursor-pointer">
                                I have account
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register