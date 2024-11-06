import '../../css/global.css';
import spinner from "../../assets/animated/spinner.svg"

const LoadingComponent = ()=>{
    return(
        <div className="modal-wrapper">
            <img src={spinner} alt="spinner" /> 
        </div>
    )
}

export default LoadingComponent;