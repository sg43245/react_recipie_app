import React from 'react';
import {Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <>
            <nav className="container1">
                <div className="logo">Recipies Junta</div>
                <div className="options">
                    <Link to="/">Home</Link>
                </div>
                <div className="social">
                    <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                    <Link to="#"><i className="fa fa-telegram" aria-hidden="true"></i></Link>
                    <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                    <Link to="#"><i className="fa fa-diamond" aria-hidden="true"></i></Link>
                </div>
                
            </nav>
 
        </>
    )
}
