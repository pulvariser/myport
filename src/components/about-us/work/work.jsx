const MyWorks = () => {
    const works = [
      {
        icon: 'fa fa-database',
        title: 'FullStack Web Developement',
        desc: 'A full-stack developer is a software engineer who builds and maintains the front-end and back-end of a website or application. They need to have expertise in both areas, and have a thorough understanding of a variety of technologies and best practices.',
      },
      {
        icon: 'fa fa-code',
        title: 'Frontend Web Developement',
        desc: 'A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app.',
      },
      {
        icon: 'fa fa-terminal',
        title: 'Backend  Web  Development',
        desc: 'Back-end developers are responsible for the server-side logic and technology that makes websites and mobile apps function. They work on the databases, servers, and application programming interfaces (APIs).',
      },
      {
        icon: 'bx bx-code-curly',
        title: 'API Development',
        desc: 'An API developer is a software engineer who designs, builds, and maintains APIs (Application Programming Interfaces). APIs are the communication channels that allow different software systems to interact with each other.',
      },
      {
        icon: 'fa fa-paint-brush',
        title: 'UI/UX Design',
        desc: 'A UI/UX designer is responsible for creating user interfaces and experiences for digital and web applications. They work on tasks such as wireframing, prototyping, and designing visually appealing interfaces that are intuitive and user-friendly',
      },
      {
        icon: 'fa fa-cloud',
        title: ' AWS Cloud ',
        desc: 'An Amazon Web Services (AWS) developer is in charge of creating, maintaining and updating the cloud structure of web apps within the AWS cloud-based platform. These professionals use their knowledge of core AWS services to enhance the scalability and security of applications for a company.',
      },
    ];
  
    return (
      <div className="ml-28 flex flex-col items-center justify-center font-poppins gap-10">
        <div className="mr-28 flex items-center flex-col gap-1">
          <h2 className="text-[#4671ff] text-[26px] font-[600]">What Can I Do</h2>
          <div className="border border-solid border-[#fa2d5a] p-[0.8px] w-12 bg-[#fa2d5a] rounded-lg"></div>
        </div>
  
        <div className="min-h-fit flex items-center justify-center ">
          <ul className="grid grid-cols-3 gap-7 mr-28">
            {works.map((work, index) => {
              return (
                <li key={index} >
                  <div className="h-full px-3 bg-[#ffffff] w-[326px] font-poppins rounded-[6px] transition ease-in-out delay-0  transform group hover:bg-[#fa2d5a] hover:scale-105 hover:-translate-y-1 duration-1000 " style={{boxShadow: '0 0px 10px rgba(0, 0, 0, 0.1)'}}>
                    <div className="flex flex-col items-center justify-between py-8 text-center gap-4" >
                      <div className="w-[90px] h-[90px] rounded-[6px] bg-[#fa2d5a] flex items-center justify-center transition-all delay-100 ease-in-out group-hover:bg-white group-hover:rounded-full group-hover:-translate-y-1 duration-1000  ">
                        <div className="text-[42px] text-[#fff] transition-ease-in-out delay-0 ease-out group-hover:text-[#4671ff] ">
                          <i className={work.icon}></i>
                        </div>
                      </div>
                      <div className="text-lg font-[500] text-[#666] font-poppins capitalize transition-all duration-100 ease-out group-hover:text-white">
                        {work.title}
                      </div>
                      <div className="text-[14px] text-[#8c8c8c] font-[400] font-poppins leading-[1.8] transition-all duration-100 ease-out group-hover:text-white">
                        {work.desc}
                      </div>
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
  
  export default MyWorks;
  