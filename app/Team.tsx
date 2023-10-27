import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const MyComponent = () => {
  const router = useRouter();
  const sidebarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;

    if (sidebar) {
      sidebar.style.opacity = "1";
      sidebar.style.transform = "translateY(0)";
    }
  }, []);

  const handleFacultyClick = () => {
    router.push("/teams");
  };
  const handleManagementClick = () => {
    router.push("/teams");
  };
  const handleBuddiesClick = () => {
    router.push("/buddies");
  };
  const handleMentorsClick = () => {
    router.push("/mentors");
  };

  return (
    <div className="relative p-2 lg:p-4 bg-sky-300">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src="./homepage/5.jpg"
          alt="Team 2023"
          className="w-full h-auto transition-transform duration-500 transform hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-gray-900 via-gray-900/40"></div>
        <aside
          ref={sidebarRef}
          className="absolute top-0 right-0 w-1/4 lg:w-1/5 h-full pr-12 flex flex-col justify-center items-end text-xl lg:text-4xl font-bold opacity-0 transition-transform duration-500"
          style={{
            transform: "translateY(-100%)",
          }}
        >
          <div className="text-white text-xl lg:text-4xl font-extrabold mb-6 md:mb-10 lg:mb-16">
            TEAM
          </div>
          <div className="flex flex-col space-y-1 md:space-y-2 lg:space-y-4 items-end">
            <button
              onClick={handleFacultyClick}
              className="text-white bg-opacity-60 hover:scale-105 py-1 text-xs lg:text-xl transition-transform duration-400 hover:-translate-x-2"
            >
              Faculty
            </button>
            <button
              onClick={handleManagementClick}
              className="text-white bg-opacity-60 hover:scale-105 py-1 text-xs lg:text-xl transition-transform duration-400 hover:-translate-x-2"
            >
              Management
            </button>
            <button
              onClick={handleBuddiesClick}
              className="text-white bg-opacity-60 hover:scale-105 py-1 text-xs lg:text-xl transition-transform duration-400 hover:-translate-x-2"
            >
              Buddies
            </button>
            <button
              onClick={handleMentorsClick}
              className="text-white bg-opacity-60 hover:scale-105 py-1 text-xs lg:text-xl transition-transform duration-400 hover:-translate-x-2"
            >
              Mentors
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MyComponent;
