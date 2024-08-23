import  './nav.css'
import React from 'react'

function Nav() {
  return (
    <div className='nav-bar'>
        <h1 className='logo'>navbar</h1>
        <div className='nav-items'>
            <a href='/' className='nav-itemse'>Home</a>
            <a href='/app' className='nav-itemse'>App</a>
            <a href='/home' className='nav-itemse'>user</a>
            </div>
    </div>
  )
}

export default Nav