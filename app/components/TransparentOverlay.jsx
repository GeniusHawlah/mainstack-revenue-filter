"use client";
import React from "react";
import { generalStore } from "../(store)/zustand/generalStore";

function TransparentOverlay() {
  const { setMenuIsClicked, menuIsClicked, showFilter, setShowFilter } =
    generalStore();
  return (
    <div
      onClick={() => {
        setMenuIsClicked(false);
        setShowFilter(false);
      }}
      className={`fixed w-full  h-screen bg-transparent ${
        menuIsClicked || showFilter ? "block" : "hidden"
      }`}
    ></div>
  );
}

export default TransparentOverlay;
