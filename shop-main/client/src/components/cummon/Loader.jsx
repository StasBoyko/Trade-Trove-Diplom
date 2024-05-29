// src/components/common/Loader.jsx
import React from "react";
import classes from '../UI/component.css'

const Loader = (props) => {
    return(
        <div className="loader-container">
            <div className="loader">
                <div className="dot dot1"></div>
                <div className="dot dot2"></div>
                <div className="dot dot3"></div>
            </div>
            <p className="loader-text">Loading</p>
        </div>
    )
}

export default Loader;
