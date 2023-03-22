import { Button, Container, Form, ListGroup, Modal, Navbar } from 'react-bootstrap'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { BsBoxArrowRight, BsEyeFill, BsEyeSlashFill, BsFacebook, BsFillPersonFill, BsInstagram, BsMoon, BsMoonFill, BsTwitter } from 'react-icons/bs'

import { useEffect, useState } from 'react'
import { getSubscribers } from '../api'
import LogoPrincipale from "../images/logoDirectLeague.png"
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import '../Player.css'

const MainLayout = ({ username, setUsername, setInputClub, dark, setDark, lang, setLang , eye, setEye }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

 

 

  const [subscriber, setSubscriber] = useState([])

  const getSubscriber = async (username) => {
    const result = await getSubscribers(username)
    setSubscriber(result)
  }


  const handleSubmitLogin = (event) => {
    event.preventDefault()
    console.log(subscriber)
    console.log(getSubscriber(username))
    handleClose()

    const ret = getSubscriber(username)
    console.log(ret)
  }

  const logout = () => {
    setUsername('')
  }

   const darkMode = ()=>{
    if(dark == false){
        document.body.style.backgroundColor = "white"
    } else{
        document.body.style.backgroundColor = "black"
    }
  }

  useEffect(()=>{
    if(lang === false ? (
      document.title = "DirectLeague.it"
    ) : (
      document.title = "DirectLeague.uk"
    ))
    document.body.style.position = "relative"
    document.body.style.minHeight = "100vh"
    
    darkMode()
  },[dark])

  return (
    <>

   
    

     <Modal
        show={show}
        onHide={handleClose}
        centered
        className="shadow-lg bg-dark bg-gradient"
        size=""
      >
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title className="d-flex flex-column justify-content-center align-items-center text-center">
            {lang === false ? (
                 <h4> Registrati per avere accesso a privilegi esclusivi!</h4>
            ) : (
                <h4> Register for exclusive privileges!</h4>
            )}
            <Link
              to="/registration"
              onClick={handleClose}
              className="d-flex justify-content-end text-decoration-none "
            >
              {lang === false ? (
                <Button variant="light">Registrati!</Button>
              ) : (
                <Button variant="light">Sing Up!</Button>
              )}
            </Link>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white text-center ">
          <Form onSubmit={handleSubmitLogin}>
            <Form.Group className="mt-2">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
              />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Password</Form.Label>
              {eye === false ? (
                <div className='input-group'>
                <Form.Control type="password"  />
                <Button variant='danger' onClick={()=>{setEye(true)}}><BsEyeFill/></Button>
              </div>
              ) : (
                <div className='input-group'>
                <Form.Control type="text"  />
                <Button variant='danger' onClick={()=>{setEye(false)}}><BsEyeSlashFill/></Button>
              </div>
              )}
            </Form.Group>

            <Button variant='danger' className="mt-3" type='submit'>
              Login
            </Button>

          </Form>
        </Modal.Body>
      </Modal>


      <Navbar bg="danger" expand="md" className="bg-gradient fixed-top justify-content-center p-3">
        <Container >
          {lang === false ? (
            <NavLink to="/" className="navbar-brand" onClick={()=>{setInputClub("")}}>
            {/* <img style={{height:"40px"}} src={LogoPrincipale}/> */}
            Direct League
          </NavLink>
          ): (
            <NavLink to="/" className="navbar-brand" onClick={()=>{setInputClub("")}}>
            {/* <img style={{height:"40px"}} src={LogoPrincipale}/> */}
            Direct League
          </NavLink>
          )}

          
            <NavLink to="/" className="navbar-brand position-absolute start-50 top-50 translate-middle " onClick={()=>{setInputClub("")}}>
             <img style={{height:"60px"}} src={LogoPrincipale}/> 
          
          </NavLink>
         

          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse className="justify-content-end">
            {lang == false ? (
                <NavLink to="/club" className="nav-link ms-3">
              Squadre
            </NavLink>
            ) : (
                <NavLink to="/club" className="nav-link ms-3">
              Clubs
            </NavLink>
            )}
             {lang == false ? (
                <NavLink className="nav-link ms-3">
              <Button variant='transparent' className='' onClick={()=>{setLang(true)}}>{getUnicodeFlagIcon("IT")}</Button>
            </NavLink>
            ) : (
                <NavLink className="nav-link ms-3">
              <Button variant='transparent' onClick={()=>{setLang(false)}}>{getUnicodeFlagIcon("GB")}</Button>
            </NavLink>
            )}
            {dark == false ? (
                <NavLink className="nav-link ms-3">
               <Button variant='light' className='text-center' onClick={()=>{setDark(true)}}><BsMoonFill/></Button>
            </NavLink>
            ) : (
                <NavLink className="nav-link ms-3">
              <Button variant='dark' className='text-center' onClick={()=>{setDark(false)}}><BsMoonFill/></Button>
            </NavLink>
            )}
            
            {username === 'admin' || username === 'Admin' ? (
                <NavLink to="/subscribers" className="nav-link ms-3">
              Admin
            </NavLink>
            ):  <></> }
            {username !== '' ? (
                <>
             
                <NavLink to="/profile" className="nav-link btn-group ms-3">
                    <span className='btn btn-success'>{username}</span>   
                  <Link to="/" onClick={logout} className="btn btn-success"><BsBoxArrowRight
                    
                    className=""
                  /></Link>
               </NavLink> 
               
            
                </>
            ) : (
              <div className="nav-link ms-3">
                <Button variant="dark" onClick={handleShow}>
                  Login <BsFillPersonFill />
                </Button>
                <></>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>


    
         
            <Outlet/>
         

    
      

     
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
  
         <footer className="bg-danger bg-gradient  position-absolute bottom-0 start-0 p-5 w-100" id='fullPlayer'>
            <div className='d-flex col-12 text-center justify-content-around align-items-center text-black'>
              <h5 className='col-3 '>     
              ©️ 2023 DirectLeague S.n.c. - P.I. 23786528462 - Corso Giulio Cesare, 23 - 20149, Milano (MI) - Italy - Sole Shareholder - paid-up share capital 23.000.000,00 €            
              </h5>
                <div className='col-3'>
                <img alt='logo' src={LogoPrincipale} style={{height:"200px"}}/>
              </div>
              
              <div className='col-3'>
               {lang === false ? (
                  <ListGroup className='rounded-4 fw-bold fs-5 text-black' variant="flush" 
                >
                  <ListGroup.Item action variant='dark'><div className='text-black'>Seguici sulle nostre pagine web!</div></ListGroup.Item>
                  <ListGroup.Item action variant='primary'> <a href="https://www.facebook.com/" target="blank" className='text-decoration-none text-black'><BsFacebook/> Facebook</a></ListGroup.Item>
                  <ListGroup.Item action variant='danger'> <a href="https://www.instagram.com/" target="blank" className='text-decoration-none text-black'><BsInstagram/> Instagram</a></ListGroup.Item>
                  <ListGroup.Item action variant='info'> <a href="https://twitter.com/?lang=it" target="blank" className='text-decoration-none text-black'><BsTwitter/> Twitter</a> </ListGroup.Item>
                </ListGroup>
                ) : (
                  <ListGroup className='rounded-4 fw-bold fs-5 text-black' variant="flush" 
                >
                  <ListGroup.Item action variant='dark'><div className='text-black'>Follow us on our web pages!</div></ListGroup.Item>
                  <ListGroup.Item action variant='primary'> <a href="https://www.facebook.com/" target="blank" className='text-decoration-none text-black'><BsFacebook/> Facebook</a></ListGroup.Item>
                  <ListGroup.Item action variant='danger'> <a href="https://www.instagram.com/" target="blank" className='text-decoration-none text-black'><BsInstagram/> Instagram</a></ListGroup.Item>
                  <ListGroup.Item action variant='info'> <a href="https://twitter.com/?lang=it" target="blank" className='text-decoration-none text-black'><BsTwitter/> Twitter</a> </ListGroup.Item>
                </ListGroup>
                )}
              </div>
            </div>
      </footer>

              {/*  */}
                <br id='singlePlayer'/>
                <br id='singlePlayer'/>
                <br id='singlePlayer'/>
                <br id='singlePlayer'/>
                <br id='singlePlayer'/>
                <br id='singlePlayer'/>
                <br id='singlePlayer'/>
                <br id='singlePlayer'/>
                <br id='singlePlayer'/>
                <br id='singlePlayer'/>
                <br id='singlePlayer'/>
                <br id='singlePlayer'/>
                <br id='singlePlayer'/>

                <br id='singlePlayer'/>
                <br id='singlePlayer'/>


                <footer className="bg-danger bg-gradient position-absolute bottom-0 start-0 p-5 text-black w-100" id='singlePlayer'>
                  
            <div className='col-12 text-center'>
                <div className='col-12'>
                <img alt='logo' src={LogoPrincipale} style={{height:"150px"}}/>
              </div>
              <h5 className='col-12 mt-4'>     
              ©️ 2023 DirectLeague S.n.c. - P.I. 23786528462 - Corso Giulio Cesare, 23 - 20149, Milano (MI) - Italy - Sole Shareholder - paid-up share capital 23.000.000,00€            
              </h5>
              <div className='col-12 mt-4 '>
                {lang === false ? (
                  <ListGroup className='rounded-4 fw-bold fs-5 text-black' variant="flush" 
                >
                  <ListGroup.Item action variant='dark'><div className='text-black'>Seguici sulle nostre pagine web!</div></ListGroup.Item>
                  <ListGroup.Item action variant='primary'> <a href="https://www.facebook.com/" target="blank" className='text-decoration-none text-black'><BsFacebook/> Facebook</a></ListGroup.Item>
                  <ListGroup.Item action variant='danger'> <a href="https://www.instagram.com/" target="blank" className='text-decoration-none text-black'><BsInstagram/> Instagram</a></ListGroup.Item>
                  <ListGroup.Item action variant='info'> <a href="https://twitter.com/?lang=it" target="blank" className='text-decoration-none text-black'><BsTwitter/> Twitter</a> </ListGroup.Item>
                </ListGroup>
                ) : (
                  <ListGroup className='rounded-4 fw-bold fs-5 text-black' variant="flush" 
                >
                  <ListGroup.Item action variant='dark'><div className='text-black'>Follow us on our web pages!</div></ListGroup.Item>
                  <ListGroup.Item action variant='primary'> <a href="https://www.facebook.com/" target="blank" className='text-decoration-none text-black'><BsFacebook/> Facebook</a></ListGroup.Item>
                  <ListGroup.Item action variant='danger'> <a href="https://www.instagram.com/" target="blank" className='text-decoration-none text-black'><BsInstagram/> Instagram</a></ListGroup.Item>
                  <ListGroup.Item action variant='info'> <a href="https://twitter.com/?lang=it" target="blank" className='text-decoration-none text-black'><BsTwitter/> Twitter</a> </ListGroup.Item>
                </ListGroup>
                )}
              </div>
            </div>
      </footer>       

    </>

    
  )
}

export default MainLayout
