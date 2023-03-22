import { useEffect, useState } from 'react';
import {Accordion, Container} from 'react-bootstrap';
import { BsArrowRightSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { getClassifica } from '../api';

const AccordionItem=({ lang })=>{
  const [classifica, setClassifica] = useState([]);
const getClassificaCompleta = async()=>{
    const resultData = await getClassifica()
    setClassifica(resultData);
  }
  useEffect(()=>{
    getClassificaCompleta()
  },[])

  console.log(classifica)




   

    return <Container className='col-12 col-md-6'>
       

      


      <Accordion defaultActiveKey="0" className='mb-5' >
      <Accordion.Item eventKey="0" >
       {lang === false ? (
         <Accordion.Header>Giornata 1</Accordion.Header>
       ) : (
         <Accordion.Header>Day 1</Accordion.Header>
       )}
        <Accordion.Body>
          {classifica.map((el)=>{
            if(el.day === "Giornata 1"){
              return <div key={el.id} className=" d-flex justify-content-between">
                
                <div style={{width:"40%"}}><img className='me-3' style={{height:"20px" , width:"18px"}} src={el.homeClub.logo} alt={el.id}/> {el.homeClub.name} </div> 
               <div className='d-flex row-column justify-content-center' style={{width:"20%"}}>{el.goalHomeClub}-{el.goalAwayClub}</div> 
               <div className='d-flex row-column justify-content-end' style={{width:"40%"}}>{el.awayClub.name}  <img className='ms-3' style={{height:"20px", width:"17px"}} src={el.awayClub.logo} alt={el.id}/></div>
               <Link to={`/putmatch/${el.id}`} className="ms-2"><BsArrowRightSquare/></Link>
              </div>
            }
            return <div key={el.id}></div>
          })}
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        {lang === false ? (
         <Accordion.Header>Giornata 2</Accordion.Header>
       ) : (
         <Accordion.Header>Day 2</Accordion.Header>
       )}
        <Accordion.Body>
          {classifica.map((el)=>{
            if(el.day === "Giornata 2"){
              return <div key={el.id} className=" d-flex justify-content-between">
                <div style={{width:"40%"}}><img className='me-3' style={{height:"20px" , width:"18px"}} src={el.homeClub.logo} alt={el.id}/> {el.homeClub.name} </div> 
               <div className='d-flex row-column justify-content-center' style={{width:"20%"}}>{el.goalHomeClub}-{el.goalAwayClub}</div> 
               <div className='d-flex row-column justify-content-end' style={{width:"40%"}}>{el.awayClub.name}  <img className='ms-3' style={{height:"20px", width:"17px"}} src={el.awayClub.logo} alt={el.id}/></div>
               <Link to={`/putmatch/${el.id}`} className="ms-2"><BsArrowRightSquare/></Link>
              </div>
            }
            return <div key={el.id}></div>
          })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        {lang === false ? (
         <Accordion.Header>Giornata 3</Accordion.Header>
       ) : (
         <Accordion.Header>Day 3</Accordion.Header>
       )}
        <Accordion.Body>
          {classifica.map((el)=>{
            if(el.day === "Giornata 3"){
              return <div key={el.id} className=" d-flex justify-content-between">
                <div style={{width:"40%"}}><img className='me-3' style={{height:"20px" , width:"18px"}} src={el.homeClub.logo} alt={el.id}/> {el.homeClub.name} </div> 
               <div className='d-flex row-column justify-content-center' style={{width:"20%"}}>{el.goalHomeClub}-{el.goalAwayClub}</div> 
               <div className='d-flex row-column justify-content-end' style={{width:"40%"}}>{el.awayClub.name}  <img className='ms-3' style={{height:"20px", width:"17px"}} src={el.awayClub.logo} alt={el.id}/></div>
               <Link to={`/putmatch/${el.id}`} className="ms-2"><BsArrowRightSquare/></Link>
              </div>
            }
            return <div key={el.id}></div>
          })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        {lang === false ? (
         <Accordion.Header>Giornata 4</Accordion.Header>
       ) : (
         <Accordion.Header>Day 4</Accordion.Header>
       )}
        <Accordion.Body>
          {classifica.map((el)=>{
            if(el.day === "Giornata 4"){
              return <div key={el.id} className=" d-flex justify-content-between">
                <div style={{width:"40%"}}><img className='me-3' style={{height:"20px" , width:"18px"}} src={el.homeClub.logo} alt={el.id}/> {el.homeClub.name} </div> 
               <div className='d-flex row-column justify-content-center' style={{width:"20%"}}>{el.goalHomeClub}-{el.goalAwayClub}</div> 
               <div className='d-flex row-column justify-content-end' style={{width:"40%"}}>{el.awayClub.name}  <img className='ms-3' style={{height:"20px", width:"17px"}} src={el.awayClub.logo} alt={el.id}/></div>
               <Link to={`/putmatch/${el.id}`} className="ms-2"><BsArrowRightSquare/></Link>
              </div>
            }
            return <div key={el.id}></div>
          })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        {lang === false ? (
         <Accordion.Header>Giornata 5</Accordion.Header>
       ) : (
         <Accordion.Header>Day 5</Accordion.Header>
       )}
        <Accordion.Body>
          {classifica.map((el)=>{
            if(el.day === "Giornata 5"){
              return <div key={el.id} className=" d-flex justify-content-between">
                <div style={{width:"40%"}}><img className='me-3' style={{height:"20px" , width:"18px"}} src={el.homeClub.logo} alt={el.id}/> {el.homeClub.name} </div> 
               <div className='d-flex row-column justify-content-center' style={{width:"20%"}}>{el.goalHomeClub}-{el.goalAwayClub}</div> 
               <div className='d-flex row-column justify-content-end' style={{width:"40%"}}>{el.awayClub.name}  <img className='ms-3' style={{height:"20px", width:"17px"}} src={el.awayClub.logo} alt={el.id}/></div>
               <Link to={`/putmatch/${el.id}`} className="ms-2"><BsArrowRightSquare/></Link>
              </div>
            }
            return <div key={el.id}></div>
          })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        {lang === false ? (
         <Accordion.Header>Giornata 6</Accordion.Header>
       ) : (
         <Accordion.Header>Day 6</Accordion.Header>
       )}
        <Accordion.Body>
          {classifica.map((el)=>{
            if(el.day === "Giornata 6"){
              return <div key={el.id} className=" d-flex justify-content-between">
                <div style={{width:"40%"}}><img className='me-3' style={{height:"20px" , width:"18px"}} src={el.homeClub.logo} alt={el.id}/> {el.homeClub.name} </div> 
                <div className='d-flex row-column justify-content-center' style={{width:"20%"}}>{el.goalHomeClub}-{el.goalAwayClub}</div>
               <div className='d-flex row-column justify-content-end' style={{width:"40%"}}>{el.awayClub.name}  <img className='ms-3' style={{height:"20px", width:"17px"}} src={el.awayClub.logo} alt={el.id}/></div>
               <Link to={`/putmatch/${el.id}`} className="ms-2"><BsArrowRightSquare/></Link>
              </div>
            }
            return <div key={el.id}></div>
          })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        {lang === false ? (
         <Accordion.Header>Giornata 7</Accordion.Header>
       ) : (
         <Accordion.Header>Day 7</Accordion.Header>
       )}
        <Accordion.Body>
          {classifica.map((el)=>{
            if(el.day === "Giornata 7"){
              return <div key={el.id} className=" d-flex justify-content-between">
                <div style={{width:"40%"}}><img className='me-3' style={{height:"20px" , width:"18px"}} src={el.homeClub.logo} alt={el.id}/> {el.homeClub.name} </div> 
                <div className='d-flex row-column justify-content-center' style={{width:"20%"}}>{el.goalHomeClub}-{el.goalAwayClub}</div>
               <div className='d-flex row-column justify-content-end' style={{width:"40%"}}>{el.awayClub.name}  <img className='ms-3' style={{height:"20px", width:"17px"}} src={el.awayClub.logo} alt={el.id}/></div>
               <Link to={`/putmatch/${el.id}`} className="ms-2"><BsArrowRightSquare/></Link>
              </div>
            }
            return <div key={el.id}></div>
          })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        {lang === false ? (
         <Accordion.Header>Giornata 8</Accordion.Header>
       ) : (
         <Accordion.Header>Day 8</Accordion.Header>
       )}
        <Accordion.Body>
          {classifica.map((el)=>{
            if(el.day === "Giornata 8"){
              return <div key={el.id} className=" d-flex justify-content-between">
                <div style={{width:"40%"}}><img className='me-3' style={{height:"20px" , width:"18px"}} src={el.homeClub.logo} alt={el.id}/> {el.homeClub.name} </div> 
                <div className='d-flex row-column justify-content-center' style={{width:"20%"}}>{el.goalHomeClub}-{el.goalAwayClub}</div>
               <div className='d-flex row-column justify-content-end' style={{width:"40%"}}>{el.awayClub.name}  <img className='ms-3' style={{height:"20px", width:"17px"}} src={el.awayClub.logo} alt={el.id}/></div>
               <Link to={`/putmatch/${el.id}`} className="ms-2"><BsArrowRightSquare/></Link>
              </div>
            }
            return <div key={el.id}></div>
          })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        {lang === false ? (
         <Accordion.Header>Giornata 9</Accordion.Header>
       ) : (
         <Accordion.Header>Day 9</Accordion.Header>
       )}
        <Accordion.Body>
          {classifica.map((el)=>{
            if(el.day === "Giornata 9"){
              return <div key={el.id} className=" d-flex justify-content-between">
                <div style={{width:"40%"}}><img className='me-3' style={{height:"20px" , width:"18px"}} src={el.homeClub.logo} alt={el.id}/> {el.homeClub.name} </div> 
                <div className='d-flex row-column justify-content-center' style={{width:"20%"}}>{el.goalHomeClub}-{el.goalAwayClub}</div>
               <div className='d-flex row-column justify-content-end' style={{width:"40%"}}>{el.awayClub.name}  <img className='ms-3' style={{height:"20px", width:"17px"}} src={el.awayClub.logo} alt={el.id}/></div>
               <Link to={`/putmatch/${el.id}`} className="ms-2"><BsArrowRightSquare/></Link>
              </div>
            }
            return <div key={el.id}></div>
          })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        {lang === false ? (
         <Accordion.Header>Giornata 10</Accordion.Header>
       ) : (
         <Accordion.Header>Day 10</Accordion.Header>
       )}
        <Accordion.Body>
          {classifica.map((el)=>{
            if(el.day === "Giornata 10"){
              return <div key={el.id} className=" d-flex justify-content-between">
                <div style={{width:"40%"}}><img className='me-3' style={{height:"20px" , width:"18px"}} src={el.homeClub.logo} alt={el.id}/> {el.homeClub.name} </div> 
                <div className='d-flex row-column justify-content-center' style={{width:"20%"}}>{el.goalHomeClub}-{el.goalAwayClub}</div>
               <div className='d-flex row-column justify-content-end' style={{width:"40%"}}>{el.awayClub.name}  <img className='ms-3' style={{height:"20px", width:"17px"}} src={el.awayClub.logo} alt={el.id}/></div>
               <Link to={`/putmatch/${el.id}`} className="ms-2"><BsArrowRightSquare/></Link>
              </div>
            }
            return <div key={el.id}></div>
          })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        {lang === false ? (
         <Accordion.Header>Giornata 11</Accordion.Header>
       ) : (
         <Accordion.Header>Day 11</Accordion.Header>
       )}
        <Accordion.Body>
          {classifica.map((el)=>{
            if(el.day === "Giornata 11"){
              return <div key={el.id} className=" d-flex justify-content-between">
                <div style={{width:"40%"}}><img className='me-3' style={{height:"20px" , width:"18px"}} src={el.homeClub.logo} alt={el.id}/> {el.homeClub.name} </div> 
                <div className='d-flex row-column justify-content-center' style={{width:"20%"}}>{el.goalHomeClub}-{el.goalAwayClub}</div>
               <div className='d-flex row-column justify-content-end' style={{width:"40%"}}>{el.awayClub.name}  <img className='ms-3' style={{height:"20px", width:"17px"}} src={el.awayClub.logo} alt={el.id}/></div>
               <Link to={`/putmatch/${el.id}`} className="ms-2"><BsArrowRightSquare/></Link>
              </div>
            }
            return <div key={el.id}></div>
          })}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
}

export default AccordionItem;