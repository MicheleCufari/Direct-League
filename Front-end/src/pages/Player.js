import { useCallback, useEffect, useState } from 'react'
import { Button, Card, Row } from 'react-bootstrap'
import { Bs0Circle, BsArrow90DegLeft, BsArrowRightShort, BsHouseExclamation } from 'react-icons/bs'
import { FaTshirt } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { getClubById } from '../api'
import '../Player.css'

const Player = ({setInputClub, allClub, dark }) => {
  const { clubId } = useParams()

  const [club, setClub] = useState({})

  const [players, setPlayers] = useState([])

  console.log(club)

  const loadUSer = useCallback(async () => {
    const result = await getClubById(clubId)
    if (result.ok) {
      console.log(result.data)
      console.log(result.data.players)
      setClub(result.data)
      setPlayers(result.data.players)
    } else {
      console.log(result.data)
    }
  }, [clubId])

  const darkMode = ()=>{
    if(dark == false){
        document.body.style.backgroundColor = "white"
    } else{
        document.body.style.backgroundColor = "black"
    }
  }

  useEffect(() => {
    document.body.classList = "h-100"
    loadUSer()
  }, [clubId, loadUSer])

  useEffect(()=>{darkMode()},[dark])

  return (
    <>
      <div  className="container d-flex justify-content-center mt-5" >

        

        <div className='col-12 mt-4' id='singlePlayer'>
            {players.map((el) => {
                  return  <div className="col-12 text-center" key={el.id}>
                      
                        <Card key={el.id} className=" rounded-4 bg-danger bg-gradient text-decoration-none text-white mb-5 mt-5">
                          <Card.Header className='bg-transparent border-0'>
                           <Link to={`/singleplayer/${el.id}`}>  <img alt={el.id} src={el.urlImg} /> </Link>
                          </Card.Header>
                          <Card.Body>
                            <Link className='text-decoration-none text-white' to={`/singleplayer/${el.id}`}> <h5>{el.firstName}</h5></Link> 
                            <Link className='text-decoration-none text-white' to={`/singleplayer/${el.id}`}> <h4>{el.lastName}</h4></Link> 
                            <h2 className='d-flex justify-content-center align-items-center'><FaTshirt/> <BsArrowRightShort/> {el.shirtNumber}</h2>
                          </Card.Body>
                        </Card>
                      
                    </div>
                 
          }  ) }
        </div>
          
          <div className='col-2 me-4 mt-5' id='fullPlayer'>
                  <Link to="/club" >
        <Button
          variant="danger"
          className='mt-3'
          onClick={() => {
            setInputClub('')
          }}
        >
          <BsArrow90DegLeft/>
        </Button>
      </Link>
         <ul className='mt-5 list-group ' id='fullPlayer'>
            {allClub.map((el)=>{
              return <li key={el.id} className="list-group-item list-group-item-danger">
                <Link to={`/${el.id}/players`} className="text-decoration-none text-dark ">
                  {el.name}
                </Link>
              </li>
            })}
          </ul>
          </div>
        <div className='col-8 mt-3' id='bg'>
          <div className="col-12 d-flex text-center mb-5">
          <Row className="mt-5" id='fullPlayer'>
            {players.map((player) => {
              if (player.position === 'Porta') {
                return (
                 
                    <div className="col-12 d-flex justify-content-center" key={player.id}>
                      <div className="col-12 col-md-3 mb-5   align-items-center">
                        <Card key={player.id} className=" rounded-4 bg-dark bg-gradient text-decoration-none text-white">
                          <Card.Header className='bg-transparent border-0'>
                           <Link to={`/singleplayer/${player.id}`}>  <img alt={player.id} src={player.urlImg} /> </Link>
                          </Card.Header>
                          <Card.Body>
                            <Link className='text-decoration-none text-white' to={`/singleplayer/${player.id}`}> <h5>{player.firstName}</h5></Link> 
                            <Link className='text-decoration-none text-white' to={`/singleplayer/${player.id}`}> <h4>{player.lastName}</h4></Link> 
                            <h4 className='d-flex justify-content-center align-items-center'><FaTshirt/> <BsArrowRightShort/> {player.shirtNumber}</h4>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                 
                )
              } else if (player.position === 'Difesa') {
                return (
                  
                    <div className="col-12 col-md-3 mb-5 mt-2  align-items-center" key={player.id}>
                      <Card key={player.id} className=" rounded-4 bg-dark bg-gradient text-white">
                        <Card.Header className='bg-transparent border-0'>
                        <Link to={`/singleplayer/${player.id}`}> <img alt={player.id} src={player.urlImg} /> </Link> 
                        </Card.Header >
                        <Card.Body>
                          <Link className='text-decoration-none text-white' to={`/singleplayer/${player.id}`}> <h5>{player.firstName}</h5></Link>
                          <Link className='text-decoration-none text-white' to={`/singleplayer/${player.id}`}><h4>{player.lastName}</h4></Link>
                            <h4 className='d-flex justify-content-center align-items-center'><FaTshirt/> <BsArrowRightShort/> {player.shirtNumber}</h4>
                        </Card.Body>
                      </Card>
                    </div>
                  
                )
              } else if (player.position === 'Terzino') {
                return (
                
                    <div className="col-12 col-md-3 mb-5 mt-2  align-items-center" key={player.id}>
                      <Card
                        key={player.id}
                        className=" rounded-4 bg-dark bg-gradient"
                        style={{ marginTop: '100px' }}
                      >
                        <Card.Header className='bg-transparent border-0'>
                          <Link to={`/singleplayer/${player.id}`}> <img alt={player.id} src={player.urlImg} /> </Link> 
                        </Card.Header>
                        <Card.Body>
                          <Link className='text-decoration-none text-white' to={`/singleplayer/${player.id}`}> <h5>{player.firstName}</h5></Link>
                          <Link className='text-decoration-none text-white' to={`/singleplayer/${player.id}`}><h4>{player.lastName}</h4></Link>
                            <h4 className='d-flex justify-content-center align-items-center text-white'><FaTshirt/> <BsArrowRightShort/> {player.shirtNumber}</h4>
                        </Card.Body>
                      </Card>
                    </div>
               
                )
              } else if (
                player.position === 'Centrocampo Centrale' ||
                player.position === 'Attacco Centrale'
              ) {
                return (
                 
                    <div
                      className="col-12 col-md-4 mb-5 mt-2 ms-4 align-items-center"
                      style={{ marginTop: '200px' }}
                      key={player.id}
                    >
                      <Card key={player.id} className="mx-5 mt-5 rounded-4 bg-dark bg-gradient text-white">
                        <Card.Header className='bg-transparent border-0'>
                          <Link to={`/singleplayer/${player.id}`}><img alt={player.id} src={player.urlImg} /></Link> 
                        </Card.Header>
                        <Card.Body>
                          <Link className='text-decoration-none text-white' to={`/singleplayer/${player.id}`}> <h5>{player.firstName}</h5></Link>
                          <Link className='text-decoration-none text-white' to={`/singleplayer/${player.id}`}><h4>{player.lastName}</h4></Link>
                            <h4 className='d-flex justify-content-center align-items-center'><FaTshirt/> <BsArrowRightShort/> {player.shirtNumber}</h4>
                        </Card.Body>
                      </Card>
                    </div>
              
                )
              }
              return (
                <div className="col-12 col-md-3 mb-5 mt-2 ms-5" key={player.id}>
                  
                    <Card key={player.id} className=" rounded-4 bg-dark bg-gradient text-decoration-none text-white">
                      <Card.Header className='bg-transparent border-0'>
                       <Link to={`/singleplayer/${player.id}`}> <img alt={player.id} src={player.urlImg} /></Link>
                      </Card.Header>
                      <Card.Body>
                        <Link className='text-decoration-none text-white' to={`/singleplayer/${player.id}`}> <h5>{player.firstName}</h5></Link>
                        <Link className='text-decoration-none text-white' to={`/singleplayer/${player.id}`}><h4>{player.lastName}</h4></Link>
                            <h4 className='d-flex justify-content-center align-items-center'><FaTshirt/> <BsArrowRightShort/> {player.shirtNumber}</h4>
                      </Card.Body>
                    </Card>
                  
                </div>
              )
            })}
          </Row>
        </div>
        </div>
        <div className='col-2 ms-5 mt-3' id='fullPlayer'>
            {allClub.map((el)=>{
              if(clubId == el.id){
                return (
                  <div className='mt-5 rounded-4 text-center bg-danger bg-gradient p-2'>
                    <Link to={`/club/${el.name}`}><img alt={el.id} src={el.logo} style={{height:"200px"}}/></Link>
                  </div>
                )
              }
                return <></>
            })}
        </div>
        
        
        
      </div>
    </>
  )
}

export default Player
