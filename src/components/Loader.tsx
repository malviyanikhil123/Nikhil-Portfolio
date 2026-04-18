import React from 'react';
import '../styles/Loader.css';

const Loader = () => {
    return (
        <div className="loader-overlay">
            <div className="loader-container">
                <div className="outer-circle"></div>
                <div className="inner-circle"></div>
            </div>
        </div>
    );
};

export default Loader;
