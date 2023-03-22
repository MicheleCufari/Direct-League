import { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import { getClassifica } from "../api";


const MatchSlide = ()=>{

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [classifica, setClassifica] = useState([]);
const getClassificaCompleta = async()=>{
    const resultData = await getClassifica()
    setClassifica(resultData);
  }
  useEffect(()=>{
    getClassificaCompleta()
    
  },[])

    return (
        <>
        <Carousel className="col-12" activeIndex={index} onSelect={handleSelect} indicators={false} pause={false} fade={true} controls={false} style={{height:"150px"}}>
      <Carousel.Item interval={3000} style={{}} className="">
        
        <div className="d-flex justify-content-center w-100 mt-5">
            {classifica.map((el)=>{
                if(el.id < 7){
                    return <div key={el.id} className="col-6 col-md-2">
                        <Button variant="danger" className=""> <img alt="img" style={{height:"20px"}} src={el.homeClub.logo}/>{el.homeClub.slogan} {el.goalHomeClub}-{el.goalAwayClub} {el.awayClub.slogan}<img alt="img" style={{height:"20px"}} src={el.awayClub.logo}/></Button>
                    </div>
                } 
                return <></>
            })}
        </div>
        
      </Carousel.Item>
      <Carousel.Item interval={3000}  className="d-flex">
        <div className="d-flex justify-content-center w-100 mt-5">
            {classifica.map((el)=>{
                if(el.id > 6 && el.id < 13){
                    return <div key={el.id} className="col-6 col-md-2">
                        <Button variant="danger" className=""> <img alt="img" style={{height:"20px"}} src={el.homeClub.logo}/>{el.homeClub.slogan} {el.goalHomeClub}-{el.goalAwayClub} {el.awayClub.slogan}<img alt="img" style={{height:"20px"}} src={el.awayClub.logo}/></Button>
                    </div>
                }
                return <></>
            })}
            
        </div>
      </Carousel.Item>
      <Carousel.Item interval={3000} className="d-flex">
        <div className="d-flex justify-content-center w-100 mt-5">
            {classifica.map((el)=>{
                if(el.id > 12 && el.id < 19){
                    return <div key={el.id} className="col-6 col-md-2">
                        <Button variant="danger" className=""> <img alt="img" style={{height:"20px"}} src={el.homeClub.logo}/>{el.homeClub.slogan} {el.goalHomeClub}-{el.goalAwayClub} {el.awayClub.slogan}<img alt="img" style={{height:"20px"}} src={el.awayClub.logo}/></Button>
                    </div>
                }
                return <></>
            })}
        </div>
      </Carousel.Item>
      <Carousel.Item interval={3000} className="d-flex">
        <div className="d-flex justify-content-center w-100 mt-5">
            {classifica.map((el)=>{
                if(el.id > 18 && el.id < 25){
                    return <div key={el.id} className="col-6 col-md-2">
                        <Button variant="danger" className=""> <img alt="img" style={{height:"20px"}} src={el.homeClub.logo}/>{el.homeClub.slogan} {el.goalHomeClub}-{el.goalAwayClub} {el.awayClub.slogan}<img alt="img" style={{height:"20px"}} src={el.awayClub.logo}/></Button>
                    </div>
                }
                return <></>
            })}
        </div>
      </Carousel.Item>
    </Carousel>
        </>
    )
}

export default MatchSlide;