import React from 'react'
import Projects from './projects/projects'
import MovingObj from '../../shared/moving-obj'


const Portfolio= () => {
  return (
    <div className='min-h-screen w-full mt-16 '>
         <div className='flex items-center justify-center flex-col gap-2'>
                 <p className='text-[14px]  px-[10px]  inline-block  py-[1px] font-poppins bg-[#fa2d5a] rounded-[4px] font-[500] leading-[26px] text-[#fff] shadow'>
                    My Portfolio
                  </p>
                  <h2 className='text-[#fa2d5a] font-poppins text-[52px] font-[900] uppercase'><span className='text-[#4671ff] font-poppins text-[52px] font-[900] uppercase'>MY RESENT  </span>WORKS.</h2>
                  
                    <MovingObj/>

                  <p className='text-[16px] leading-[1.8] text-[#6a6a6a] font-[400]  font-poppins max-w-[700px] text-center mt-4'>"Explore my portfolio of full stack web development projects, built using the MERN stack for seamless performance. Each project reflects my focus on functionality, design, and innovation."</p>
         </div>
         
          <Projects/>
          
    </div>
  )
}

export default Portfolio


