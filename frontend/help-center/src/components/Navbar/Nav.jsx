import React from 'react'
import './module.css'
const Nav = () => {
  return (
    <div className='nav'>
        <div className="left">
            <img src='../src/assets/Logo1.jpg' className='logoimg' />
            <h2 className='navh2'>Abstract | Help  Center</h2>
        </div>
        <div className="right">
            <button type='button' className='btn'>Submit a request</button>
        </div>
    </div>
  )
}

export default Nav
