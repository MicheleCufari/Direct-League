

import { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsArrow90DegLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Club = ({club,dark,setDark}) => {

  console.log(club)

    const darkMode = ()=>{
    if(dark == false){
        document.body.style.backgroundColor = "white"
    } else{
        document.body.style.backgroundColor = "black"
    }
  }

   useEffect(()=>{
        darkMode()
    },[dark])

  return <>
    <Container>
      <div className='mt-5'>
        <Link className="btn btn-danger m-5" to="/" onClick={()=>{setDark(dark)}}>
        <BsArrow90DegLeft/>
      </Link>
      </div>

       <div className="col-12">
          <Row>
            {club.map((el) => {
            return (
              <Col md={4} className=" mb-5" key={el.id}>
                <Card  className="h-100 bg-danger bg-gradient border-1 rounded-5 text-center m-2 text-white" >
                  <Card.Header className="text-center m-3 bg-transparent border-0">
                   
                     <Link to={`/${el.id}/players`}><img src={el.logo} alt="img" className='mt-2' style={{height:"200px"}}/></Link>                  
                  </Card.Header>
                  <Card.Body>
                    <h3 className='m-3'>{el.name}</h3>
                    
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
          </Row>
        </div>

    </Container>
  </>
}

export default Club
