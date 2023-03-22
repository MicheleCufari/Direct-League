import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getMatchById, putMatch } from "../api";
import '../Player.css'

const ClassificaForm = ()=>{

    const {matchId} = useParams()

    const navigate = useNavigate();

     const [inputState,setInputState] = useState({
        homeClub:"",
        awayClub:"",
        goalHomeClub:"",
        goalAwayClub:"",
    })

    const handleInputChange = (input, value) => {
    setInputState({ ...inputState, [input]: value })
  }

  const handleSubmit = async(event)=>{
    event.preventDefault()
     let result = {ok: false , data: []};
     result = await putMatch(inputState,matchId)
    if (result.ok) {
      // faccio la redirect
      navigate('/')
    } else {
      console.log(result.data)
    }
  }
  

  console.log(inputState)

   useEffect(() => {
    
      const loadData = async () => {
        const result = await getMatchById(matchId);
        if (result.ok) {
          // precarico gli input con i valori dell'utente
          setInputState({
            homeClub:result.data.homeClub,
            awayClub:result.data.awayClub,
            goalHomeClub:result.data.goalHomeClub,
            goalAwayClub:result.data.goalAwayClub,
          });
        } else {
          console.log(result.data);
        }
      };
      loadData();
    }, [matchId]);

    return (
        <>

      

        <Container className="col-10 col-md-6 mt-5 ">
             <div id='fullPlayer' >
                  <Form className='d-flex justify-content-center text-center bg-danger p-5 rounded-4'  onSubmit={handleSubmit} > 
           
            <Form.Group className='col-12 col-md-2 d-flex justify-content-center align-items-center text-center me-4' controlId="goalHomeClub">
                <Form.Label>{inputState.homeClub.name}</Form.Label>
               <div><img alt="img" style={{height:"50px"}} src={inputState.homeClub.logo} className=""/></div>
              
                 
                
            </Form.Group>
            <Form.Group className='col-12 col-md-2 d-flex justify-content-center text-center me-4' controlId="goalHomeClub">
              
                <Form.Control className="text-center" type='number' value={inputState.goalHomeClub} onChange={(e)=>{handleInputChange(e.target.id, e.target.value)}}/>
                 
                
            </Form.Group>
            <Form.Group className='col-12 col-md-2 d-flex justify-content-center text-center' controlId="goalAwayClub">
               
                <Form.Control className="text-center" type='number' value={inputState.goalAwayClub} onChange={(e)=>{handleInputChange(e.target.id, e.target.value)}}/>
               
                
            </Form.Group>
            <Form.Group className='col-12 col-md-2 d-flex justify-content-center align-items-center text-center' controlId="goalAwayClub">
               
                <div><img alt="img" style={{height:"60px"}} src={inputState.awayClub.logo} className="me-2"/></div>
                <Form.Label>{inputState.awayClub.name}</Form.Label>
               
                
            </Form.Group>
            
                <Button type="submit">Invia</Button>
           

          </Form>
             </div>

          <Form className=' text-center bg-danger p-5 rounded-4' onSubmit={handleSubmit} id='singlePlayer' style={{marginTop:"100px"}} > 
           
            <Form.Group className='col-12 col-md-2 d-flex justify-content-center align-items-center text-center me-4' controlId="goalHomeClub">
              <div><img alt="img" style={{height:"50px"}} src={inputState.homeClub.logo} className=""/></div>
                <Form.Label className="ms-3 mt-3"><h3>{inputState.homeClub.name}</h3></Form.Label>
                 
                
            </Form.Group>
            <Form.Group className='col-12 col-md-2 d-flex justify-content-center text-center me-4 mt-3' controlId="goalHomeClub">
               
                <Form.Control className="text-center" type='number' value={inputState.goalHomeClub} onChange={(e)=>{handleInputChange(e.target.id, e.target.value)}}/>
                 
                
            </Form.Group>
            <Form.Group className='col-12 col-md-2 d-flex justify-content-center text-center mt-3 ' controlId="goalAwayClub">
               
                <Form.Control className="text-center" type='number' value={inputState.goalAwayClub} onChange={(e)=>{handleInputChange(e.target.id, e.target.value)}}/>
               
                
            </Form.Group>
            
        <Form.Group className='col-12 col-md-2 d-flex justify-content-center text-center me-4 mt-3 align-items-center' controlId="goalHomeClub">
                <div><img alt="img" style={{height:"50px"}} src={inputState.awayClub.logo} className=""/></div> 
                <Form.Label className="mt-3 ms-3"><h3>{inputState.awayClub.name}</h3></Form.Label>
                
            </Form.Group>
                <Button type="submit">Invia</Button>
           

          </Form>
        </Container>
        </>
    )
}

export default ClassificaForm;