import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, animateScroll as scroll } from 'react-scroll';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skill', label: 'Skill' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <div className="sm:px-8 px-4 py-2 z-10 w-full sticky top-0 bg-stone-600 shadow">
        <nav className="flex justify-between items-center mx-auto max-w-5xl">
          <a href="#" className="text-3xl font-bold" onClick={scrollToTop}>
            KERKEB
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  activeClass="active"
                  to={item.label}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="font-montserrat leading-normal text-lg text-slate-gray cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </nav>
        {isOpen && (
          <div>
            <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
              <div
                className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <AiOutlineClose className="text-4xl" />
              </div>
              <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link activeClass="active" to={item.label} smooth={true} offset={-70} duration={500} className="font-montserrat leading-normal text-lg text-slate-gray">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
