function Navbar() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black bg-gradient-to-r from-gradientStart to-gradientEnd shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-orange-400 cursor-pointer">Rishi.dev</div>
            <div className="hidden md:flex space-x-8 m-auto">
              <a
                href="#home"
                className="nav-link text-white hover:text-orange-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="nav-link text-white hover:text-orange-400 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="nav-link text-white hover:text-orange-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="nav-link text-white hover:text-orange-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="nav-link text-white hover:text-orange-400 transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="nav-link text-white hover:text-orange-400 transition-colors"
              >
                Contact
              </a>
            </div>
          
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
