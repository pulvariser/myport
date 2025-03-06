import { useEffect, useState } from "react";
import { RiWhatsappLine, RiArrowUpLine } from "react-icons/ri";

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const playNotificationSound = () => {
    const audio = new Audio("/notification.mp3"); // Ensure you have this file in your public folder
    audio.play().catch((err) => console.log("Audio play failed:", err));
  };


  useEffect(() => {
    const audio = new Audio("/notification.mp3"); // Ensure you have this file in your public folder
    audio.play().catch((err) => console.log("Audio play failed:", err));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* WhatsApp Button */}
      <div className="fixed right-2 md:right-4 bottom-14 md:bottom-20 z-[2] duration-300">
        <div className="relative flex items-center justify-center animate-bounce">
          <a
            href="https://wa.me/+917666895303"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playNotificationSound}
          >
            <div className="flex items-center justify-center rounded-full w-10 md:w-14 md:h-14 h-10 bg-[#ff014f] cursor-pointer group relative">
              <div className="h-2 md:h-2.5 w-2 md:w-2.5 rounded-full bg-[#25d366] absolute top-0.5 md:top-1 right-0.5 md:right-1"></div>
              <RiWhatsappLine className="text-3xl md:text-4xl flex group-hover:scale-x-[-1] duration-500 text-white" />
            </div>
          </a>
        </div>
      </div>

      {/* Scroll to Top Buttons */}
      {showScroll && (
        <>
          <div
            className="fixed right-2 md:right-5 bottom-2 md:bottom-4 z-[2] cursor-pointer hover:-translate-y-1.5 duration-300"
            onClick={scrollToTop}
          >
            <div className="relative w-10 md:w-12 h-10 md:h-12 rounded-full overflow-hidden bg-[#232323] flex items-center justify-center">
              <div
                style={{ width: "100%", display: "inline-block", transform: "translateY(96.0822%)" }}
                className="bottom-0 absolute w-full h-[165%] md:h-[150%] duration-500"
              >
                <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 23.747096798946156 C 8 26.240141576937187 8 26.240141576937187 16 24.993619187941672 C 24 23.747096798946156 24 23.747096798946156 32 23.4257554168278 C 40 23.104414034709446 40 23.104414034709446 48 24.51791323552667 L 48 72 L 0 72 Z" fill="#ff014f"></path>
                </svg>
              </div>
              <RiArrowUpLine className="text-white text-lg md:text-xl font-extralight" />
            </div>
          </div>
          <div className="fixed right-2 md:right-5 bottom-2 md:bottom-4 z-[2] cursor-pointer hover:-translate-y-1.5 duration-300">
            <span>
              <div className="relative w-10 md:w-12 h-10 md:h-12 rounded-full overflow-hidden bg-[#232323]">
                <div
                  style={{ width: "100%", display: "inline-block", transform: "translateY(96.0822%)" }}
                  className="bottom-0 absolute w-full h-[165%] md:h-[150%] duration-500"
                >
                  <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0 20.278216818745427 C 8 20.722483625010604 8 20.722483625010604 16 20.500350221878016 C 24 20.278216818745427 24 20.278216818745427 32 22.979358567197334 C 40 25.68050031564924 40 25.68050031564924 48 21.60281378587133 L 48 72 L 0 72 Z" fill="#ff014f"></path>
                  </svg>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <RiArrowUpLine className="text-white text-lg md:text-xl font-extralight" />
              </div>
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default FloatingButtons;