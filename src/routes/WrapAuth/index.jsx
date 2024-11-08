
import { useNavigate } from "react-router-dom"
import { useEffect, useState, lazy } from "react"
const Unknown = lazy(()=> import ("../../view/Unknown"))
const About = lazy(()=> import ("../../view/About"))
const Users  = lazy(()=> import ("../../view/Users"))

const WrapAuth = (props)=>{
    const { name } = props;
    const [displayPage, setDisplayPage] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        let itemStorage = localStorage.getItem("user") ? localStorage.getItem("user") : null;
        if(itemStorage){
            if (name === '/') {
                setDisplayPage( <Users></Users>) 
            } else if (name === 'users'){
                setDisplayPage( <Users></Users>) 
            } else if (name === 'unknown'){
                setDisplayPage(<Unknown></Unknown>)
            } else if (name === 'about'){
                setDisplayPage(<About></About>) 
            } else {
                navigate("/users")
            }
        } else {
            if(name === 'about'){
                setDisplayPage(<About></About>) 
            } else {
                navigate("/login")
            }
        }
    },[])

    return (
        <>
            {displayPage}
        </>
    )
}

export default WrapAuth