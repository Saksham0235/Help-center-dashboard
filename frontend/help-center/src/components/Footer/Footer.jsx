import React from 'react'
import "./module.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="div">
                <h2>Abstract</h2>
                <div className="paras">
                    <p>Branches</p>
                </div>
            </div>
            <div className="div">
                <h2>Resources</h2>
                <div className="paras">
                    <p>Blog</p>
                    <p>Help center</p>
                    <p>Release Notes</p>
                    <p>Status</p>
                </div>
            </div>
            <div className="div">
                <h2>Community</h2>
                <div className="paras">
                    <a href='' className='link' >Twitter</a>
                    <a href='' className='link'>LinkedIn</a>
                    <a href='' className='link'>Facebook</a>
                    <a href='' className='link' >Dribble</a>
                    <a href='' className='link'>Podcast</a>
                </div>
            </div>
            <div className="div">
                <div className="div1">
                    <h2>Company</h2>
                    <div className="paras">
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Legal</p>
                    </div>
                </div>
                <div className="div2">
                    <h2>Contact Us</h2>
                    <p>info@abstract.com</p>
                </div>

            </div>
            <div className="logodiv">
                <div className="div1">
                    <img src='../src/assets/Logo1.jpg' j alt='logo' className='logo' />
                </div>
                <div className="div2">
                    <p>© Copyright 2022</p>
                    <p>Abstract Studio Design, Inc.</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
