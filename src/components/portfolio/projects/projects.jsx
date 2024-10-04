import React from 'react'

const Projects = () => {
    const projects = [
        {
            img: '/project.jpg',
            path: '/',
            label: 'home',
            
        },
        {
            img: '/project.jpg',
            path: '/resume',
            label: 'resume'
        },
        {
            img: '/project.jpg',
            path: '/portfolio',
            label: 'portfolio'
        },
        {
            img: '/project.jpg',
            path: '/contact',
            label: 'contact'
        },
        {
            img: '/project.jpg',
            path: '/about',
            label: 'about'
        },
        {
            img: '/project.jpg',
            path: '/about',
            label: 'about'
        }
    ]
  return (
    < >
         <div className='ml-32 w-fit mb-20 mt-10 '>
            <ul className='w-full grid grid-cols-3 gap-8'>
                {
                  projects.map((project,index)=>{
                    return(
                    <li key={index}>
                         <div className=' rounded-full shadow-lg border border-solid border-slate-100 cursor-pointer p-[10px] '>
                              <img src={project.img} alt="projects" className='rounded-full w-[19rem]' />
                              
                         </div>
                    </li>
                   ) })
                }
            </ul>
         </div>
         
         
    </>
  )
}

export default Projects
