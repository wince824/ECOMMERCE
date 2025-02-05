import React from 'react';
import Logo from "../../assets/logo.jpg";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6"
{/*import DarkMode from "./DarkMode"*/}
import { FaCaretDown } from "react-icons/fa6"

const Menu = [
  {
    id: 1,
    name:"Home",
    link:"#",
  },
  {
    id: 2,
    name:"Men's wear",
    link: "#",
  },
  {
    id: 3,
    name: "Women's wear",
    link: "#",
  },
  {
    id: 4,
    name: "services",
    link: "#",
  },
  {
    id: 5
  }
]
const DropdownLinks = [
 
    {
      id: 1,
      name:"Trending Products",
      link:"#",
    },
    {
      id: 2,
      name:"Best Products",
      link: "#",
    },
  
]
const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
     {/* Upper Navbar*/}
      <div className="bg-primary/40 py-3 sm:py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href = "#"
            className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo"
              className="w-10" />
              Wince collections
            </a>
          </div>
          {/*search bar and order button*/}
          <div className="flex justify-between items-center  gap-4">
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="search item"
              className="w-{200px} sm:w-{200px} ground-hover:{300px} transition-all duration-300 rounded full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1
              focus:border-primary "/> 
              <IoMdSearch 
              className="text-gray-500
               group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"/>
            </div>
          </div>
          <button onClick={() => alert("Ordering not available yet")}
            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200
            text-white py-1 px-4 rounded-full flex items-center gap-3 group">
            <span className="group-hover:block hidden transition-all duration-200">
            Order
            </span>
            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor pointer"/>
          </button>
          <div>
           {/*} <DarkMode/>*/}
          </div>

        </div>
      </div>
      {/*lower Navbar*/}
        <div className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-4 ">
            {
              Menu.map((data) => (
                <li key={data.id}>
                  <a href={data.link}
                  className="inline-block px-4 hover:text-primary duration-200">
                    {data.name}
                    </a>
                </li>
              ))
            }
            <li className="group ralative cursor-pointer">
              <a href="#"
              className="flex items-center gap-[2px] py-2">
                Trending Items
                <span>
                  <FaCaretDown
                  className="transition-all duration-200
                  group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden
              group-hover:block w-[150px] rounded-md bg-white p-2 text-black">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                       <a href={data.link}
                       className="inline-block w-full rounded-md p-2 hover:bg-primary/20 ">
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
            
        
     
      
        </div>
  );
};

export default Navbar
