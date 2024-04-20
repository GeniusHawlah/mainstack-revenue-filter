"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { generalStore } from "@/app/(store)/zustand/generalStore";
import secureLocalStorage from "react-secure-storage";

function Navbar() {
  const {
    isLoggedIn,
   
  } = generalStore();

  // //>To persist the login state and other data
  useEffect(() => {
    if (secureLocalStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(secureLocalStorage.getItem("isLoggedIn"));
    }

    if (secureLocalStorage.getItem("selectedAddress")) {
      setSelectedAddress(secureLocalStorage.getItem("selectedAddress"));
    }


  }, []);

  return (
    <nav
      className="   flex "
    >

      <div className="flex justify-end md:justify-between items-center w-full  z-40 gap-x-12">
        <div className="w-[70%] hidden md:block ">
          {" "}
        </div>
        <div className="flex justify-between items-center relative ">
          <div className="flex items-center">
            {!isLoggedIn && (
              <p
                onClick={() => {
                  secureLocalStorage.setItem("isLoggedIn", true);
                }}
                className="text-sm font-semibold dark:text-the-blue text-the-blue cursor-pointer select-none  "
              >
                LOGIN
              </p>
            )}

            {isLoggedIn && (
              <div className=" flex gap-x-[13px] items-center  ">
                <span className="font-normal text-base hidden lg:block">
                  Welcome!
                </span>{" "}
                <Image
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowProfileDropdown(!showProfileDropdown);
                  }}
                  className="cursor-pointer"
                  src="/images/user_dp.png"
                  alt="User DP"
                  width={36}
                  height={36}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
