import '../css/global.css';
import spinner from "../assets/animated/spinner.svg"

const Loading = ()=>{
    return(
        <div className="modal-wrapper">
            <img src={spinner} alt="spinner" /> 
        </div>
    )
}

export default Loading;