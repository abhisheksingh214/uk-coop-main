import Link from 'next/link'
import React from 'react'

const aboutus = [
  { link: "Aim", href: "#" },
  { link: "Department Structure", href: "#" },
  { link: "History&Obj", href: "/about/history-obj" },
  { link: "Organization Structure", href: "/about/organisation-department" },
  { link: "Citizen Charter", href: "#" },
]

const schemes = [
  { link: "scheme1", href: "#" },
  { link: "scheme2", href: "#" },
  { link: "History", href: "#" },
  { link: "Organization Structure", href: "#" },
  { link: "Citizen Charter", href: "#" },
]

const otherinstitution = [
  { link: "institution1", href: "#" },
  { link: "Department Structure", href: "#" },
  { link: "History", href: "#" },
  { link: "Organization Structure", href: "#" },
  { link: "Citizen Charter", href: "#" },
]

const actrules = [
  { link: "rule", href: "#" },
  { link: "Department Structure", href: "#" },
  { link: "act", href: "#" },
  { link: "Organization Structure", href: "#" },
  { link: "Citizen Charter", href: "#" },
]

const contactus = [
  { link: "Co-operative Department", href: "/contact/coopdepartment" },
  { link: "ARCS Contact", href: "/contact/arcs" },
  { link: "General Manager/C.E.O", href: "/contact/manager-ceo" },
  { link: "Apex Bodies", href: "/contact/apex" },
]

const navLinks = [
  { title: "Home", clickOpen: null, href: "/" },
  { title: "About Us", clickOpen: aboutus, href: null },
  { title: "Schemes", clickOpen: schemes, href: null },
  { title: "Other Institutions", clickOpen: otherinstitution, href: null },
  { title: "Co-operative Society-information", clickOpen: otherinstitution, href: null },
  { title: "Axt & Rules", clickOpen: actrules, href: null },
  { title: "RTI", clickOpen: null, href: "#" },
  { title: "Gallery", clickOpen: null, href: "#" },
  { title: "Contact Us", clickOpen: contactus, href: null },
]

