'use client';
import { List, X } from 'lucide-react';
import {useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  


  const openModal = () => {
    setIsModalOpen(true);
    // Small delay to allow render before transition
    setTimeout(() => {
      setIsModalVisible(true);
    }, 10);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    // Wait for transition to complete before removing from DOM
    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };

  const NavLinks = ({modal}: {modal: boolean}) => (
    <>
      <li>
        <Link href="/" onClick={closeModal}
          className={`${modal ? "text-white" : "text-gray-100"} hover:text-white transform hover:scale-110 transition-transform duration-300`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link href="/user" onClick={closeModal}
        className={`${modal ? "text-white" : "text-gray-100"} hover:text-white transform hover:scale-110 transition-transform duration-300`}
        >
          About
        </Link>
      </li>
      <li>
        <Link href="/" onClick={closeModal}
         className={`${modal ? "text-white" : "text-gray-100"} hover:text-white transform hover:scale-110 transition-transform duration-300`}
        >
          Skills
        </Link>
      </li>
      <li>
        <Link href="/" onClick={closeModal}
         className={`${modal ? "text-white" : "text-gray-100"} hover:text-white transform hover:scale-110 transition-transform duration-300`}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link href="/" onClick={closeModal}
         className={`${modal ? "text-white" : "text-gray-100"} hover:text-white transform hover:scale-110 transition-transform duration-300`}
        >
          Contact
        </Link>
      </li>
    </>
  );
  

  return (
    <>
      <nav className="flex justify-between items-center p-3 md:py-6 bg-purple-600/70 dark:bg-white bg-mainColor  px-8 font-josefinSlab">
        {/* Logo and Menu Icon */}
        <div className="flex justify-between  items-center w-full lg:w-auto mr-auto">
          <h1 className="text-white italic text-lg md:text-[26px]">Dipesh</h1>
          <List
            className={`${isModalOpen ? "hidden" : "visible"} h-8 w-8 text-white cursor-pointer lg:hidden`}
            onClick={openModal}
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden  lg:flex flex-col md:flex-row items-center gap-8 sm:text-base  md:text-lg lg:text-xl">
          <NavLinks modal={false}/>
        </ul>

      </nav>

      {/* Mobile Modal Navigation */}
      {isModalOpen && (
        <div 
          className={`
            fixed inset-0 z-50 bg-black/40  
            transition-all duration-500 ease-in-out
            ${isModalVisible ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={closeModal}
        >
          <div 
            className={` border-l-2 border-white/10
              flex flex-col items-start justify-center h-full bg-black/60
              w-[75%] ml-auto transform transition-transform duration-500 ease-in-out
              ${isModalVisible ? 'translate-x-0' : 'translate-x-full'}
              
            `}
            onClick={(event) => event.stopPropagation()}
          >
            <X 
              className="absolute top-5 right-7 h-8 w-8 text-white cursor-pointer"
              onClick={closeModal}
            />
            <ul className="flex flex-col ml-12 gap-14 text-2xl ">
              <NavLinks modal/>
            </ul>
          </div>
         
        </div>
      )}
    </>
  );
};

export default Header;