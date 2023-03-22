import { useEffect, useState } from "react"
import { Card, Container } from "react-bootstrap"
import { BsPencilFill, BsPlusCircle, BsTrash, BsTrashFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { deleteNewsById, deleteSubscriberById, getNews, getSubscribers } from "../api"




const Subscriber = ({})=>{

    const [subscriber, setSubscriber] = useState([]);

    const deleteSubscriber = async (id) => {
        const deleteResponse = await deleteSubscriberById(id)
        console.log(deleteResponse)
        getSubscriber();
    };

    const getSubscriber = async()=>{
    const result = await getSubscribers()
    setSubscriber(result);
  }

   useEffect(()=>{
    getSubscriber()
   },[])


   const [news,setNews] = useState([])

    const getAllNews = async()=>{
        const result = await getNews()
        setNews(result)
    }

    const deleteNews = async (id) => {
        const deleteResponse = await deleteNewsById(id)
        console.log(deleteResponse)
        getAllNews();
    };

    useEffect(()=>{
        getAllNews()
    },[])

    return <> 

            <div className="container col-12 mt-5 mb-2 p-3">

                <h2 className="d-flex justify-content-center mb-5 text-danger mt-5">Subscribers</h2>

            {subscriber.map((el)=>{
        return <Container className="col-4 mb-4" key={el.id}>
                        <Card className="" >
                            <Card.Header className="d-flex justify-content-between align-items-center">
                                
                                <h4 >
                                    Username: {el.username}
                                </h4>
                            
                            <div>
                                 <Link to={`/edit/${el.id}`} className='btn btn-sm btn-warning'>
                                <BsPencilFill/>
                            </Link>
                            <Link onClick={()=>{deleteSubscriber(el.id)}} className='btn btn-sm btn-danger ms-2'>
                                <BsTrashFill/>
                            </Link>
                            </div>

                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center"><h6>Nome e Cognome:</h6> <h5>{el.firstName} {el.lastName}</h5></div>
                                <div className="d-flex justify-content-between align-items-center"><h6>Email:</h6> <h5>{el.email}</h5></div>
                                <div className="d-flex justify-content-between align-items-center"><h6>Password:</h6> <h5>{el.password}</h5></div>
                                <div className="d-flex justify-content-between align-items-center"><h6>Squadra del cuore:</h6> <h5>{el.clubLove}</h5></div>
                            </Card.Body>
                            
                        </Card>
                </Container>
    })}

        <h2 className="d-flex justify-content-center mb-5 text-danger mt-5">News</h2>

    <div className="d-flex justify-content-center">
        <ul className="list-group col-7 rounded-4">
            {news.map((el , i)=>{
        return <li className="list-group-item p-3 d-flex justify-content-between" key={el.id}>
           <div> <span className="p-2 bg-warning rounded-5 me-2">{i + 1}</span>   {el.title}</div>
           <div className="">
                                 <Link to={`/createnews`} className='btn btn-sm btn-success'>
                                <BsPlusCircle/>
                            </Link>
                             <Link to={`/createnews/${el.id}`} className='btn btn-sm btn-warning ms-2'>
                                <BsPencilFill/>
                            </Link>
                            <Link onClick={()=>{deleteNews(el.id)}} className='btn btn-sm btn-danger ms-2'>
                                <BsTrashFill/>
                            </Link>
                            </div>
        </li>
    })}
        </ul>
    </div> 
    
    </div>
    </>
}

export default Subscriber