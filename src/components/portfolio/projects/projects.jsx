import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'antd';
import 'antd/dist/reset.css';  // Ensure you have this to reset Ant Design styles

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Updated state variable name
  const [selectedProject, setSelectedProject] = useState({ images: [], label: '', path: '' });

  const projects = [
    {
      images: [
        '/estate-ss.png',
        '/estate2-ss.png',
        '/estate3-ss.png',
        '/estate4-ss.png',
      ],
      path: 'https://mern-estate-react-app.onrender.com/',
      label: 'MERN Estate',
    },
    {
      images: [
        '/portfolio-ss.png',
        '/portfolio2-ss.png',
        '/portfolio3-ss.png',
        '/portfolio4-ss.png',
        
    ],
      path: 'https://myport-blush.vercel.app/',
      label: 'My Portfolio',
    },
    {
      images: ['/expense-ss.png','/expense2-ss.png'],
      path: 'https://expense-trackerr-react-app.netlify.app/',
      label: 'Expense Tracker',
    },
    {
      images: ['/project.jpg'],
      path: '#',
      label: 'Working on a site',
    },
    {
      images: ['/project.jpg'],
      path: '#',
      label: 'Working on a site',
    },
    {
      images: ['/project.jpg'],
      path: '#',
      label: 'Working on a site',
    },
  ];

  const showModal = (project) => {
    console.log("Selected project:", project);  // Debugging
    setSelectedProject(project);
    setIsModalOpen(true);  // Updated to use setIsModalOpen
  };

  const handleOk = () => {
    setIsModalOpen(false); // Updated to use setIsModalOpen
  };

  const handleCancel = () => {
    setIsModalOpen(false); // Updated to use setIsModalOpen
  };

  const visitProject = () => {
    
    window.open(selectedProject.path, '_blank');
  };

  return (
    <>
      <div className='ml-32 w-fit mb-20 mt-10'>
        <ul className='w-full grid grid-cols-3 gap-8'>
          {projects.map((project, index) => {
            return (
              <li key={index}>
                <div
                  className='rounded-full w-80 h-80 shadow-lg border border-solid border-slate-100 cursor-pointer p-[10px]'
                  onClick={() => showModal(project)} // Open modal on click
                >
                  <img
                    src={project.images[0]}  // Display first image in the list
                    alt={project.label}
                    className='w-full h-full object-cover rounded-full'
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Ant Design Modal */}
      <Modal
        title={selectedProject.label}
        open={isModalOpen}  // Updated to use open instead of visible
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
          <Button key="link" type="primary" onClick={visitProject}>
            Visit Project
          </Button>,
        ]}
      >
        {/* Carousel for swiping through multiple images */}
        <Carousel autoplay dots>
          {selectedProject.images && selectedProject.images.map((img, idx) => (
            <div key={idx}>
              <img
                src={img}
                alt={`Slide ${idx}`}
                className='w-full h-60 object-cover mb-4' // Adjust height for better viewing
              />
            </div>
          ))}
        </Carousel>

        <p>Project Name: {selectedProject.label}</p>
        <p>Link: <a href={selectedProject.path} target="_blank" rel="noopener noreferrer">{selectedProject.path}</a></p>
      </Modal>
    </>
  );
};

export default Projects;
