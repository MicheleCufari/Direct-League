import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import logoLight from "../images/logoMicheleLight.gif"
import logoDark from "../images/logoMicheleDark.gif"
import '../Player.css'

const LoadPage = ({ dark })=>{

    const navigate = useNavigate()

    const backToHome = ()=>{
        navigate("/")
    }

    useEffect(()=>{
        
        setTimeout(backToHome,2000)
        
    },[])

    return (
        <>
            {dark === false ? (
                 <div id="fullPlayer">
                <div className="d-flex justify-content-center align-items-center mt-5 p-5" >
                <img alt='ciao' src={logoLight} />
            </div>
             </div>
            ) :  (
                <div id="fullPlayer">
                <div className="d-flex justify-content-center align-items-center mt-5 p-5" >
                <img alt='ciao' src={logoDark} />
            </div>
             </div>
            )}

             {dark === false ? (
                <div  id="singlePlayer">
                <div className="">
                <img alt='ciao' src={logoLight} />
            </div>
             </div>
             ) : (
                <div  id="singlePlayer">
                <div className="">
                <img alt='ciao' src={logoDark} />
            </div>
             </div>
             )}
        </>
    )
}

export default LoadPage