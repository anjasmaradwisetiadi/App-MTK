import Login from "../../view/Auth/Login"
import Register from "../../view/Auth/Register"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const WrapNonAuth = (props)=>{
    const { name } = props;
    const [displayPage, setDisplayPage] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        let itemStorage = localStorage.getItem("user") ? localStorage.getItem("user") : null;
        if(itemStorage){
            navigate("/users")
        } else {
            if (name === 'register') {
                setDisplayPage( <Register></Register>) 
            } else if (name === 'login'){
                setDisplayPage( <Login></Login>) 
            } else {
                navigate("/users")
            }
        }
    },[])

    return (
        <>
            {displayPage}
        </>
    )
}

export default WrapNonAuth