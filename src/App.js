import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter, Routes, Route} from "react-router-dom";




export default function App() {
  const [progress, setProgress] = useState(0)
  

  return (
    <div>
     
      <div>
         <BrowserRouter>
      <LoadingBar
        color='#f11946'
        height ={3}
        progress={progress}
      
      />
        <Navbar />
      
     
       
        <Routes>
    
          <Route exact path="/" element={<News setProgress ={setProgress}  key = "general" category="General"/>} />
          <Route exact path="/business"  element={<News setProgress ={setProgress}  key = "Business" category= "Business"/>}/>
          <Route exact path="/entertainment"  element={<News setProgress ={setProgress}  key ="entertainment" category="Entertainment"/>}/>
          <Route exact path="/general"   element={<News setProgress ={setProgress}  key ="general" category="General"/>} />
          <Route exact path="/health"    element={<News setProgress ={setProgress}  key ="health" category="Health"/>} />
          <Route exact path="/science"  element={<News setProgress ={setProgress}  key ="science" category="Science"/>}  />
          <Route exact path="/sports"   element={<News setProgress ={setProgress}  key ="sports" category="Sports"/>} />
          <Route exact path="/technology"  element={<News setProgress ={setProgress}  key ="technology" category="Technology"/>}/> 
         
          
      
      </Routes>
        </BrowserRouter>
      </div>
      
    
    </div>
  )
}


 
 
    
