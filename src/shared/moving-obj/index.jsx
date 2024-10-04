
import React from 'react';
import './MovingObj.css'; 

const MovingObj = () => {
  return (
    <div>
      <div className='border border-solid border-[#fa2d5a] p-[1.4px] w-[70px] bg-[#fa2d5a] rounded-lg   relative flex items-center justify-center'>
        <p className='moving-dot'></p> {/* Apply the animation class */}
      </div>
    </div>
  );
}

export default MovingObj;

