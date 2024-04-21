"use client";
import React from "react";
import { generalStore } from "../(store)/zustand/generalStore";

function TransparentOverlay() {
  const { setMenuIsClicked, menuIsClicked } = generalStore();
  return (
    <div
      onClick={() => setMenuIsClicked(false)}
      className={`fixed w-full  h-screen bg-transparent ${
        menuIsClicked ? "block" : "hidden"
      }`}
    ></div>
  );
}

export default TransparentOverlay;
