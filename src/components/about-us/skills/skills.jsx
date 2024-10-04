import React from 'react';
import CircularProgress from './progress'; // Adjust the import path as necessary

const Skills = () => {
  const skills = [
    { percent: '85%', tool: 'JavaScript', desc: 'JavaScript is a versatile, high-level programming language used primarily for web development to create interactive and dynamic content on websites.' },
    { percent: '80%', tool: 'React JS', desc: 'React.js is a popular JavaScript library for building user interfaces, enabling developers to create fast, scalable, and dynamic web applications using reusable components.' },
    { percent: '75%', tool: 'Node.JS', desc: 'Node.js is a runtime environment that allows developers to run JavaScript on the server side, enabling efficient, scalable, and event-driven backend applications.' },
    { percent: '88%', tool: 'MongoDb', desc: 'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, allowing for scalable, high-performance applications with dynamic schema capabilities.' },
    { percent: '85%', tool: 'Express JS', desc: 'Express.js is a lightweight and flexible Node.js web application framework that simplifies building robust APIs and web applications with minimal setup and powerful routing features.' },
    { percent: '70%', tool: 'Next js', desc: 'Next.js is a React framework for building optimized, server-rendered web applications with features like static site generation, server-side rendering, and automatic code splitting for enhanced performance.' }
  ];

  return (
    <div className='ml-28 flex flex-col items-center justify-center font-poppins gap-9 '>
      <div className='mr-28 flex items-center flex-col gap-1'>
        <h2 className='text-[#4671ff] text-[26px] font-[600]'>My Skills</h2>
        {/* <div className='border border-solid border-[#fa2d5a] p-[0.8px] w-12 bg-[#fa2d5a] rounded-lg'></div>s */}
      </div>

      <div className='min-h-fit flex items-center justify-center '>
        <ul className='grid grid-cols-3 gap-7 mr-28'>
          {skills.map((skill, index) => {
            const skillPercentage = parseInt(skill.percent, 10); // Convert percent string to a number

            return (
              <li key={index}>
                <div
                  className='h-full px-3 bg-[#ffffff] w-[326px] font-poppins rounded-[6px]'
                  style={{ boxShadow: '0 0px 10px rgba(0, 0, 0, 0.1)' }}
                >
                  <div className='flex flex-col items-center justify-between py-8 text-center gap-4'>
                    {/* Use CircularProgress here */}
                    <CircularProgress
                      percentage={skillPercentage} // Pass the skill percentage
                      size={140} // Set the size for the circular progress
                      strokeWidth={10} // Set the stroke width
                      color="#fa2d5a" // Set the color for the progress
                    />

                    <div className='text-lg font-[500] text-[#666] capitalize'>{skill.tool}</div>
                    <div className='text-[14px] text-[#8c8c8c] font-[400] leading-[1.8]'>{skill.desc}</div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
