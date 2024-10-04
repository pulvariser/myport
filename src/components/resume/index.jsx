import React from "react";

const Resume = () => {
  return (
  <div className="w-[800px] min-h-full mx-auto my-10 relative ">
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
                      <p>+91 9823662058</p>
                    </div>
                    <div className="flex gap-4 items-center text-[#545454]">
                    <div className="text-[#fa2d5a] text-lg">
                      <i className="fa fa-envelope  "></i>
                      </div>
                      <p>mayurburange72@gmail.com</p>
                    </div>
                    <div className="flex gap-4 items-center">
                    <div className="text-[#fa2d5a] text-lg">
                      <i className="fa fa-home  "></i>
                      </div>
                      <p>st.dhyneshwar nagar wardha</p>
                    </div>
                    <div className="flex gap-4 items-center">
                    <div className="text-[#fa2d5a] text-lg">
                      <i className="fa fa-globe  "></i>
                      </div>
                      <p>123@gamil.com</p>
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
                           Software Enthusiast : Passionate about Crafting Dynamic Web Solutions.   Committed to Continuous Learning, Collaboration and Making Meaningful Contributions to the Evolving Landscape of Web Development.

                           </p>
                        </div>
                    </div>

                    <div className="border-solid border-b border-[#4671ff] my-4"></div>
              
              
              
                      
                  {/* Experience */}
                    <div className="flex flex-col gap-3">
                        <div>
                        <h1 className="capitalize text-[#fa2d5a]  font-poppins text-xl">Training & Certifications</h1>
                        </div>
                        <div>
                           <h2 className="text-[#000000] text-[14px] font-[500] ">
                              P.M.K.V.Y Skill India 
                           </h2>
                           <h3 className="text-[#545454] font-[500]">Softare Developement Training & Certification</h3>
                           <ul className="mt-2">
                              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, maxime?
                              </li>
                              <li>Duration : 3 Months
                              </li>
                           </ul>
                        </div>
                        <div>
                           <h2 className="text-[#000000] text-[14px] font-[500] ">
                              Maha Mission Education & Carrier Council
                           </h2>
                           <h3 className="text-[#545454] font-[500]"> Full Stack Web Developement with AI Training & Certification</h3>
                           <ul className="mt-2">
                              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, maxime?
                              </li>
                              <li>Duration : 8 Months
                              </li>
                           </ul>
                        </div>
                        {/* <div>
                           <h2 className="text-[#000000] font-[500] ">
                                MaxoTag Technologies O.P.C. Pvt. Ltd
                           </h2>
                           <h3 className="text-[#545454] font-[500]">Full Stack Web Developement Training + Internship</h3>
                           <ul className="mt-2">
                              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, maxime?
                              </li>
                              <li>Duration : 6 Months
                              </li>
                           </ul>
                        </div> */}
                    </div>
                  
                    <div className="border-solid border-b border-[#4671ff] my-4"></div>
                    {/* Projects */}
                    <div className="flex flex-col gap-3">
                        <div>
                        <h1 className="capitalize text-[#fa2d5a]  font-poppins text-xl">Projects</h1>
                        </div>
                        <div>
                           <h2 className="text-[#000000] text-[14px] font-[500] ">
                               MERN Estate
                           </h2>
                           <ul>
                              <li>Real Estate is a leading real estate agency that specializes in helping clients buy, sell,and rent properties in the most desired location. (Advanced Authentication Search functionality React Router DOM, Google OAUTH  intigration, Redux, CRUD etc.)
                              </li>
                             
                           </ul>
                        </div>
                        <div>
                           <h2 className="text-[#000000] text-[14px] font-[500] ">
                               MERN Blog
                           </h2>
                           <ul>
                              <li>Robust authentication using JSON Web Tokens and Google OAuth integration, all powered by Redux Toolkit for easy state management. Secure both the client and backend for specific pages.like the admin dashboard.ability to effortlessly manage posts, comments, and users.
                              </li>
                           </ul>
                        </div>
                        <div>
                           <h2 className="text-[#000000] text-[14px] font-[500] ">
                               Expense Tracker
                           </h2>
                           <ul>
                              <li>Add your daily expenses or Items you have sold and get the details to your daily expense and earnings with the help of candel chart feature. (useState ,useEffect Hooks props, add ,delete etc.)
                              </li>
                           </ul>
                        </div>
                        <div>
                           <h2 className="text-[#000000] text-[14px] font-[500] ">
                               RentoMojo
                           </h2>
                           <ul>
                              <li>Why renting, you ask? Well, because we understand that unnecessary furniture and appliance costs are not the best investment options.We provide more than online rental services,With our assured quality and prompt services,you can say goodbye to all the hassles that come with buying and say hello to convenience.
                              </li>
                           </ul>
                        </div>
                        {/* <div>
                           <h2 className="text-[#000000] text-[14px] font-[500] ">
                               MERN Blog
                           </h2>
                           <ul>
                              <li>Advanced Authentication Search functionality, React Router DOM, Google OAUTH  intigration, Redux, CRUD etc.
                              </li>
                           </ul>
                        </div> */}
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
          <img src="/blazerImg.png" alt="profile" className="object-cover" />
        </div>
        
      
        </div>
  </div>
  );
};

export default Resume;





//  {/* Certifications */}

//  <div className="flex flex-col gap-3">                   
//  <div>
//  <h1 className="capitalize text-[#fa2d5a]  font-poppins text-xl">Certifications</h1>
//  </div>
//  <div>
//     <h2> Full stack development with AI  Maharashtra mission education council, Pune </h2>
//     <p>2019-2020</p>
//  </div>
// </div>