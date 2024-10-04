import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if the user has already visited the site
    const hasVisited = sessionStorage.getItem("hasVisited");

    // Redirect to /portfolio only on the first visit
    if (!hasVisited && location.pathname === "/") {
      sessionStorage.setItem("hasVisited", "true");
      navigate("/portfolio");
    }
  }, [location.pathname, navigate]);


  const menus = [
      {
          icon: 'fa fa-home flex items-center justify-center',
          path: '/',
          label: 'home',
          
      },
      {
          icon: 'fa fa-solid fa-folder',
          path: '/resume',
          label: 'resume'
      },
      {
          icon: 'fa fa-image',
          path: '/portfolio',
          label: 'portfolio'
      },
      {
          icon: 'fa fa-id-card',
          path: '/about',
          label: 'about me'
      },
      {
          icon: 'fa fa-envelope',
          path: '/contact',
          label: 'contact me'
      }
  ];

  return (
    <div>          
      <ul className="list-none z-10 fixed top-32 left-6 flex flex-col gap-4">
        {
          menus.map((menu, index) => (
            <li key={index} className="h-[50px] relative group">
              <NavLink to={menu.path}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center justify-center h-full w-full bg-[#fa2d5a] text-[#fff] rounded-md shadow-lg border border-slate-200"
                    : "flex items-center justify-center h-full w-full bg-[#fff] hover:bg-[#fa2d5a] hover:text-[#fff] rounded-md shadow-lg border border-slate-200"
                }
              >
                <div className="flex items-center justify-center h-full w-full">
                  <button className="p-0 w-[50px] h-[50px] bg-transparent">
                    <div className="flex flex-col gap-14 text-xl">
                      <span className={menu.icon}></span>
                    </div>
                  </button>
                </div>
              </NavLink>
              {/* Tooltip */}
              <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-[#4671ff] text-white text-[14px] font-poppins font-[700] text-center uppercase w-[114px] leading-[21px] pt-[6px] pr-[10px] pb-[7px] pl-[10px] rounded-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" >
                {menu.label} 
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0  border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[5px] border-r-gray-700"></span>
              </span>

            </li>
          ))
        }
      </ul>
      
      <div className="w-full min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default Layout;
