"use client";

import Image from "next/image";
import aiImage from "../../../assets/emojis.png";
import logoImage from "../../../assets/favicon.png";
import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";

const menuItems = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "project",
    label: "Projects",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item) => (
    <LinkScroll
      key={item.id}
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      offset={item.id === "contact" ? -200 : -70}
      onSetActive={() => setActiveLink(item.id)}
      className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative
    ${
      activeLink === item.id
        ? "text-blue-main animation-active shadow-md rounded-md font-semibold"
        : "text-[#000] font-semibold hover:text-blue-main"
    }
    `}
    >
      {item.label}
    </LinkScroll>
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    scroller.scrollTo("contact", {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -200,
    });
  };

  const toggleTooltip = () => {
    setShowTooltip((prev) => !prev);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-white-500 transition-all ${
          scrollActive ? "shadow-md pt-0 " : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center">
            <div className="cursor-pointer flex font-bold items-center text-[20px] text-gradient">
              <div className="w-[40px] h-[40px]">
                <Image
                  src={logoImage}
                  alt="Profile Picture"
                  quality={10}
                  priority
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
              </div>
              ortfolio
            </div>
          </div>
          <ul className="hidden lg:flex text-[#000] items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
          <div className="font-semibold relative">
            <button
              onClick={handleButtonClick}
              onMouseEnter={toggleTooltip}
              onMouseLeave={toggleTooltip}
              className="py-1 px-1 border-[2px] bg-[#fff] border-purple-main font-semibold rounded-[50%] tracking-widest hover:shadow-blue-md transition-all outline-none relative duration-100 hover:opacity-30"
            >
              <Image
                src={aiImage}
                alt="Profile Picture"
                quality={10}
                priority
                className="transition-opacity"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            </button>
            {showTooltip && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mb-2 text-white text-sm px-2 py-1 font-extrabold whitespace-nowrap">
                Contact me
              </div>
            )}
          </div>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-[#000]">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
        </div>
      </nav>
      <div
        style={{
          boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
        }}
        className="fixed bottom-0 p-2 w-full z-30 bg-white h-10 text-center text-gray-400 bg-white-500 hidden lg:block"
      >
        Copyright@ by wooriki
      </div>
    </>
  );
}
