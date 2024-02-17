import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Contact() {
    const navigate=useNavigate()
    function gotoPage(){
navigate('/')
    }
  return (
    <div>Contact

       <Link to="/"><h1>Home</h1></Link> 
       <button onClick={gotoPage}>go</button>
    </div>
  )
}

export default Contact