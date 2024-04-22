"use client";
import { Icon } from "@iconify-icon/react";
import { Tooltip } from "flowbite-react";
import React from "react";

function InfoIcon({toolTipText}) {
  return (
    <div>
      <div className="flex gap-2">
        <Tooltip
          className="whitespace-nowrap pl-3 "
          content={toolTipText}
          placement="left"
        //   style="light"
        >
          <Icon
            icon="material-symbols-light:info-outline"
            className="text-xl"
          />
        </Tooltip>
      </div>
    </div>
  );
}

export default InfoIcon;
