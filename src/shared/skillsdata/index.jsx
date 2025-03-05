import { 
    FaNodeJs, FaReact, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, 
    FaAws
  } from "react-icons/fa";
  import { 
    SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss, SiJavascript, SiRedux, SiFirebase,SiRedis,
    SiDocker,
    SiApachekafka,
    SiAmazonec2,
    SiAmazonroute53,
    SiAmazonapigateway,
    SiAwselasticloadbalancing,
    SiAmazons3,
    SiAwslambda,
    SiAntdesign,
    SiTypescript
  } from "react-icons/si";
  
  const Skills = () => {
    // Skill categories with icons and technologies
    const skillCategories = [
      {
        title: "Backend Technologies",
        color: "text-green-500",
        icon: <FaNodeJs />,
        skills: [
          { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
          { name: "Express.js", icon: <SiExpress className="text-white" /> },
          { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
          { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
          { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> }
        ]
      },
      {
        title: "Frontend Technologies",
        color: "text-blue-400",
        icon: <FaReact />,
        skills: [
          { name: "React.js", icon: <FaReact className="text-blue-400" /> },
          { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
          { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
          { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
          { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500" /> },
          { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
          { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
          { name: "Ant Design", icon: <SiAntdesign className="text-purple-600" /> },
        ]
      },
    //   {
    //     title: "Scalability & Robust",
    //     color: "text-yellow-400",
    //     icon: <SiJavascript />,
    //     skills: [

    //     ]
    //   },
      {
        title: "AWS Cloud Services",
        color: "text-orange-500",
        icon: <FaAws />,
        skills: [
            { name: "EC2", icon: <SiAmazonec2 className="text-orange-500" /> },
            { name: "Route53", icon: <SiAmazonroute53 className="text-white" /> },
            { name: "API Gateway", icon: <SiAmazonapigateway className="text-purple-400" /> },
            { name: "Load Balancer", icon: <SiAwselasticloadbalancing className="text-green-500" /> },
            { name: "S3", icon: <SiAmazons3 className="text-green-500" /> },
            { name: "Aws Lambda", icon: <SiAwslambda className="text-yellow-500" /> }
        ]
      },
      {
        title: "Tools & Platforms",
        color: "text-white",
        icon: <FaGithub />,
        skills: [
            { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
            { name: "GitHub", icon: <FaGithub className="text-white" /> },
            { name: "Redis", icon: <SiRedis className="text-orange-500" /> },
            { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
            { name: "Kafka", icon: <SiApachekafka className="text-white" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
            
        ]
      }
    ];
  
    return (
      <section className="w-full h-auto py-20 ">
        <div className="text-center mb-10">
        <h2 className='text-[#fa2d5a] font-poppins text-[52px] font-[900] uppercase'><span className='text-[#4671ff] font-poppins text-[52px] font-[900] uppercase'>MY  </span>SKILLS.</h2>
        </div>
  
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-5 border rounded-lg bg-gray-800 shadow-lg">
              <h2 className={`text-2xl font-semibold flex items-center gap-2 ${category.color}`}>
                {category.icon}
                {category.title}
              </h2>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-lg font-medium bg-gray-700 p-2 rounded-lg">
                    {skill.icon}
                    <span className="text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;
  