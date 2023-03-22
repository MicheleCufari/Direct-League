
import { useEffect } from 'react'
import { Alert, Carousel, Container, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import "../HomePage.css"
import AccordionItem from './AccordionItem'
import Classifica from './Classifica'
import MatchSlide from './MatchSlide'
import News from './News'
import '../Player.css'
import "../News.css"



const HomePage = ({get,club,inputClub,setInputClub,dark,lang,username}) => {

  const navigate = useNavigate()

  

  const handleSubmit = (event)=>{
  event.preventDefault()
  get(inputClub)
  navigate(`/club/${inputClub}`)
  
}


useEffect(()=>{},[dark])

console.log(inputClub)
  
  return (
    <>
     

        <div>
           <Carousel controls={false} indicators={false} fade={true} >

      <Carousel.Item interval={2000}>
        
        <div id="fullPlayer">
          <img
        
          className="d-block w-100"
          src="https://zon.it/wp-content/uploads/2021/03/Allianz-Arena.jpg"
          alt="First slide"
          style={{height:"762px" , filter: "blur(2px)" , marginTop:"72px"}}
          
        />
        </div>
         <div id="singlePlayer">
          <img
          className="d-block w-100"
          src="https://zon.it/wp-content/uploads/2021/03/Allianz-Arena.jpg"
          alt="First slide"
          style={{height:"200px" , marginTop:"72px"}}
          
        />
         </div>
        <div id='singlePlayer' >
          <Alert variant='danger' className="text-center">Il miglior sito sulle Notizie e Aggiornamenti sulla Super Lega</Alert>
        </div>
        {lang === false ? (
          <Form id='news' onSubmit={handleSubmit} className='position-absolute top-50 start-50 translate-middle shadow-lg bg-danger w-50 p-5 text-center rounded-4'>
            <Form.Group>
              <Form.Label><h5>Qual è la tua squadra preferita?</h5></Form.Label>
              <Form.Control type='text' value={inputClub} onChange={(e)=>{setInputClub(e.target.value)}} placeholder='inserisci il nome della squadra...' />
            </Form.Group>
          </Form>
        ): (
          <Form id='news' onSubmit={handleSubmit} className='position-absolute top-50 start-50 translate-middle shadow-lg bg-danger w-50 p-5 text-center rounded-4'>
            <Form.Group>
              <Form.Label><h5>Which is your favourite team?</h5></Form.Label>
              <Form.Control type='text' value={inputClub} onChange={(e)=>{setInputClub(e.target.value)}} placeholder='insert the team name...' />
            </Form.Group>
          </Form>
        )}
        
      </Carousel.Item>

      {/* <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80"
          alt="Second slide"
          style={{height:"700px"}}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://st.depositphotos.com/1162190/1951/i/600/depositphotos_19511151-stock-photo-green-soccer-field.jpg"
          alt="Third slide"
          style={{height:"700px"}}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}

       
    </Carousel>

    <Container fluid className='bg-danger mt-5'>
      <Container >
      <MatchSlide />
    </Container>
    </Container>


      <Container fluid className='bg-danger mb-5 mt-5 col-12'>     
        {username !== "" ? (
          <News lang={lang}/>
        ) : (
          <Link to="/registration" className='text-decoration-none'><Alert variant='danger' className='text-center p-5 '>{lang === false ? (
            <h3>Registrati per avere accesso alle notizie!</h3>
          ) : (
            <h3>Register to get access to the news!</h3>
          )}</Alert></Link>
        )}
      </Container>

      <Container className='mb-5'>
        <div className='col-12 '>
       
           
             <Row>
              <AccordionItem lang={lang}/>
           
              <Classifica lang={lang} />
             </Row>
            
         
        </div>
      </Container>
        </div>
    </>
  )
}

export default HomePage
