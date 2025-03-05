import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const Projects = () => {
  const projects = [
    {
      image: '/holidify.jpg', // Long screenshot of a website
      path: 'https://www.holidify.com/',
      label: 'HOLIDIFY',
    },
    {
      image: '/tgif.jpg',
      path: 'https://www.tgifindia.com/',
      label: 'TGIFINDIA',
    },
    {
      image: '/maya.jpg',
      path: 'https://www.mayaarchitects.com/',
      label: 'MAYRARCHITECTS',
    },
    {
      image: '/mmc.jpg',
      path: 'https://mcc.edu.in/',
      label: 'MMC.edu',
    },
    {
      image: '/taxi.jpg',
      path: 'https://chennaitaxiservice.com/',
      label: 'CHENNAITAXISERVICE',
    },
    {
      image: '/ram.jpg',
      path: 'https://ramagyaschool.com/',
      label: 'RAMAGYASCHOOL',
    },
  ];

  return (
    <div className='ml-32 w-fit mb-20 mt-10'>
      <ul className='w-full md:grid md:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <li key={index}>
            <a
              href={project.path}
              target='_blank'
              rel='noopener noreferrer'
              className='block rounded-lg w-80 h-80 shadow-lg border border-solid border-slate-100 cursor-pointer p-[10px] relative overflow-hidden group'
            >
              {/* Image container with scroll on hover */}
              <div className='w-full h-full overflow-hidden rounded-lg'>
                <img
                  src={project.image}
                  alt={project.label}
                  className='w-full h-auto object-cover rounded-lg transition-transform duration-[3s] ease-in-out group-hover:translate-y-[calc(-100%+20rem)]'
                />
              </div>
              {/* Label and button with animation */}
              <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-lg font-semibold text-center py-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2'>
                <span>{project.label}</span>
                <button className='p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300'>
                  <FaArrowUpRightFromSquare className='text-white' />
                </button>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;