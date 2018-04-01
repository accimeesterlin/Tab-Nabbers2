import React from 'react';
import "./loader.css";

const Loader = () => {
    return (
        <div className="loader loader--center">
            <div className="loader__item"> </div>
            <div className="loader__item"> </div>
            <div className="loader__item"> </div>
        </div>
    );
}

export default Loader;