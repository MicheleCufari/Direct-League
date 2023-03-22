import { useEffect } from 'react'
import { Button, Card, Col, Container } from 'react-bootstrap'
import { BsArrow90DegLeft } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'

const SingleClub = ({ club, setInputClub, dark }) => {
  const { clubName } = useParams()

  console.log(clubName)
  console.log(club.name)

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

  return (
    <>
    <Container className='mt-5 d-flex flex-column justify-content-start align-items-center'>
    <Link to="/club" >
        <Button
          variant="danger"
          className='mt-5'
          onClick={() => {
            setInputClub('')
          }}
        >
          <BsArrow90DegLeft/>
        </Button>
      </Link>   
      {club.map((el) => {
        if (el.name === clubName || el.lowerName === clubName) {
         return <Col md={6} className=" mb-5" key={el.id}>
            <div className=" bg-success border-1 rounded-5 m-2 text-white d-flex justify-content-evenly align-items-center mt-5 p-3">
              <div className="m-3 bg-transparent border-0">
                <Link to={`/${el.id}/players`}>
                  <img
                    src={el.logo}
                    alt="img"
                    className="mt-2"
                    style={{ height: '200px' }}
                  />
                </Link>
              </div>
              <div className=''>
                <div className='text-center text-decoration-underline'><h1 className="m-3">{el.name}</h1></div>
                <div className='d-flex flex-column justify-content-start'>
                  <h5>Città : {el.city}</h5>
                  <h5>Paese: {el.country}</h5>
                  <h5>Anno di Fondazione: {el.foundationYear}</h5>
                  <h5>Campionato: {el.league}</h5>
                  <h5>Allenatore: {el.manager}</h5>
                </div>
                
                
              </div>
            </div>
          </Col>
        }

        return <div key={el.id}></div>
      })}
       </Container>
    </>
  )
}

export default SingleClub
