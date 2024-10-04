import React from 'react';
import './Loader.css'; // Ensure to link the updated CSS file

const Loader = () => {
  return (
    <div className="vfx-loader">
      <div className="loader-wrapper">
        <div className="loader-content">
          <div className="dot-center"></div> {/* Central pulsating dot */}
          {/* 8 surrounding dots in a diamond pattern */}
          <div className="loader-dot loader-dot-1"></div>
          <div className="loader-dot loader-dot-2"></div>
          <div className="loader-dot loader-dot-3"></div>
          <div className="loader-dot loader-dot-4"></div>
          <div className="loader-dot loader-dot-5"></div>
          <div className="loader-dot loader-dot-6"></div>
          <div className="loader-dot loader-dot-7"></div>
          <div className="loader-dot loader-dot-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
