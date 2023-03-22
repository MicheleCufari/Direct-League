import { Route, Routes, useNavigate } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import HomePage from "./pages/HomePage";
import Club from "./pages/Club";
import SinglePlayer from "./pages/SinglePlayer";
import { useEffect, useState } from "react";
import { getAll, getClassificaCompleta, getSubscribers, postSubscriber } from './api'
import { getAllPlayer } from "./api";
import SingleClub from "./pages/SingleClub";
import useLocalStorage from './useLocalStorage'
import Subscriber from "./pages/Subscriber";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import ClassificaForm from "./pages/ClassificaForm";
import LoadPage from "./pages/LoadPage";
import NotFound from "./pages/NotFound";
import Player from "./pages/Player";
import PostNews from "./pages/PostNews";





const App = () => {

  const [club, SetClub] = useState([])

  const [player, setPlayer] = useState([]);

  const [subscriber, setSubscriber] = useState([]);

  const [classifica, setClassifica] = useState([]);

  console.log(classifica)

  const [username , setUsername] = useLocalStorage("username" , "");
  // const [password , setPassword] = useLocalStorage("password" , "");

    const [dark , setDark] = useLocalStorage("dark" , false);

    const [lang , setLang] = useLocalStorage("lang" , false);

    const [eye , setEye] = useLocalStorage("eye" , false);
    

   const get = async () => {
      const resultData = await getAll()
      SetClub(resultData)
      
    }
    const getPlayer = async()=>{
    const result = await getAllPlayer()
    setPlayer(result);
  }

  const getAllClassifica = async()=>{
    const result = await getClassificaCompleta()
    setClassifica(result);
  }

  const getSubscriber = async()=>{
    const result = await getSubscribers()
    setSubscriber(result);
  }

  const createSub = async(subscriber)=>{
    const result = await postSubscriber(subscriber)
    if (result.ok) {
      getSubscriber()
    } else {
      console.log(result)
    }
  }

  

  


  const [inputClub , setInputClub] = useLocalStorage("club" , "");




  console.log(subscriber)
  console.log()

  const navigate = useNavigate()

   console.log(dark)

   
   

  useEffect(() => {

   navigate("/load")

    get()
    getSubscriber()
    getAllClassifica()
   getPlayer()
   document.title = "DirectLeague"
  if(dark === false){
        document.body.style.backgroundColor = "white"
    } else{
        document.body.style.backgroundColor = "black"
    }
  
     
  }, [dark])


  
  
  return (
    <>
      <Routes>

        <Route path="/load" element={<LoadPage dark={dark}/>}/>
       
          <Route path="/" element={<MainLayout username={username} setUsername={setUsername} setInputClub={setInputClub} dark={dark} setDark={setDark} lang={lang} setLang={setLang} eye={eye} setEye={setEye}/>}>

            

          <Route path="" element={<HomePage get={get} club={club} inputClub={inputClub} setInputClub={setInputClub} dark={dark} lang={lang} username={username} />}/>

          <Route path="/club" element={<Club club={club} dark={dark} setDark={setDark}/>} />

          <Route path="/:clubId/players" element={<Player setInputClub={setInputClub} allClub={club} dark={dark}/>}/>

          <Route path="/singleplayer/:playerId" element={<SinglePlayer player={player} setInputClub={setInputClub} allClub={club} dark={dark}/>} />

          <Route path="/club/:clubName" element={<SingleClub club={club} setInputClub={setInputClub} dark={dark}/>}/>

          <Route path="/subscribers" element={<Subscriber username={username} dark={dark}/>} />

          <Route path="/registration" element={<Registration createSub={createSub} usernameString={username} setUsernameString={setUsername} dark={dark} />} />

          <Route path="/edit/:subscriberId" element={<Registration edit setUsernameString={setUsername} dark={dark} />} />

          <Route path="/createnews" element={<PostNews createSub={createSub} usernameString={username} setUsernameString={setUsername} dark={dark} />} />

          <Route path="/createnews/:newsId" element={<PostNews createSub={createSub} usernameString={username} setUsernameString={setUsername} dark={dark} edit/>} />

          <Route path="/putmatch/:matchId" element={<ClassificaForm dark={dark}/>}/>

          <Route path="/profile" element={<Profile username={username} dark={dark} eye={eye} setEye={setEye}/>}/>

          

        </Route>
        
          <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
