"use client";

import React, { useState } from "react";
import { FILTER_BUTTONS } from "../(store)/content/content";
import { generalStore } from "../(store)/zustand/generalStore";

function DaysFilter() {
  const {
    filterData,
    setFilterData,
    anyDayButAllTime,
    setAnyDayButAllTime,
    filterList,
  } = generalStore();
  return (
    <div className="flex justify-between w-full mt-7">
      <div className="flex scroll-smooth  overflow-x-scroll justify-between items-center scrollbar-hide gap-x-2 ">
        {FILTER_BUTTONS.map((button) => (
          <div key={button.value} className="  relative ">
            <button
              onClick={() => {
                setAnyDayButAllTime(button.value);
                if (button.value === anyDayButAllTime) {
                  //Unselecting
                  setFilterData({ ...filterData, specificRange: "allTime" });
                  setAnyDayButAllTime("allTime");
                } else {
                  // Selecting
                  setFilterData({
                    ...filterData,
                    specificRange: button.value,
                  });
                }
              }}
              className={`px-[18px] py-[10px] cursor-pointer select-none whitespace-nowrap   border   text-sm font-semibold rounded-full  ${
                button.value === anyDayButAllTime
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
