import React from 'react'
import {Link } from 'react-router-dom'

function Menu() {
  return (
    <>
      <Link to="/lab1" >Lab 1</Link>
      <br></br>
      <Link to="/lab2" >Lab 2</Link>
      <br></br>
      <Link to="/lab3" >Lab 3</Link>
      <br></br>
      <Link to="/lab4" >Lab 4</Link>
      <br></br>
      <Link to="/lab5" >Lab 5</Link>
      <br></br>
      <Link to="/lab6&7" >Lab 6&7</Link>
    </>
    
  )
}

export default Menu