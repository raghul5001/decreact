import React from 'react'
import "./Landingpage.scss"
import Login from './Login'

function Landingpage() {
  return (
    <div className='bg'>
        <h1 className='text'>Welcome To Greens Technologies</h1>
        <p className='sub'>Browse The Courses We Offer Below</p>
        
        
        <div className='allcards'>
          
          
          <div className='card frontcard'>
            <h2>FRONT-END</h2>
            <p>Front-end programming is the practice of building the visual and interactive parts of a website or application that users see and engage with directly</p>
         </div>
          
          
          <div className='card backcard'>
            <h2>BACK-END</h2>
            <p>Backend programming refers to the server-side of applications, handling the logic, databases, and APIs that power the user-facing part of a website or app</p>
          </div>
         
         
          <div className='card dbcard'>
            <h2>DATABASE</h2>
            <p>Database programming involves writing code to design, manage, and interact with databases, which are organized collections of data</p>
         </div>
        
       </div>
   
   </div>
  )
}

export default Landingpage