
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.png'
import { AuthContext } from '../contextApi/AuthContex';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const {user, logout} = useContext(AuthContext)
    console.log(user);
    

    

    
  
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Categories', path: '/categories' },
        
    ];

    return (
        <nav className="flex justify-between items-center   bg-white ">
            <div className="flex items-center">
                <img src={logo} alt="ShoeFlex" className="w-16" />
               
            </div>

            {/* small device  */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>
            {/* large device  */}
            <ul className={`md:flex md:space-x-8 ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 right-0 bg-white md:bg-transparent md:static`}>
                {links.map(link => (
                    <li key={link.name}>
                        <NavLink to={link.path} className="block p-4 text-black hover:text-blue-500" activeClassName="font-bold">
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className="hidden md:block">
              {
                user?
                <button className='bg-amber-500 px-4 py-2 font-bold rounded'> Log out</button>
                :
                <button className='bg-amber-500 px-4 py-2 font-bold rounded'> Log in</button>

              }
            </div>
        </nav>
    );
};

export default Navbar;
