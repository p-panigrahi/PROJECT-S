import React from "react";
import Logo from "./Logo";
import { LuSearch } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="h-16 shadow-md bg-white">
        <div className="container mx-auto h-full flex items-center px-4 justify-between">
          <div>
            <Link to={"/"}>
              <Logo w={90} h={50} />
            </Link>
          </div>
          <div className="hidden lg:flex text-center w-full justify-between max-w-sm border border-1 rounded-l-full rounded-r-full ps-4 focus-within:shadow transition-all duration-300 ease-in-out hover:scale-105">
            <input
              type="text"
              placeholder="search product here...."
              className="w-full outline-none pl-2"
            />
            <div className="text-lg h-8 bg-red-600 min-w-[50px] flex items-center justify-center rounded-r-full text-white transition-transform duration-300 ease-in-out hover:scale-110">
              <LuSearch />
            </div>
          </div>
          <div className="flex items-center gap-7">
            <div className="text-3xl cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-12">
              <FaRegCircleUser />
            </div>
            <div className="text-2xl cursor-pointer relative hidden sm:flex transition-transform duration-300 ease-in-out hover:scale-110">
              <span>
                <FaShoppingCart />
              </span>
              <div className="bg-red-600 text-white h-5 w-5 flex justify-center items-center p-2 rounded-full absolute -top-3 -right-3">
                <p className="text-sm ">0</p>
              </div>
            </div>
            <div>
              <Link to={"login"}>
                <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-900 transition-all duration-300 ease-in-out hover:scale-105">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
