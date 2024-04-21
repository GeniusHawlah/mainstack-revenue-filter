"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/images/logo.svg";
import { generalStore } from "@/app/(store)/zustand/generalStore";
import secureLocalStorage from "react-secure-storage";

function Navbar() {
  const { isLoggedIn } = generalStore();

  return (
    <nav className="bg-white w-full top-0 sticky pt-4 mb-5 ">
      <div className="  w-full flex justify-between gap-x-5 px-6  shadow py-[0.875rem] rounded-full  bg-white">
      <Image src={logo} alt="Mainstack Logo" />

      </div>
    </nav>
  );
}

export default Navbar;
