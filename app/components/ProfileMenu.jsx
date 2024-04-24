"use client";

import React from "react";
import { generalStore } from "../(store)/zustand/generalStore";
import { DUPLICATED_NAV_ITEMS, MOBILE_NAV_ITEMS } from "../(store)/content/content";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify-icon/react";

function ProfileMenu() {
  const router = useRouter();
  const { setMenuIsClicked, selectedNavItem, setSelectedNavItem,  user } = generalStore();
  return (
    <div className="bg-white  h-[85vh] text-pry-color absolute right-0 w-[300px] 630:w-[400px] mt-1 rounded-md shadow-md p-5 pb-20 scrollbar-hide  overflow-auto">
      {/* //>User details */}
      <div className="flex gap-x-2 items-center">
        <p className="text-center flex justify-center items-center w-8 h-8 text-white bg-pry-color rounded-full  font-semibold text-sm">
          {user?.first_name?.charAt(0).toUpperCase()}
          {user?.last_name?.charAt(0).toUpperCase()}
        </p>

        <div>
          <p className="text-pry-color font-semibold text-lg">
            {user?.first_name} {user?.last_name}
          </p>

          <p className="text-gray-400 font-medium text-sm">{user?.email} </p>
        </div>
      </div>

      <ul className="mt-8 630:hidden">
        {DUPLICATED_NAV_ITEMS.map((navItem) => (
          <li
            onClick={() => {
              setSelectedNavItem(navItem.slug);
              // router.push(navItem.slug);
              // setMenuIsClicked(false)
            }}
            key={navItem.title}
            className={`px-4 mb-3 py-2  duration-300 rounded-full cursor-pointer select-none flex items-center gap-x-2 font-semibold text-sec-color text-base ${
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

      <ul className="mt-0 630:mt-8">
        {MOBILE_NAV_ITEMS.map((navItem) => (
          <li
            onClick={() => {
              setSelectedNavItem(navItem.slug);
              // router.push(navItem.slug);
              // setMenuIsClicked(false)
            }}
            key={navItem.title}
            className={`px-4 mb-3 py-2  duration-300 rounded-full cursor-pointer select-none flex items-center gap-x-2 font-semibold text-sec-color text-base ${
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
    </div>
  );
}

export default ProfileMenu;
