"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/images/logo.svg";
import { generalStore } from "@/app/(store)/zustand/generalStore";
import { Icon } from "@iconify-icon/react";
import { NAV_ITEMS } from "../(store)/content/content";
import { useRouter } from "next/navigation";
import ProfileMenu from "./ProfileMenu";
import { fetchUserClientSide } from "@/utils";

function Navbar() {
  const router = useRouter();
  const { menuIsClicked, setMenuIsClicked, user, setUser } = generalStore();
  const [selectedNavItem, setSelectedNavItem] = useState("/revenue");

   
  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const userData = await fetchUserClientSide();
        setUser(userData.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <nav className="bg-white min-w-full top-0 sticky pt-4 mb-5 ">
      <div className="relative min-w-fit">
        <div className="  w- flex justify-between items-center lg:gap-x-5 gap-x-2 px-2 lg:px-6  shadow py-[0.875rem] rounded-full  bg-white min-w-max">
          <Image
            onClick={() => {
              router.push("/");
            }}
            src={logo}
            alt="Mainstack Logo"
            className="cursor-pointer"
          />

          {/* //> */}
          <ul className="flex items-center gap-x-1 md:gap-x-2 lg:gap-x-5 ">
            {NAV_ITEMS.map((navItem) => (
              <li
                onClick={() => {
                  setSelectedNavItem(navItem.slug);
                  router.push(navItem.slug);
                }}
                key={navItem.title}
                className={`px-2 lg:px-4 py-1 lg:py-2  duration-300 rounded-full cursor-pointer select-none flex items-center gap-x-1 font-normal md:font-semibold text-sec-color text-xs md:text-sm  lg:text-base ${
                  selectedNavItem === navItem.slug
                    ? "bg-pry-color text-white duration-300"
                    : "bg-white text-sec-color hover:bg-gray-50"
                }`}
              >
                <Icon icon={navItem.icon} className="text-base md:text-xl" />
                <span> {navItem.title}</span>
              </li>
            ))}
          </ul>

          {/* //> */}
          <div className="flex items-center gap-x-2">
            <Icon
              icon="mdi:bell-outline"
              className="text-sec-color text-xl m-[5px] lg:m-[10px] cursor-pointer"
            />
            <Icon
              icon="material-symbols:chat-outline"
              className="text-sec-color text-xl m-[5px] lg:m-[10px] cursor-pointer"
            />

            <div
              onClick={(e) => {
                // e.stopPropagation();
                setMenuIsClicked(!menuIsClicked);
              }}
              className="rounded-full cursor-pointer pl-[5px] pr-3 py-1 flex gap-x-2 bg-[#eff1f6] items-center"
            >
              <p className="text-center flex justify-center items-center w-6 lg:w-8 h-6 lg:h-8 text-white bg-pry-color rounded-full font-semibold text-sm">
                {user?.first_name?.charAt(0).toUpperCase()}
                {user?.last_name?.charAt(0).toUpperCase()}
              </p>
              <Icon icon="material-symbols-light:menu" className="text-2xl" />
            </div>
          </div>
        </div>
        {menuIsClicked && <ProfileMenu />}
      </div>
    </nav>
  );
}

export default Navbar;
