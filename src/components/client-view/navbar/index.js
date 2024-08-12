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
      offset={-70}
      onSetActive={() => setActiveLink(item.id)}
      className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative
    ${
      activeLink === item.id
        ? "text-blue-main animation-active shadow-blue-main"
        : "text-[#000] font-bold hover:text-blue-main"
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-white-500 transition-all ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex font-bold items-center text-[20px] text-gradient">
              <div className="w-[40px] h-[40px]">
                {/* <span className="text-[#fff] text-[25px] font-bold">P</span> */}
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
          <ul className="hidden lg:flex col-start-4 col-end-8 text-[#000] items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
            <button
              onClick={() =>
                scroller.scrollTo("contact", {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                })
              }
              className="py-1 px-1 border-[2px] bg-[#fff]  border-purple-main   font-semibold rounded-[50%] tracking-widest hover:shadow-blue-md transition-all outline-none"
            >
              <Image
                src={aiImage}
                alt="Profile Picture"
                quality={10}
                priority
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            </button>
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
            <div>bottom</div>
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
