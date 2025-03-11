import { Avatar, Burger, Drawer } from "@mantine/core";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";

const NavBar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const location = useLocation();

  const links = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
    { name: "Services", url: "/services" },
    { name: "Testimonials", url: "/testimonials" },
    { name: "Contact", url: "/contact" }
  ];

  return (
    <div className="fixed top-4 w-full flex justify-center items-center z-[1000]">
  <nav className="backdrop-blur-lg bg-[#3b1d6b62] text-white py-3 px-6 flex justify-between items-center w-[90%] max-w-[1200px] rounded-3xl bs-mx:w-[75%] bs-mx:py-1 bs-mx:pr-9">

      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Avatar className="!w-16 !h-16 lg-mx:!w-14 lg-mx:!h-14" src="/assets/logo-img.png" />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#a377d2] to-[#c2a2e3] bg-clip-text text-transparent lg-mx:text-xl">
          Techvistra
        </h1>
      </div>

      {/* Navigation Links */}
      <NavLinks  />

      {/* Discover Button */}
      <button className="bg-[#6b5cb2] text-white px-6 py-2 rounded-lg border border-[#5a4a9c] hover:bg-[#5a4a9c] transition bs-mx:hidden
      xl-mx:px-2 xl-mx:py-2 xl-mx:text-sm lg-mx:px-3 lg-mx:py-1 ">
        Discover the Platform
      </button>

      <Burger opened={opened} onClick={open} className='bs:hidden' aria-label="Toggle navigation" />
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="xs"
        overlayProps={{ backgroundOpacity: 0.3, blur: 6 }} // Softer overlay effect
        closeButtonProps={{ icon: <IconX size={30} className="text-white" /> }}
        classNames={{ content: "bg-transparent backdrop-blur-xl" }} // Transparent drawer
        className="relative z-[1000] bg-transparent bg-gradient-to-r from-[#3b1d6b]  to-[#6b5cb2]"
        title=""
      >
        <div className="px-6 py-4 bg-gradient-to-r from-[#3b1d6b]  to-[#6b5cb2] flex items-center gap-2 rounded-t-lg">
          <Avatar size="lg" src="/assets/logo-img.png" />
          <h1 className="text-lg font-bold text-white">Techvistra</h1>
          <IconX className="pl-2" size={28} onClick={close}/>
        </div>

        <div className="flex flex-col gap-6 items-center mt-6 bg-white/10 backdrop-blur-xl py-6 rounded-b-lg">
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.url}
              className={`text-lg transition duration-300 ${
                location.pathname === item.url
                  ? "text-purple-400 border-b-2 border-purple-400"
                  : "hover:text-purple-400"
              }`}
              onClick={close}
            >
              {item.name}
            </Link>
          ))}
          <button className="mt-4 bg-[#6b5cb2] text-white px-6 py-2 rounded-lg border border-[#5a4a9c] hover:bg-[#5a4a9c] transition">
            Discover the Platform
          </button>
        </div>

        {/* <div className='flex flex-col gap-6 items-center' >
        { links.map((item) => (
          <li key={item.name}>
            <Link
              to={item.url}
              className={`relative px-2 transition duration-300 ${
                location.pathname === item.url
                  ? "text-purple-400"
                  : "hover:text-purple-400"
              }`}
            >
              {item.name}
              {location.pathname === item.url && (
                <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-8 h-[2px] bg-gradient-to-r from-[#b993d6] to-[#8ca6db]"></span>
              )}
            </Link>
          </li>
        ))}
        </div> */}
      
      </Drawer>
    </nav>
    </div>
  );
};

export default NavBar;
