import React from "react";
import MovingObj from "../../shared/moving-obj";
import { FaGlobe } from "react-icons/fa6";

const Resume = () => {
  return (
    <>
           <div className='flex items-center justify-center flex-col gap-2'>
                 <p className='text-[14px]  px-[10px]  inline-block  py-[1px] font-poppins bg-[#fa2d5a] rounded-[4px] font-[500] leading-[26px] text-[#fff] shadow'>
                    My Resume
                  </p>
                  <h2 className='text-[#fa2d5a] font-poppins text-[52px] font-[900] uppercase'><span className='text-[#4671ff] font-poppins text-[52px] font-[900] uppercase'>MY RESUME  </span>SECTION.</h2>
                  
                    <MovingObj/>

                  <p className='text-[16px] leading-[1.8] text-[#6a6a6a] font-[400]  font-poppins max-w-[700px] text-center mt-4'>"Take a look at  my resume to know all about me in one place "</p>
         </div>
  <div className="md:w-[800px] min-h-full mx-auto my-10 relative ">

    <div className="bg-[#6588f8] p-8 flex flex-col items-center">
     <div className="flex bg-[#fff] p-6 rounded-lg w-full shadow-lg mt-6 relative overflow-hidden">
       <section className="w-full font-poppins text-[#545454] text-[11px]">
          <header className="ml-80">
               
               <article >
                     <h1 className="text-[36px] text-[#121212] font-[500]">Mayur Burange</h1>
                     <h2 className="text-[21px] text-[#121212] font-[500]">Full Stack Developer</h2>
               </article>
          </header>
          <section className="flex justify-between mt-28 gap-24 ">
               <article className=" space-y-5">
                  <div className="flex flex-col gap-3  ">
                    <div className="flex gap-4 items-center">
                      <div className="text-[#fa2d5a] text-lg">
                      <i className="fa fa-phone  "></i>
                      </div>
                      <p>+91 7666895303</p>
                    </div>
                    <div className="flex gap-4 items-center text-[#545454]">
                    <div className="text-[#fa2d5a] text-lg">
                      <i className="fa fa-envelope  "></i>
                      </div>
                      <a href="mailto:dev97techsunset@gmail.com"  target='_blank'
                          rel='noopener noreferrer'>
                      <p className="text-blue-700">dev97techsunset@gmail.com</p>
                      </a>
                    </div>
                    <div className="flex gap-4 items-center">
                    <div className="text-[#fa2d5a] text-lg">
                      <i className="fa fa-home  "></i>
                      </div>
                      <p>Nalwadi Wardha, 411052</p>
                    </div>
                    <div className="flex gap-4 items-center">
                    <div className="text-[#fa2d5a] text-lg">
                    <i class="fa fa-linkedin"></i>
                      </div>
                      <a href="https://www.linkedin.com/in/er-mayur-burange-020215200/"  target='_blank'
                        rel='noopener noreferrer' >
                      <p className="text-blue-700">LinkedIn</p>
                      </a>
                    </div>
                  </div>

                  <div className="border-solid border-b border-[#4671ff]"></div>
                    
               {/* Skills */}

                  <div className="flex flex-col gap-3">
                      <div >
                        <h1 className="capitalize text-[#fa2d5a]  font-poppins text-xl">skills</h1>
                      </div>
                       <div>
                         <ul className="flex  flex-col">
                            <li className="flex gap-2 items-center capitalize">
                            <i className='bx bxl-html5 text-orange-600 text-2xl'></i>
                              Html 5
                            </li>
                            <li className="flex gap-2 items-center capitalize">
                            <i className='bx bxl-css3 text-blue-600 text-2xl'></i>
                              CSS 3
                            </li>
                            <li className="flex gap-2 items-center capitalize">
                            <i className='bx bxl-javascript text-yellow-400 text-2xl '></i>
                              Javascript & ES6
                            </li>
                            <li className="flex gap-2 items-center capitalize">
                            <i className='bx bxl-react text-blue-500 text-2xl'></i>
                              React js
                            </li>

                            <li className="flex gap-2 items-center capitalize">
                            <i className='bx bxl-react text-blue-800 text-2xl'></i>
                              Next Js
                            </li>

                            <li className="flex gap-2 items-center capitalize">
                            <i className='bx bxl-typescript text-blue-500 text-2xl'></i>
                              TypeScript
                            </li>
                            <li className="flex gap-2 items-center capitalize">
                            <i className='bx bxl-nodejs text-green-600 text-2xl'></i>
                              Node Js & Express Js
                            </li>
                            <li className="flex gap-2 items-center capitalize">
                            <i className='bx bxl-mongodb text-green-900 text-2xl'></i>
                              MongoDb
                            </li>
                           
                            
                         </ul>
                       </div>
                  </div>

                  <div className="border-solid border-b border-[#4671ff] my-4"></div>

                {/* CourseWorks and tools */}
                      

                <div >

                      <div >
                        <h1 className="capitalize text-[#fa2d5a]  font-poppins text-xl">Software Tools</h1>
                      </div>
                       <div >
                         <ul className="grid grid-cols-2">
                          
                            <li className="flex gap-2 items-center capitalize">
                            <i className='bx bxl-aws text-[goldenrod] font-semibold text-2xl'></i>
                              AWS cloud
                            </li>
                            <li className="flex gap-2 ml-8 items-center capitalize">
                            <i className='bx bxl-docker text-blue-800 text-2xl'></i>
                              Docker
                            </li>
                            <li className="flex gap-2 items-center capitalize">
                            <i className='bx bxl-git text-black text-2xl '></i>
                              Git & GitHub
                            </li>
                            <li className="flex gap-2 ml-8 items-center capitalize">
                            <i className='bx bx-task text-blue-500 text-2xl'></i>
                              jira
                            </li>
                            <li className="flex gap-2  items-center capitalize">
                            <i className='bx bx-chip text-green-500 text-2xl'></i>
                              Chat Gpt & AI Tools
                            </li>
                            <li className="flex gap-2 ml-8 items-center capitalize">
                            <i className='bx bxl-tailwind-css text-cyan-500 text-2xl'></i>
                              tailwind
                            </li>
                          
                         </ul>
                       </div>
                  </div>


                  <div className="border-solid border-b border-[#4671ff] my-4"></div>

                  {/* Education */}

                  <div className="flex flex-col gap-3">
                     <div>
                     <h1 className="capitalize text-[#fa2d5a]  font-poppins text-xl">Education</h1>
                     </div>
                     <div>
                        <h2 className="text-[#121212] font-[500]">Batchelor in Engineering</h2>
                        <p className="font-[400]"> R.T.M. Nagpur University</p>
                        <p>2015-2020</p>
                     </div>
                     <div>
                        <h2 className="text-[#121212] font-[500]">Higher Secoundary</h2>
                        <p className="font-[400]">Sushil Himmat Singhaka vidylaya </p>
                        <p>2013-2015</p>
                     </div>
                  </div>

                   
               </article>
               <article className="space-y-5">
             
             {/* profile */}

                    <div className="flex flex-col gap-3">
                        <div>
                        <h1 className="capitalize text-[#fa2d5a]  font-poppins text-xl">Profile</h1>
                        </div>
                        <div>
                           <p className="text-left">
                           Detail-oriented and tech-driven, always learning and adapting to new challenges. Thrives in fast-paced environments, collaborating effectively to deliver impactful solutions. Passionate about building innovative, user-focused digital experiences.

                           </p>
                        </div>
                    </div>

                    <div className="border-solid border-b border-[#4671ff] my-4"></div>
              
              
              
                      
                  {/* Experience */}
                    <div className="flex flex-col gap-3">
                        <div>
                        <h1 className="capitalize text-[#fa2d5a]  font-poppins text-xl">Experience</h1>
                        </div>
                        <div>
                           <h2 className="text-[#000000] text-lg font-[500] ">
                              Full-Stack Developer
                              <span className="text-[12px] ml-20">Served: 3 Years+ </span>
                           </h2>
                           <span className="text-gray-400 font-[500] text-[14px]">Techsunset,Bengaluru</span>
                           <span className="text-[#545454] font-[500] ml-28">July 21 - 2025</span>
                           <ul className="mt-2 list-disc" >
                              <li>Spearheaded the development of dynamic user interfaces and robust RESTful APIs, utilizing React and Next.js for front-end development, and Node.js with Express for back-end services.</li>
                              <li>Architected and implemented scalable web and mobile applications, ensuring seamless integration with MongoDB for efficient data management and retrieval.</li>
                              <li>Collaborated with cross-functional teams to deliver high-quality software solutions, addressing both client and business requirements.</li>                            
                              <li>Contributed to the entire software development lifecycle, including planning, design, coding, testing, and deployment, while adhering to best practices and industry standards.</li>                            
                           </ul>
                              
                        </div>
                      
                    </div>
                  
                    <div className="border-solid border-b border-[#4671ff] my-4"></div>
                    {/* Projects */}
                    <div className="flex flex-col gap-3">
                        <div>
                        <h1 className="capitalize text-[#fa2d5a]  font-poppins text-xl">Projects</h1>
                        </div>
                        <div>                         
                          <a href="https://www.holidify.com/" className="text-blue-700 text-lg flex justify-start items-center underline"><FaGlobe/>
                           <span className="text-blue-700 text-[14px] font-[500] ml-3 ">
                              HOLIDIFY
                           </span>
                           </a>
                         
                           <ul>
                              <li>A travel booking site offers flights, hotels, packages, and insurance, helping users compare, book, and plan trips easily.

                              </li>
                             
                           </ul>
                        </div>
          
                        <div>                         
                          <a href="https://www.tgifindia.com/" className="text-blue-700 text-lg flex justify-start items-center underline"><FaGlobe/>
                           <span className="text-blue-700 text-[14px] font-[500] ml-3 ">
                              TGIFINDIA
                           </span>
                           </a>
                         
                           <ul>
                              <li>“Casual Dining” segment in the restaurant industry,vision is to create ultimate singles bar.

                              </li>
                             
                           </ul>
                        </div>
                        <div>                         
                          <a href="https://www.holidify.com/" className="text-blue-700 text-lg flex justify-start items-center underline"><FaGlobe/>
                           <span className="text-blue-700 text-[14px] font-[500] ml-3 ">
                              MCC.edu
                           </span>
                           </a>
                         
                           <ul>
                              <li>An educational platform offers online courses, live classes, and certifications with interactive learning and assessments.

                              </li>
                             
                           </ul>
                        </div>
                        <div>                         
                          <a href="https://www.mayaarchitects.com/" className="text-blue-700 text-lg flex justify-start items-center underline"><FaGlobe/>
                           <span className="text-blue-700 text-[14px] font-[500] ml-3 ">
                              MAYA ARCHITECTS
                           </span>
                           </a>
                         
                           <ul>
                              <li> Maya Architects offers the Architectural Consultancy, Interior Design and Project Management Consultancies.

                              </li>
                             
                           </ul>
                        </div>
                        <div>                         
                          <a href="https://chennaitaxiservice.com/" className="text-blue-700 text-lg flex justify-start items-center underline"><FaGlobe/>
                           <span className="text-blue-700 text-[14px] font-[500] ml-3 ">
                              CHENNAI TAXI SERVICE
                           </span>
                           </a>
                         
                           <ul>
                              <li>Chennai taxi service has been around for over three decades. Our Chennai taxi service is known for its reliability, quality and safety.

                              </li>
                             
                           </ul>
                        </div>
                       
                    </div>
    
               </article>

               {/* middle border  */}
               <div className="absolute left-72 h-full  border-l-2 border-solid border-[#4671ff] "></div>
          </section>
       </section>
     </div>
            
    </div>
        
        <div >
        <div className="absolute top-8 left-0 bg-[#fa2d5a] w-[270px] h-[170px] z-20 ">
        </div>

        <div className="absolute top-8 left-20  w-[270px] bg-[#fa2d5a]  h-[170px] z-20 rounded-full " >
        </div>

        <div className="absolute top-[31px] left-[84px]  w-[272px] bg-[#6588f8]  h-[174px] rounded-full  ">  
        </div>

        <div className="absolute top-9 left-0 bg-[#6588f8] w-[270px] h-[170px] z-10 "> 
        </div>

        <div className="absolute top-[53px] left-48 bg-white w-[130px] h-[130px] z-30 rounded-full">
        </div>

        <div className="absolute top-[60px] left-[200px] bg-red-600 w-[115px] h-[115px] z-50 rounded-full overflow-hidden">
          <img src="/emp4.png" alt="profile" className="object-cover" />
        </div>
        
      
        </div>
  </div>
  </>
  );
};

export default Resume;
