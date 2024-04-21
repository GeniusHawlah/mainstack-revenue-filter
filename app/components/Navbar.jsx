"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/images/logo.svg";
import { generalStore } from "@/app/(store)/zustand/generalStore";
import { Icon } from "@iconify-icon/react";
import { NAV_ITEMS } from "../(store)/content/content";
import { useRouter } from "next/navigation";
import ProfileMenu from "./ProfileMenu";

function Navbar() {
  const router = useRouter();
  const { menuIsClicked, setMenuIsClicked } = generalStore();

  const [selectedNavItem, setSelectedNavItem] = useState("/revenue");

  return (
    <nav className="bg-white w-full top-0 sticky pt-4 mb-5 ">
      <div className="relative">
        <div className="  w-full flex justify-between items-center gap-x-5 px-6  shadow py-[0.875rem] rounded-full  bg-white">
          <Image
            onClick={() => {
              router.push("/");
            }}
            src={logo}
            alt="Mainstack Logo"
            className="cursor-pointer"
          />

          {/* //> */}
          <ul className="flex items-center gap-x-5 ">
            {NAV_ITEMS.map((navItem) => (
              <li
                onClick={() => {
                  setSelectedNavItem(navItem.slug);
                  router.push(navItem.slug);
                }}
                key={navItem.title}
                className={` px-4 py-2  duration-300 rounded-full cursor-pointer select-none flex items-center gap-x-1 font-semibold text-sec-color text-base ${
                  selectedNavItem === navItem.slug
                    ? "bg-pry-color text-white duration-300"
                    : "bg-white text-sec-color hover:bg-gray-50"
                }`}
              >
                <Icon icon={navItem.icon} className="text-xl" />
                <span> {navItem.title}</span>
              </li>
            ))}
          </ul>

          {/* //> */}
          <div className="flex items-center gap-x-2">
            <Icon
              icon="mdi:bell-outline"
              className="text-sec-color text-xl m-[10px] cursor-pointer"
            />
            <Icon
              icon="material-symbols:chat-outline"
              className="text-sec-color text-xl m-[10px] cursor-pointer"
            />

            <div
              onClick={(e) => {
                // e.stopPropagation();
                setMenuIsClicked(!menuIsClicked);
              }}
              className="rounded-full cursor-pointer pl-[5px] pr-3 py-1 flex gap-x-2 bg-[#eff1f6] items-center"
            >
              <p className="text-center flex justify-center items-center w-8 h-8 text-white bg-pry-color rounded-full font-semibold text-sm">
                OJ
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
