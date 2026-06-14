import React from 'react';
import './LoadingPage.css';

const LoadingScreen = ({ ready }) => {
    return (
        <div className={`loading-wrapper ${ready ? 'fade-out' : ''}`}>
            <div className="loading-spinner" />
            <div className="loading-bar-wrap">
                <div className="loading-bar" />
            </div>
            <p className="loading-text">LOADING...</p>
        </div>
    );
};
export default LoadingScreen;