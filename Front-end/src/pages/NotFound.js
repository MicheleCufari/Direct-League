import { useEffect } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { BsHouseExclamation } from "react-icons/bs";
import { Link } from "react-router-dom"



const NotFound = ()=>{

    useEffect(()=>{
       
    },[])

    return (
        <>
            <div className="position-absolute top-50 start-50 translate-middle text-center">
               <Spinner variant="danger"/>
               <Alert className="mt-5" variant="danger">
                 Non è la partita che cercavi!
               </Alert>
                <Link to="/" className="btn btn-danger mt-5"><BsHouseExclamation/></Link>
            </div>
        </>
    )
}

export default NotFound;