import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleNavbar = () => {
        if (window.innerWidth < 768) {
            setIsOpen(!isOpen);
        }
    };

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsOpen(false)
        }
        if (window.innerWidth >= 768) {
            setIsOpen(true)
        }
    }, []);

    document.title = "iNotebook - your personal notebook"
    return (
        <nav className="bg-indigo-600 p-4">
            <div className="md:flex">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="#" className="text-white text-2xl font-semibold">
                        iNotebook
                    </Link>

                    <div className="md:hidden">
                        <button
                            className="text-white"
                            onClick={toggleNavbar}
                            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>

                </div>
                <div
                    className={`flex ${isOpen ? 'flex-col md:flex-row' : 'hidden'}`}
                    onClick={toggleNavbar}
                >
                    {/* we can use a uselocation hook if we want to make the currnt page active that we are in that time  uselocation is a hook inside a react router dom pakage */}
                    <Link to="/" className="text-white flex place-content-end hover:text-gray-300 px-4 py-2">
                        Home
                    </Link>
                    <Link to="/about" className="text-white flex place-content-end  hover:text-gray-300 px-4 py-2">
                        About
                    </Link>
                    <Link to="/services" className="text-white flex place-content-end  hover:text-gray-300 px-4 py-2">
                        Services
                    </Link>
                    <Link to="/contact" className="text-white flex place-content-end  hover:text-gray-300 px-4 py-2">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;