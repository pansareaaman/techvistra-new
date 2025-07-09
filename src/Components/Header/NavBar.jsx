import { Avatar, Burger, Drawer } from "@mantine/core";
import React from "react";
import NavLinks from "./NavLinks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";

const NavBar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
    { name: "Services", url: "/services" },
    { name: "Testimonials", url: "/testimonials" },
    { name: "Contact", url: "/contact" },
    { name: "Marketing", url: "/marketing" }
  ];

  return (
    <div className="fixed top-4 w-full flex justify-center items-center z-[100]">
      <nav className="backdrop-blur-lg bg-[#3b1d6b62] text-white py-3 px-6 flex justify-between items-center w-[90%] max-w-[1200px] rounded-3xl bs-mx:w-[75%] bs-mx:py-1 bs-mx:pr-9 xs-mx:w-[90%]">

        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Avatar className="!w-16 !h-16 lg-mx:!w-14 lg-mx:!h-14" src="/assets/logo-img.png" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#a377d2] to-[#c2a2e3] bg-clip-text text-transparent lg-mx:text-xl">
            Techvistra
          </h1>
        </div>

        {/* Navigation Links */}
        <NavLinks />

        {/* Discover Button (Desktop) */}
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#6b5cb2] text-white px-6 py-2 rounded-lg border border-[#5a4a9c] hover:bg-[#5a4a9c] transition bs-mx:hidden
          xl-mx:px-2 xl-mx:py-2 xl-mx:text-sm lg-mx:px-3 lg-mx:py-1 "
        >
          Discover the Platform
        </button>

        {/* Burger Menu */}
        <Burger classNames="!text-white" color="gray" opened={opened} onClick={open} className='bs:hidden' aria-label="Toggle navigation" />
        
        {/* Drawer for Mobile */}
        <Drawer
          opened={opened}
          onClose={close}
          position="right"
          size="xs"
          overlayProps={{ backgroundOpacity: 0.3, blur: 6 }}
          closeButtonProps={{ icon: <IconX size={30} className="text-white" /> }}
          classNames={{ content: "bg-transparent backdrop-blur-xl" }}
          className="relative z-[100] bg-transparent bg-gradient-to-r from-[#3b1d6b] to-[#6b5cb2]"
          title=""
        >
          {/* Drawer Header */}
          <div className="px-6 py-4 bg-gradient-to-r from-[#3b1d6b] to-[#6b5cb2] flex items-center gap-2 rounded-t-lg">
            <Avatar size="lg" src="/assets/logo-img.png" />
            <h1 className="text-lg font-bold text-white">Techvistra</h1>
            <IconX className="pl-2" size={28} onClick={close} />
          </div>

          {/* Drawer Links */}
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
            
            {/* Discover Button (Mobile) */}
            <button
              onClick={() => {
                navigate("/contact");
                close();
              }}
              className="mt-4 bg-[#6b5cb2] text-white px-6 py-2 rounded-lg border border-[#5a4a9c] hover:bg-[#5a4a9c] transition"
            >
              Discover the Platform
            </button>
          </div>
        </Drawer>
      </nav>
    </div>
  );
};

export default NavBar;
