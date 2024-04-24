"use client";

import React, { useState } from "react";
import { APPS } from "../(store)/content/content";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify-icon/react";

function AppsMenu() {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState();
  return (
    <div onClick={(e)=> {e.stopPropagation()}} className="bg-white overflow-auto scrollbar-hide   text-pry-color absolute left-0 mt-4 min-w-max   rounded-md shadow-md px-2 ">
      <ul className="mt-4">
        {APPS.map((item) => (
          <li
            onMouseOver={() => {
              setSelectedItem(item.slug);
            }}
            onMouseLeave={() => {
              setSelectedItem("");
            }}
            key={item.title}
            className={`p-2 mb-2  duration-300 rounded-md cursor-pointer select-none flex justify-between items-center bg-white gap-x-2 text-green-600 ${
              selectedItem === item.slug ? "hover:shadow  duration-300" : ""
            }`}
          >
            <div className="flex gap-2 items-center">
              <div className="w-12 h-12 rounded-xl border border-gray-100 flex items-center justify-center ">
                <Icon icon={item.icon} className="text-2xl" />
              </div>

              <div>
                <p className="text-pry-color   text-lg">
                  {item.title}
                </p>

                <p className="text-gray-400  text-sm">{item.subtitle} </p>
              </div>
            </div>

            <Icon
              icon="mingcute:right-line"
              className={`text-sec-color  ml-10 text-xl  ${
                selectedItem === item.slug ? "visible" : "invisible"
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppsMenu;
