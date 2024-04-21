"use client";
import { Icon } from "@iconify-icon/react";
import { Button, Tooltip } from "flowbite-react";
import React from "react";

function SideButtons() {
  return (
    <aside className="h-[90vh] flex fixed   w-fit items-center justify-center">
      <div className="rounded-full bg-white p-2 shadow">
        {/* //>Link */}
        <div className="flex gap-2">
          <Tooltip
            className="whitespace-nowrap ml-3"
            content="Link in Bio"
            placement="right"
          >
            <div className="flex hover:bg-gray-50 justify-center items-center p-3 rounded-full duration-300 text-gray-500 hover:text-emerald-600">
              <Icon icon="zondicons:link" className="text-2xl" />
            </div>
          </Tooltip>
        </div>

        {/* //>Store */}
        <div className="flex gap-2">
          <Tooltip
            className="whitespace-nowrap ml-3"
            content="Store"
            placement="right"
          >
            <div className="flex hover:bg-gray-50 justify-center items-center p-3 rounded-full duration-300 text-gray-500 hover:text-emerald-600">
              <Icon icon="mdi:store-marker" className="text-2xl" />
            </div>
          </Tooltip>
        </div>
        {/* //>Media Kitting */}
        <div className="flex gap-2">
          <Tooltip
            className="whitespace-nowrap ml-3"
            content="Media Kitting"
            placement="right"
          >
            <div className="flex hover:bg-gray-50 justify-center items-center p-3 rounded-full duration-300 text-gray-500 hover:text-emerald-600">
              <Icon
                icon="material-symbols-light:perm-media"
                className="text-2xl"
              />
            </div>
          </Tooltip>
        </div>

        {/* //>Invoicing */}
        <div className="flex gap-2">
          <Tooltip
            className="whitespace-nowrap ml-3"
            content="Invoicing"
            placement="right"
          >
            <div className="flex hover:bg-gray-50 justify-center items-center p-3 rounded-full duration-300 text-gray-500 hover:text-emerald-600">
              <Icon icon="fa-solid:file-invoice-dollar" className="text-2xl" />
            </div>
          </Tooltip>
        </div>
      </div>
    </aside>
  );
}

export default SideButtons;
