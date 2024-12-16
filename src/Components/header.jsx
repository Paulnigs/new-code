
const Header = () => {
  return (
    <header className="bg-purple-400 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-5 md:px-20 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="#" className="hover:text-blue-300">
            AMATIP Digital box
          </a>
        </div>

      
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className=" hover:underline">Home</a>
          <a href="#about" className="hover:underline">Courses</a>
          <a href="#services" className="hover:underline">Videos</a>
          <a href="#Webinar" className="hover:underline">Webinars</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div >

        <div className="hidden md:flex space-x-7 pt-2">
            <a href="#" className="hover:text-blue-300">English</a>
            <a href="#" className="hover:text-blue-300">Search</a>
            <a href="#" className="hover:text-blue-300">Topics</a>
            <button className='px-4 py-2 rounded-md bg-white text-purple-400 text-sm'>Log in</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
