import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { getNews } from "../api";
import "../News.css"

const News = ({lang})=>{

    const [news,setNews] = useState([])

    const getAllNews = async()=>{
        const result = await getNews()
        setNews(result)
    }

    useEffect(()=>{
        getAllNews()
    },[])

    return (
        <>
        
            <Carousel style={{height:"450px"}} controls={false} indicators={false} fade={false} className="bg-danger" >
                {news.map((el)=>{
                    return  <Carousel.Item key={el.id} className="col-12">
                                <div className="d-flex">
                                    <img alt="img" src={el.urlImg} className="col-12 col-md-6  shadow-lg" style={{height:"450px"}} id="news"/>
                                    {lang === false ? (
                                        <div className="col-6 col-12 col-md-6 row align-items-around justify-content-center text-center p-5">
                                            <h1>{el.title}</h1>
                                            <h4>{el.description}</h4>
                                        </div>
                                    ) : (
                                        <div className="col-6 col-12 col-md-6 row align-items-around justify-content-center text-center p-5">
                                            <h1>{el.titleEng}</h1>
                                            <h4>{el.descriptionEng}</h4>
                                        </div>
                                    )}
                                </div>
                            </Carousel.Item>
                            
                })}
            </Carousel>
        </>
    )
}

export default News;