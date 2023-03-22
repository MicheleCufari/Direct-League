import { useEffect, useState } from "react"
import { Col, Container, Row , Form, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { getSubscriberById, postSubscriber, putSubscriber } from "../api"

const Registration = ({createSub,setUsernameString,usernameString, edit})=>{

   
    const navigate = useNavigate()

    const {subscriberId} = useParams();
    

    // const [firstName,setFirstName] = useState("");
    // const [lastName,setLastName] = useState("");
    // const [username,setUsername] = useState("");
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");
    // const [dateOfBirth,setDateOfBirth] = useState("");
    // const [select,setSelect] = useState("")

    const [inputState,setInputState] = useState({
        firstName:"",
        lastName:"",
        username:"",
        email:"",
        password:"",
        dateOfBirth:"",
        select:"",
    })

    const handleInputChange = (input, value) => {
    setInputState({ ...inputState, [input]: value })
  }


    const handleSubmit = async (event)=>{
        event.preventDefault()

        let result = {ok: false , data: []};
        if(edit){
            result = await putSubscriber(inputState,subscriberId)
        } else {
            result = await postSubscriber(inputState)
        }
        
       if (result.ok) {
      // faccio la redirect
      navigate('/')
      setUsernameString(inputState.username)
      
    } else {
      console.log(result.data)
    }
    }

    
     console.log(inputState)

      useEffect(() => {
    if (edit) {
      const loadData = async () => {
        const result = await getSubscriberById(subscriberId);
        if (result.ok) {
          // precarico gli input con i valori dell'utente
          setInputState({
            firstName: result.data.firstName,
            lastName: result.data.lastName,
            username: result.data.username,
            email: result.data.email,
            password: result.data.password,
            dateOfBirth: result.data.dateOfBirth,
            select: result.data.select,
          });
        } else {
          console.log(result.data);
        }
      };
      loadData();
    }
  }, [edit, subscriberId]);
   

    return (
        <>
            <Container>
                <h1 className="d-flex justify-content-center mb-5 text-danger mt-3">{edit ? 'Edit Subscriber' : 'Create Subscriber'}</h1>
                <Row className="align-items-center justify-content-center mt-5">
                    <Col md={6}>
                        <Form className="bg-warning bg-gradient p-5 border border-1 rounded-5" onSubmit={handleSubmit}>
                            <Form.Group controlId="firstName">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control value={inputState.firstName} onChange={(e)=>{handleInputChange(e.target.id, e.target.value)}} type="text" placeholder="inserisci il nome..."/>
                            </Form.Group>
                            <Form.Group controlId="lastName">
                                <Form.Label>Cognome</Form.Label>
                                <Form.Control value={inputState.lastName} onChange={(e)=>{handleInputChange(e.target.id, e.target.value)}} type="text" placeholder="inserisci il cognome..."/>
                            </Form.Group>
                            <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control value={inputState.username} onChange={(e)=>{handleInputChange(e.target.id, e.target.value)}} type="text" placeholder="inserisci l'username..."/>
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={inputState.email} onChange={(e)=>{handleInputChange(e.target.id, e.target.value)}} type="email" placeholder="inserisci la email..."/>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control value={inputState.password} onChange={(e)=>{handleInputChange(e.target.id, e.target.value)}} type="password" placeholder="inserisci la password..."/>
                            </Form.Group>
                            <Form.Group controlId="dateOfBirth">
                                <Form.Label>Data di nascita</Form.Label>
                                <Form.Control value={inputState.dateOfBirth} onChange={(e)=>{handleInputChange(e.target.id, e.target.value)}} type="date" placeholder="inserisci la data di nascita..."/>
                            </Form.Group>
                            <Form.Select aria-label="Default select example" className="mt-4" value={inputState.select} onChange={(e)=>{handleInputChange(e.target.id, e.target.value)}} >
                                <option>Scegli la tua squadra preferita</option>
                                <option>Milan</option>
                                <option>Juventus</option>
                                <option>Inter</option>
                                <option>Real Madrid</option>
                                <option>Barcellona</option>
                                <option>Atletico Madrid</option>
                                <option>Liverpool</option>
                                <option>Manchester City</option>
                                <option>Manchester United</option>
                                <option>Chelsea</option>
                                <option>Paris Saint-Germain</option>
                                <option>Bayern Monaco</option>
                                
                            </Form.Select>

                            <Form.Group className="d-flex justify-content-end">
                                <Button type="submit" variant="light" className="mt-5 me-3">Save</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Registration;