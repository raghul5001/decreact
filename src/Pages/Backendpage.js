import React from 'react'
import "./Backendpage.scss"
function Backendpage() {
  return (
    <div className='backend'>
      <h1 className='title'>Welcome to Green Technology</h1>
      <div className='cards'>
      <div className='card1'>
        <h2 className='pyth'>Python</h2>
        <p className='intro'>
          Python is a popular programming language known for its simple syntax and versatility. It is widely used in web development, data analysis, automation, and artificial intelligence.
        </p>
      </div>
      <div className='card2'>
        <h2 className='jav'>Java</h2>
        <p className='intro1'>Java is an object-oriented programming language commonly used for enterprise applications, web services, and Android development. It is known for its stability and platform independence.</p>
      </div>
      <div className='card3'>
        <h2 className='nod'>Node JS</h2>
        <p className='intro2'>Node.js is a runtime environment that allows JavaScript to run on the server. It is commonly used for building fast, scalable, and real-time web applications.</p>
      </div>
      </div>
    </div>
  )
}

export default Backendpage