const Header = () => {
  const langauges = ['Hindi', 'English']
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [show, setShow] = React.useState("top");
  const [activeDropdownIndex, setActiveDropdownIndex] = React.useState(-1); // Track the active dropdown index
  const dropdownRef = React.useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdownIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !navLinks.some((navlink, index) => activeDropdownIndex === index && event.target === document.querySelector(`button[data-dropdown-index="${index}"]`)) &&
        !event.target.closest('.fixed')
      ) {
        // Clicked outside the dropdown or its associated button, hide it
        setActiveDropdownIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const controlNavbar = () => {
    if (window.scrollY > 160) {
      if (window.scrollY > lastScrollY) {
        setShow("hide");
      } else {
        setShow("show");
      }
    }
    else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);


  return (
    <div className={`fixed w-full transition-all duration-300 ${show === 'top' || show === 'show' ? " translate-y-0" : " -translate-y-[140px] sm:-translate-y-[140px]"}`}>
      {/* Header Top Blue Line */}
      <div className="bg-blue-500">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-end gap-5 px-4 sm:px-6 lg:px-8">
          {/* Currency selector */}
          <div>
            <div className=" flex items-center justify-between gap-6 group relative -ml-2 rounded-md border-transparent">
              <select
                id="desktop-currency"
                name="currency"
                className="flex items-center rounded-md border-transparent bg-blue-500 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-white"
              >
                {langauges.map((lang) => (
                  <option key={lang} className=' bg-white focus:bg-blue-500 text-black'>{lang}</option>
                ))}
              </select>

              <div className="flex items-center gap-2 text-white">
                <div className="flex items-center text-xs font-semibold">
                  {<span className="">Dark</span>}
                  <button
                    onClick={toggleDarkMode}
                    className={`relative rounded-full w-12 h-6 mx-2 bg-blue-300 focus:outline-none`}
                  >
                    <span
                      className={`absolute left-0 top-0 w-6 h-6 bg-blue-100 rounded-full transition-transform duration-300 ease-in-out transform ${isDarkMode ? 'translate-x-full' : ''
                        }`}
                    ></span>
                  </button>
                  {<span className=" mr-2">Light</span>}
                </div>
              </div>
            </div>
          </div>
          <div className="items-center space-x-6 hidden sm:flex ">
            <Link href="/contact us" className="text-sm font-medium text-white hover:text-gray-100 bg-red-500 m-2 p-2 rounded-md">
              <button>
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='p-2 bg-white'>
        <div className='flex items-center w-full xs:w-11/12 mx-auto select-none'>
          <img
            src="/header/ukgov.svg"
            alt="uk gov"
            className='w-[100px] sm:w-[150px] object-cover'
          />
          <div className='flex flex-col items-start'>
            <span className=' text-sm font-semibold'>Official Website Of</span>
            <span className=' text-xl font-bold'>Co-operative Department</span>
            <span className=' text-xs font-light'>GOVERNMENT OF UTTARAKHAND (TOLL FREE - 8010576576)</span>
          </div>
        </div>
      </div>


      {/* desktop view */}
      <div className='hidden lg:block backdrop-blur-md'>
        {/* navlinks */}
        <div className='flex items-center gap-2 sm:gap-3 md:gap-8 p-2 w-full xs:w-11/12 mx-auto'>
          {
            navLinks.map((navlink, index) => {

              if (navlink.href) {
                return (
                  <Link href={navlink.href} key={index} className=' font-medium text-base cursor-pointer'>{navlink.title}</Link>
                )
              }
              else {
                return (
                  <div className='relative' key={index}>
                    <button
                      onClick={() => toggleDropdown(index)} // Pass the index to identify which button was clicked
                      className='font-medium text-base flex items-center gap-2'
                    >
                      {navlink.title}

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 transition-all duration-300 ${activeDropdownIndex !== index ? "" : " rotate-180"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>

                    </button>
                    {/* open click link list */}
                    {activeDropdownIndex === index && (
                      <div
                        className='absolute top-10 left-0 shadow-lg bg-white flex flex-col w-[200px]'
                        ref={dropdownRef}
                      >
                        {/* show links on click button */}
                        {navlink.clickOpen.map((link, i) => (
                          <Link href={link.href} key={i} className='font-medium text-base cursor-pointer hover:bg-slate-200 hover:underline p-2'>
                            {link.link}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
            })
          }
        </div>
      </div>


      {/* Mobile View */}
      <div className='block lg:hidden w-full z-30 backdrop-blur-sm'>
        <div className="p-2 w-full xs:w-11/12 mx-auto">
          <div onClick={toggleMobileMenu} className='w-fit h-fit'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>
      </div>
      {
        isMobileMenuOpen &&
        <div className=' absolute max-h-screen top-28 left-0 mt-5 -translate-x-6 transition-all duration-300  p-4 pl-16 pt-10 pb-28 bg-lightgray select-none'>

          <div onClick={toggleMobileMenu} className=' absolute top-0 right-2 w-fit text-2xl ml-auto cursor-pointer hover:rotate-180 transition-all duration-300'>
            X
          </div>

          <div className='flex flex-col gap-3'>
            {
              navLinks.map((navlink, index) => {

                if (navlink.href) {
                  return (
                    <Link href={navlink.href} key={index} className=' font-medium text-base cursor-pointer mt-2'>{navlink.title}</Link>
                  )
                }
                else {
                  return (
                    <div className='relative mt-2' key={index}>
                      <button
                        onClick={() => toggleDropdown(index)} // Pass the index to identify which button was clicked
                        className='font-medium text-base flex items-center gap-2'
                      >
                        {navlink.title}

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 transition-all duration-300 ${activeDropdownIndex !== index ? "" : " rotate-180"}`}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                      </button>
                      {/* open click link list */}
                      {activeDropdownIndex === index && (
                        <div
                          className='shadow-lg bg-white flex flex-col w-[200px]'
                          ref={dropdownRef}
                        >
                          {/* show links on click button */}
                          {navlink.clickOpen.map((link, i) => (
                            <Link href={link.href} key={i} className='font-medium text-base cursor-pointer hover:bg-slate-200 hover:underline p-2'>
                              {link.link}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
              })
            }
          </div>
        </div>
      }
    </div>
  )
}

export default Header
