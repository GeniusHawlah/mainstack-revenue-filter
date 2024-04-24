"use client";

import React, { useState } from "react";
import { FILTER_BUTTONS } from "../(store)/content/content";
import { generalStore } from "../(store)/zustand/generalStore";

function DaysFilter() {
  const {
    filterData,
    setFilterData,
    todayOrTheRest,
    setTodayOrTheRest,
    filterList,
  } = generalStore();
  return (
    <div className="flex justify-between w-full mt-7">
      <div className="flex scroll-smooth  overflow-x-scroll justify-between items-center scrollbar-hide gap-x-2 ">
        {FILTER_BUTTONS.map((button) => (
          <div key={button.value} className="  relative ">
            <button
              onClick={() => {
               
                setTodayOrTheRest(button.value);
                if (button.value === todayOrTheRest) {
                  //Unselecting
                  setFilterData({ ...filterData, specificRange: "allTime" });
                  setTodayOrTheRest("allTime");
                } else {
                  // Selecting
                  setFilterData({
                    ...filterData,
                    specificRange: button.value,
                  });
                 
                }
              }}
              className={`px-[18px] py-[10px] cursor-pointer select-none whitespace-nowrap   border   text-sm font-semibold rounded-full  ${
                button.value === todayOrTheRest
                  ? "bg-pry-color text-white"
                  : "hover:bg-gray-50 bg-white"
              }`}
            >
              {button.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DaysFilter;
