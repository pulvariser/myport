import React from 'react'

const EduExp = () => {

    const eduDetails = [
        {
          duration : '2015 - 2020',
          title : 'engineering degree',
          subTitle : 'nagpur university',
          desc : 'I have completed my Bachelorate in Mechanical Engineering. with the CGPA of 7.69'
        },
        {
          duration : '2013 - 2015',
          title : 'higher secoundary',
          subTitle : 'sushil himmat singhka vidyalay',
          desc : 'I have completed my Higher Secoundary education with first class.'
        },
        // {
        //   duration : '2015 - 2020',
        //   title : 'commerse degree',
        //   subTitle : 'nagpur university',
        //   desc : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.'
        // },
        
      
]


   const expDetails = [
    {
      duration : 'April 2024 - July 2024',
      title : 'Software Developement',
      subTitle : 'p.m.k.v.y. Skill India',
      desc : 'I have completed  Skill India Software Product Developement Course & Training with 80% score and certificate of honor.'
    },
    {
      duration : 'Jan 2024 - Aug 2024',
      title : 'Full Stack Developement (AI)',
      subTitle : 'MMEAC pune',
      desc : 'I have completed the Full Stack Software Developement With AI Course & Training with certification.'
    },
    // {
    //   duration : '2015 - 2020',
    //   title : 'engineering degree',
    //   subTitle : 'nagpur university',
    //   desc : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.'
    // },
   
   ]



  return (
       <section className='ml-28 mr-28 grid grid-cols-2 gap-8 '>
           <aside className=' space-y-8'>
                    <div className='mr-28 flex items-start flex-col gap-1 justify-start'>
                            <h2 className='text-[#4671ff] text-[26px] font-[600] capitalize font-poppins '>My Education</h2>
                            <div className=' border border-solid border-[#fa2d5a] h-[3px] w-[45px] bg-[#fa2d5a] rounded-[30px]'>
                            </div>
                    </div>

        <div>
          <ul className=' min-h-fit flex flex-col items-center justify-center gap-8'>
             {
                eduDetails.map((eduDetail,index)=>{
                  return( 
                  <li key={index}>
                      <div className='h-fit bg-[#ffffff] border-l-[#fa2d5a] border-l-[5px] relative font-poppins rounded-[6px]'style={{ boxShadow: '0 0px 10px rgba(0, 0, 0, 0.1)',padding:'25px 20px 20px 30px',}} >
                          <div className='flex flex-col items-start  justify-between  gap-3'>
                            <div >
                             <p className='text-[12px] inline-block rounded-[4px] opcaity-[0.8] font-[500] text-[#7d7d7d] leading-[1.6] bg-[#ececec] font-poppins' style={{boxShadow : '0 2px 3px rgba(0, 0, 0, 0.02)',padding: '3px 12px'}}>{eduDetail.duration}</p>                                         
                            </div>
                          <div  className='flex items-center justify-center'>
                              <h5 className='text-[18px] font-[500] text-[#666] font-poppins capitalize inline-block'>{eduDetail.title}</h5>
                              <span className='font-[600] opacity-[0.8] text-[#666] font-poppins pl-2 pr-2 '>-</span>
                              <span className='text-[15px] font-[600] opacity-[0.8] text-[#666] font-poppins capitalize  inline-block'> {eduDetail.subTitle}</span>
                          </div> 
                          <div className='text-[14px] text-[#8c8c8c] font-[400] font-poppins leading-[1.8]'>
                              {eduDetail.desc}
                          </div>
                          
                      </div>

                      <div className='w-4 h-4 absolute top-6 left-[-10px] right-0 leading-4 text-center z-1 rounded-[20px] bg-[#fa2d5a] 'style={{boxShadow: '0 0px 10px rgba(0, 0, 0, 0.2)',transform:' rotate(45deg)'}}></div>

                      </div>
                   </li>
                )})
             }
            
          </ul>
        </div>
           </aside>
           
           <aside className=' space-y-8'>
                    <div className='mr-28 flex items-start flex-col gap-1 justify-start'>
                            <h2 className='text-[#4671ff] text-[26px] font-[600] capitalize font-poppins '>My Expriences</h2>
                            <div className=' border border-solid border-[#fa2d5a] h-[3px] w-[45px] bg-[#fa2d5a] rounded-[30px]'>
                            </div>
                    </div>

        <div >
          <ul className=' min-h-fit flex flex-col items-center justify-center gap-8'>
             {
                expDetails.map((expDetail,index)=>{
                  return( 
                  <li key={index}>
                      <div className='h-fit bg-[#ffffff] border-l-[#fa2d5a] border-l-[5px] font-poppins relative rounded-[6px]'style={{ boxShadow: '0 0px 10px rgba(0, 0, 0, 0.1)',padding:'25px 20px 20px 30px',}} >
                          <div className='flex flex-col items-start  justify-between  gap-3'>
                            <div >
                             <p className='text-[12px] inline-block rounded-[4px] opcaity-[0.8] font-[500] text-[#7d7d7d] leading-[1.6] bg-[#ececec] font-poppins' style={{boxShadow : '0 2px 3px rgba(0, 0, 0, 0.02)',padding: '3px 12px'}}>{expDetail.duration}</p>                                         
                            </div>
                          <div  className='flex items-center justify-center'>
                              <h5 className='text-[18px] font-[500] text-[#666] font-poppins capitalize inline-block'>{expDetail.title}</h5>
                              <span className='font-[600] opacity-[0.8] text-[#666] font-poppins pl-2 pr-2 '>-</span>
                              <span className='text-[15px] font-[600] opacity-[0.8] text-[#666] font-poppins capitalize  inline-block'> {expDetail.subTitle}</span>
                          </div> 
                          <div className='text-[14px] text-[#8c8c8c] font-[400] font-poppins leading-[1.8]'>
                              {expDetail.desc}
                          </div>
                          
                      </div>

                        <div className='w-4 h-4 absolute top-6 left-[-10px] right-0 leading-4 text-center z-1 rounded-[20px] bg-[#fa2d5a] 'style={{boxShadow: '0 0px 10px rgba(0, 0, 0, 0.2)',transform:' rotate(45deg)'}}></div>
                    
                      </div>
                   </li>
                )})
             }
            
          </ul>
        </div>
           </aside>
       </section>  
  )
}

export default EduExp
