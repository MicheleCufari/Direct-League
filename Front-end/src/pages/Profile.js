
import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { BsEyeFill, BsEyeSlashFill, BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getSubscribers } from "../api"
import '../Player.css'

const Profile = ({username , eye , setEye})=>{
    
    const [subscriber, setSubscriber] = useState([]);

    const getSubscriber = async(username)=>{
    const result = await getSubscribers(username)
    setSubscriber(result);
  }

  console.log(subscriber)

   useEffect(()=>{  
   if(username!==""){
    getSubscriber(username)
   }
    },[])


    
    return (
        <>
         <div className="container col-12 mt-5 p-5 mb-2">

                <h2 className="d-flex justify-content-center mb-5 text-danger">Profile</h2>

            {subscriber.map((el)=>{
        return <Container className="col-12 col-md-4" key={el.id}>
                        <Card className="" id="fullPlayer" >
                            <Card.Header className="d-flex justify-content-evenly align-items-center">
                                
                                <h4 >
                                    Username: {el.username}
                                </h4>
                            
                            <Link to={`/edit/${el.id}`} className='btn btn-sm btn-warning ms-2'>
                                <BsPencilFill/>
                            </Link>

                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center"><h6>Nome e Cognome:</h6> <h5>{el.firstName} {el.lastName}</h5></div>
                                <div className="d-flex justify-content-between align-items-center"><h6>Email:</h6> <h5>{el.email}</h5></div>
                                <div className="d-flex justify-content-between align-items-center"><h6>Password:</h6> {eye === false ? (
                                    <h5 className="">********** <BsEyeFill className="ms-2" onClick={()=>{setEye(true)}}/></h5>
                                ) : (
                                    <h5>{el.password} <BsEyeSlashFill onClick={()=>{setEye(false)}}/></h5>
                                )}</div>
                                <div className="d-flex justify-content-between align-items-center"><h6>Squadra del cuore:</h6> <h5>{el.clubLove}</h5></div>
                            </Card.Body>

                            
                        </Card>
                        <Card className="col-12" id="singlePlayer" >
                            <Card.Header className="">
                                
                                <h3 >
                                    Username: {el.username}
                                </h3>
                            
                            <Link to={`/edit/${el.id}`} className='btn btn-sm btn-warning'>
                                <BsPencilFill/>
                            </Link>

                            </Card.Header>
                            <Card.Body>
                                <div><h6>Nome e Cognome:</h6> <h5>{el.firstName} {el.lastName}</h5></div>
                                <div><h6>Email:</h6> <h5>{el.email}</h5></div>
                                <div><h6>Password:</h6> <h5>{el.password}</h5></div>
                                <div><h6>Squadra del cuore:</h6> <h5>{el.clubLove}</h5></div>
                            </Card.Body>
                            <Card.Footer>{el.email} {el.password} {el.dateOfBirth} {el.clubLove}</Card.Footer>
                        </Card>
                </Container>
    })}
    </div>
        </>
    )
}

export default Profile;