import { useEffect, useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { getNewsById, postNews, putNews } from "../api"

const PostNews = ({edit})=>{

    const { newsId } = useParams()

    const navigate = useNavigate()

     const [inputState,setInputState] = useState({
        title:"",
        titleEng:"",
        description:"",
        descriptionEng:"",
        urlImg:"",
    })

    const handleInputChange = (input, value) => {
    setInputState({ ...inputState, [input]: value })
  }


    const handleSubmit = async (event)=>{
        event.preventDefault()

        let result = {ok: false , data: []};
        if(edit){
            result = await putNews(inputState,newsId)
        } else {
            result = await postNews(inputState)
        }
        
       if (result.ok) {
      // faccio la redirect
      navigate('/subscribers')
     
      
    } else {
      console.log(result.data)
    }
    }

    
     console.log(inputState)

      useEffect(() => {
    if (edit) {
      const loadData = async () => {
        const result = await getNewsById(newsId);
        if (result.ok) {
          // precarico gli input con i valori dell'utente
          setInputState({
            title:result.data.title,
            titleEng:result.data.titleEng,
            description:result.data.description,
            descriptionEng:result.data.descriptionEng,
            urlImg:result.data.urlImg,
          });
        } else {
          console.log(result.data);
        }
      };
      loadData();
    }
  }, [edit, newsId]);
   

    return (
        <>
 <Container className="mt-5">
                <h1 className="d-flex justify-content-center mb-2 text-danger mt-5 p-5">{edit ? 'Edit News' : 'Create News'}</h1>
                <Row className="align-items-center justify-content-center">
                    <Col md={6}>
                        <Form className="bg-warning bg-gradient p-5 border border-1 rounded-5" onSubmit={handleSubmit}>
                            <Form.Group controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control value={inputState.title} onChange={(e)=>{handleInputChange(e.target.id, e.target.value)}} type="text" placeholder="inserisci il nome..."/>
                            </Form.Group>
                            <Form.Group controlId="titleEng">
                                <Form.Label>TitleEng</Form.Label>
                                <Form.Control value={inputState.titleEng} onChange={(e)=>{handleInputChange(e.target.id, e.target.value)}} type="text" placeholder="inserisci il cognome..."/>
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control value={inputState.description} onChange={(e)=>{handleInputChange(e.target.id, e.target.value)}} type="text" placeholder="inserisci l'username..."/>
                            </Form.Group>
                            <Form.Group controlId="descriptionEng">
                                <Form.Label>DescriptionEng</Form.Label>
                                <Form.Control value={inputState.descriptionEng} onChange={(e)=>{handleInputChange(e.target.id, e.target.value)}} type="text" placeholder="inserisci la email..."/>
                            </Form.Group>
                            <Form.Group controlId="urlImg">
                                <Form.Label>Url Image</Form.Label>
                                <Form.Control value={inputState.urlImg} onChange={(e)=>{handleInputChange(e.target.id, e.target.value)}} type="text" placeholder="inserisci la data di nascita..."/>
                            </Form.Group>
                            
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

export default PostNews;