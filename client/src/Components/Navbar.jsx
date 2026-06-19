import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaBlogger } from "react-icons/fa6";
import { FaCalendarPlus } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";

const links = [{link:"Find Activities",
  linkSymbol:<IoSearch  />
},{link:"Blog",
  linkSymbol: <FaBlogger />
},{link:"Kidrove Go",
  linkSymbol: <FaUser/>
},{link:"FAQ",
  linkSymbol:<FaChartBar />
},{link:"Get In Touch",
  linkSymbol:<FaCalendarPlus />
}
 ]

function Navbar() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div>
      <nav className="fixed w-full top-0 z-50 bg-[rgb(177,225,226)] shadow-md">
        <div className="max-w-7xl mx-auto  px-5 md:px-8 py-4 flex justify-between items-center">
          <img src="../img/Kidrovelogo.png" alt="" className="w-32 md:w-40" />
          <div className="text-white md:flex gap-8 text-[15px] hidden">
            {links.map((l,id)=>(
              <div key={id}>
                <a href="">{l.link}</a>
              </div>
          ))}
          </div>
          <div className="flex text-white items-center gap-4 md:gap-6">
            <div className="bg-pink-400 rounded-[100%]">
              <IoSearch className="m-1.5" fontSize={18} />
            </div>
            <FaHeart fontSize={14} />
            <HiMenu
              className="md:hidden cursor-pointer text-[25px]"
              onClick={() => setOpenSideBar(true)}
            />
            {openSideBar && (
              <div>
                <div className="fixed top-0 right-0 bg-gray-400 opacity-70 w-full h-200 md:hidden "></div>
                <div className="fixed top-0  right-0 w-80 h-screen bg-white md:hidden">
                  {/* <div className="bg-[rgb(20,184,166)] h-16 p-4 flex items-center justify-between"> */}
                  <div className="bg-[rgb(177,225,226)] h-16 p-4 flex items-center justify-between">
                    <img src="../img/Kidrovelogo.png" alt="" className="w-35" />
                    <IoIosCloseCircleOutline
                      className="text-[35px] cursor-pointer"
                      onClick={() => setOpenSideBar(false)}
                    />
                  </div>
                  <div className="text-gray-600 font-semibold  flex flex-col gap-2 m-4 text-sm">
                    {links.map((l)=>(
                    <div className="flex items-center gap-4 hover:bg-gray-100 rounded-lg p-4">
                        {l.linkSymbol}
                      <a href="">{l.link}</a>
                    </div>
                    ))}
                 <button className='bg-pink-200 p-2 rounded-lg text-white font-bold mt-2'>Login/Register</button>
                  </div>
                </div>
              </div>
            )}
            <div className="md:flex bg-white rounded-3xl  items-center gap-2 py-2 px-5 hidden">
              <FaUser className=" text-[rgb(20,184,166)]" />
              <button className=" text-[rgb(20,184,166)] ">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
