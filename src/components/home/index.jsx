import React from 'react'
import { useNavigate } from "react-router-dom";
import Image from '../../images/bg-img2.jpeg'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
       
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };
  const goToContact = () => {
    navigate("/contact");
  };


    const bestSkills =  [
      {
        title: 'Javascript',
        style:'w-32 md:w-34 py-[5px] px-[4px] uppercase bg-[#F7E025] font-semibold text-center rounded-md  font-poppins'
      },
      {
        title: 'Reactjs',
        style:'w-32 md:w-34 py-[5px] px-[4px] uppercase bg-[#292929] text-[#08D9FF] font-semibold text-center rounded-md  font-poppins'
      },
     
      {
        title: 'nextjs',
        style:'w-32 md:w-34 py-[5px] px-[4px] uppercase bg-[#292929] text-[#fFF] font-semibold text-center rounded-md  font-poppins'
      },
     
      {
        title: 'mongodb',
        style:'w-32 md:w-34 py-[5px] px-[4px] uppercase bg-[#C6E9BC] text-[#55AD47] font-semibold text-center rounded-md  font-poppins'
      },
     
      {
        title: 'expressjs',
        style:'w-32 md:w-34 py-[5px] px-[4px] uppercase bg-[#fff] text-black font-semibold text-center rounded-md  font-poppins'
      },
     
      {
        title: 'nodejs',
        style:'w-32 md:w-34 py-[5px] px-[4px] uppercase bg-[#C6E9BC] text-[#448A43] font-semibold text-center rounded-md  font-poppins'
      },
     
      {
        title: 'aws',
        style:'w-32 md:w-34 py-[5px] px-[4px] uppercase bg-[#FF920C] text-[#21324] font-semibold text-center rounded-md  font-poppins'
      },
      {
        title: 'docker',
        style:'w-32 md:w-34 py-[5px] px-[4px] uppercase bg-[#fff] text-[#119FED] font-semibold text-center rounded-md  font-poppins'
      },
      {
        title: 'redis',
        style:'w-32 md:w-34 py-[5px] px-[4px] uppercase bg-[#D93327] text-[#fff] font-semibold text-center rounded-md  font-poppins'
      },
      {
        title: 'mern stack',
        style:'w-32 md:w-34 py-[5px] px-[4px] uppercase bg-[#1B1E27] text-[#fff] font-semibold text-center rounded-md  font-poppins'
      },
      {
        title: 'mongoose',
        style:'w-32 md:w-34 py-[5px] px-[4px] uppercase bg-[#448A43] text-[#fff] font-semibold text-center rounded-md  font-poppins'
      },
      {
        title: 'git/github',
        style:'w-32 md:w-34 py-[5px] px-[4px] uppercase bg-[#fff] text-[#F4532E] font-semibold text-center rounded-md  font-poppins'
      },
     
      
    ]
    
  return (
    <div className='overflow-hidden relative w-full h-screen'>
          <div >
              <img src={Image} alt='main' className='w-full h-screen object-cover'/>
              <div className=' absolute rounded-full top-[-40%] left-auto right-[-150px] w-[60%] h-[140%] bg-[#fd1b0a] transform rotate-[-55deg] opacity-[0.1]'> </div>
          </div>
          <div className='absolute top-24 left-auto right-1 w-6/12  flex flex-col
           justify-center gap-2'>
              <h3 className='text-[#6a6a6a] font-poppins text-[22px] font-[500] '>I'M Mayur Burange</h3>
               <h2 className='text-[#4671ff] font-poppins text-[44px] font-[900]'>
                 I Am a{' '}
                <span style={{ color: '#fa2d5a',fontFamily:'poppins', fontWeight: '900', fontSize:'44px'}}>
             <Typewriter
            words={['Web Developer.', 'Full Stack Engineer.', 'UI/UX Developer.', 'Web Designer.']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={2000}
           
          />
        </span> 

       </h2>

               <p className='text-[16px] leading-[1.8] text-[#6a6a6a] font-[400]  font-poppins'>MERN Stack Developer skilled in building scalable web apps with MongoDB, Express, React, and Node.js. Expert in API design, backend services, and responsive front-ends. Proficient in state management, authentication, cloud deployments, and modern tools like TypeScript and Tailwind CSS. Strong problem-solver, team player, and committed to delivering high-quality solutions.</p>
               <div className='flex items-center  gap-4 mt-5 '>
                  <button onClick={goToAbout} className='text-[15px]  py-0 font-poppins bg-[#fa2d5a] rounded-[4px] font-[500] uppercase leading-[46px] text-[#fff] outline-none overflow-hidden  tracking-tighter w-36 hover:bg-[#4671ff] hover:text-[#fff] shadow'>
                    ABOUT ME
                   <i className='fa fa-user-circle ml-3'></i>
                  </button>
                  <button onClick={goToContact} className='text-[15px]  py-0 font-poppins bg-[#4671ff] rounded-[4px] font-[500] uppercase leading-[46px] text-[#fff] outline-none overflow-hidden  tracking-tighter w-44 hover:bg-[#fa2d5a] hover:text-[#fff] shadow'>
                     GET IN TOUCH
                    <i className='fa fa-envelope ml-3 '></i>
                    </button>
               </div>
          </div>

          <div className='absolute left-28 top-36 w-auto  '>
                <section className='space-y-4'>
                   <h2 className='text-[1E2125] text-center lg:text-start sm:text-start md:text-start uppercase font-semibold' style={{letterSpacing:'3px'}}>Best Skills</h2>
                   <div>
                       <ul className='grid grid-cols-3 gap-6'>
                        {
                          bestSkills.map((bestSkill,index)=>{
                            return(
                               <li key={index} className='flex items-center justify-center'>
                                  <div className={bestSkill.style} style={{ boxShadow:'0 4px 8px 0px rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                                      {bestSkill.title}
                                  </div>
                               </li>
                            )
                          })
                  
                        }
                       </ul>
                   </div>
                </section>
          </div>
    </div>
  )
}

export default Home
