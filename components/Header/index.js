import Link from 'next/link'
import React from 'react'

const aboutus = [
  { link: "Aim", href: "#" },
  { link: "Department Structure", href: "#" },
  { link: "History", href: "#" },
  { link: "Organization Structure", href: "#" },
  { link: "Citizen Charter", href: "#" },
]

const schemes = [
  { link: "Aim", href: "#" },
  { link: "Department Structure", href: "#" },
  { link: "History", href: "#" },
  { link: "Organization Structure", href: "#" },
  { link: "Citizen Charter", href: "#" },
]

const otherinstitution = [
  { link: "Aim", href: "#" },
  { link: "Department Structure", href: "#" },
  { link: "History", href: "#" },
  { link: "Organization Structure", href: "#" },
  { link: "Citizen Charter", href: "#" },
]

const actrules = [
  { link: "Aim", href: "#" },
  { link: "Department Structure", href: "#" },
  { link: "History", href: "#" },
  { link: "Organization Structure", href: "#" },
  { link: "Citizen Charter", href: "#" },
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
]

const Header = () => {
  const langauges = ['Hindi', 'English']
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [show, setShow] = React.useState("top");

  const [activeDropdownIndex, setActiveDropdownIndex] = React.useState(-1); // Track the active dropdown index
  const dropdownRef = React.useRef(null);

  const toggleDropdown = (index) => {
    setActiveDropdownIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Clicked outside the dropdown, hide it
        setActiveDropdownIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const controlNavbar = () => {
    if (window.scrollY > 50) {
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={` fixed w-full transition-all duration-200 ${show === 'top' || show === 'show' ? " translate-y-0" : " -translate-y-[80px]"}`}>
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
                  <option key={lang} className=' bg-white focus:bg-blue-500 text-black'>In {lang}</option>
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
            className='w-[150px] object-cover'
          />
          <div className='flex flex-col items-start'>
            <span className=' text-sm font-semibold'>Official Website Of</span>
            <span className=' text-xl font-bold'>Co-operative Department</span>
            <span className=' text-xs font-light'>GOVERNMENT OF UTTARAKHAND (TOLL FREE - 8010576576)</span>
          </div>
        </div>
      </div>

      <div className=''>
        {/* navlinks */}
        <div className='flex items-center gap-2 sm:gap-3 md:gap-8 w-full xs:w-11/12 mx-auto'>
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
                      className='font-medium text-base'
                    >
                      {navlink.title}
                    </button>
                    {/* open click link list */}
                    {activeDropdownIndex === index && (
                      <div
                        className='absolute top-10 left-0 bg-slate-400 text-white flex flex-col gap-3 w-[200px]'
                        ref={dropdownRef}
                      >
                        {/* show links on click button */}
                        {navlink.clickOpen.map((link, i) => (
                          <Link href={link.href} key={i} className='font-medium text-base cursor-pointer'>
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
    </div>
  )
}

export default Header
