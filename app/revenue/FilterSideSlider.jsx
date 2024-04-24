"use client";

import { Icon } from "@iconify-icon/react";
import React, { useEffect, useState } from "react";
import { generalStore } from "../(store)/zustand/generalStore";
import DaysFilter from "./DaysFilter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  customTheme,
  dateToDisplay,
  filterTransactions,
  formatArray,
  formatDateLongYear,
  updateParam,
} from "@/utils";
import { Datepicker } from "flowbite-react";
import TransactionTypeCheckboxes from "./TransactionTypeCheckboxes";
import TransactionStatusCheckboxes from "./TransactionStatusCheckboxes";

function FilterSideSlider() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [showTransactionTypes, setShowTransactionTypes] = useState(false);
  const [showTransactionStatus, setShowTransactionStatus] = useState(false);
  const [selectedTransactionTypes, setSelectedTransactionTypes] = useState([]);

  const [selectedTransactionStatus, setSelectedTransactionStatus] = useState(
    []
  );

  const {
    setShowFilter,
    allTransactions,
    setDuplicateTransactions,
    showFilter,
    filterData,
    setFilterData,
  } = generalStore();

  function handleChange(e) {
    const { name, value } = e.target;

    setFilterData({
      ...filterData,
      [name]: value,
    });
  }

  useEffect(() => {
    function handleScroll() {
      const sc = new URLSearchParams(window.location.search).get("sc");
      if (sc) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'visible';
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      onClick={() => {
        document.body.style.overflow = 'visible';
        updateParam({
          key: "",
          value: "",
          router,
          pathName,
          searchParams,
        });
        setShowFilter(false);
      }}
      className={`bg-black bg-opacity-20 w-full h-screen fixed z-[20] right-0  duration-700 flex justify-end ${
        showFilter ? " translate-x-0 " : "translate-x-full "
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`bg-white shadow-sm rounded p-5 w-[620px] h-full overflow-auto max-h-fit relative `}
      >
        {/* //> */}
        <div className="flex justify-between items-center">
          <p className="font-bold text-2xl text-pry-color select-none">
            Filter
          </p>

          <Icon
            icon="carbon:close"
            className="text-2xl cursor-pointer"
            onClick={() => {
              document.body.style.overflow = 'visible';
              updateParam({
                key: "",
                value: "",
                router,
                pathName,
                searchParams,
              });
              setShowFilter(false);
            }}
          />
        </div>

        <DaysFilter />

        <form action="" className="mt-6">
          {/* //>Date range */}
          <div>
            <p className="text-base font-semibold text-pry-color">Date Range</p>
            <div className="mt-3 640:flex w-full gap-x-[6px] items-center">
              {/* <Flowbite theme={{ theme: customTheme }}> */}{" "}
              <Datepicker 
                disabled={filterData.specificRange !== "allTime"}
                showClearButton={false}
                showTodayButton={false}
                theme={customTheme}
                placeholder="Pick a date"
                value={
                  filterData.startDate
                    ? dateToDisplay(filterData.startDate)
                    : ""
                }
                weekStart={1}
                name="startDate"
                onSelectedDateChanged={(date) => {
                  setFilterData({ ...filterData, startDate: date });
                }}
                className="640:w-1/2 border-0"
              />
              {/* </Flowbite> */}
              <Datepicker
                disabled={filterData.specificRange !== "allTime"}
                showClearButton={false}
                showTodayButton={false}
                theme={customTheme}
                placeholder="Pick a date"
                value={
                  filterData.endDate ? dateToDisplay(filterData.endDate) : ""
                }
                weekStart={1}
                name="endDate"
                onSelectedDateChanged={(date) => {
                  setFilterData({ ...filterData, endDate: date });
                }}
                className="640:w-1/2 mt-3 640:mt-0"
              />
            </div>
          </div>

          {/* //>Transaction type */}
          <div className="mt-7">
            <p className="text-base font-semibold text-pry-color">
              Transaction Type
            </p>
            <div className=" relative">
              <button
                type="button"
                onClick={() => {
                  setShowTransactionTypes(!showTransactionTypes);
                }}
                className={`mt-3  bg-gray-100 rounded-md font-medium flex justify-between items-center py-4 w-full px-2 text-sm border ${
                  showTransactionTypes ? " border-pry-color bg-white" : ""
                }`}
              >
                <span>
                  {selectedTransactionTypes.length > 0
                    ? formatArray(selectedTransactionTypes)
                    : "Select Transaction Type"}
                </span>
                <Icon icon="mingcute:down-line" className="text-base" />
              </button>

              {showTransactionTypes && (
                <TransactionTypeCheckboxes
                  selectedTransactionTypes={selectedTransactionTypes}
                  setSelectedTransactionTypes={setSelectedTransactionTypes}
                />
              )}
            </div>
          </div>

          {/* //>Transaction Status */}
          <div className="mt-7">
            <p className="text-base font-semibold text-pry-color">
              Transaction Status
            </p>
            <div className=" relative">
              <button
                type="button"
                onClick={(e) => {
                  setShowTransactionStatus(!showTransactionStatus);
                }}
                className={`mt-3 bg-gray-100 rounded-md font-medium flex justify-between items-center py-4 w-full px-2 text-sm border ${
                  showTransactionStatus ? " border-pry-color bg-white" : ""
                }`}
              >
                <span>
                  {selectedTransactionStatus.length > 0
                    ? formatArray(selectedTransactionStatus)
                    : "Select Transaction Status"}
                </span>
                <Icon icon="mingcute:down-line" className="text-base" />
              </button>

              {showTransactionStatus && (
                <TransactionStatusCheckboxes
                  selectedTransactionStatus={selectedTransactionStatus}
                  setSelectedTransactionStatus={setSelectedTransactionStatus}
                />
              )}
            </div>
          </div>

          {/* //>Buttons */}
          <div className="bottom-0 right-0 absolute px-6 py-5 w-full flex items-center gap-x-3">
            <button
              className="w-1/2 text-base font-semibold duration-300 hover:bg-gray-50 py-3 rounded-full border border-gray-500 text-pry-color"
              type="button"
              onClick={() => {
                document.body.style.overflow = 'visible';
                updateParam({
                  key: "",
                  value: "",
                  router,
                  pathName,
                  searchParams,
                });
                setDuplicateTransactions(
                  filterTransactions({
                    transactionList: allTransactions,
                    type: "",
                    status: "",
                    startDate: "",
                    endDate: "",
                    specificRange: "allTime",
                  })
                );
                setShowFilter(false);
              }}
            >
              Clear
            </button>

            <button
              className="w-1/2 py-3 text-white rounded-full bg-pry-color   text-base font-semibold duration-300 hover:bg-gray-700 "
              type="button"
              onClick={() => {
                document.body.style.overflow = 'visible';
                updateParam({
                  key: "",
                  value: "",
                  router,
                  pathName,
                  searchParams,
                });
                setDuplicateTransactions(
                  filterTransactions({
                    transactionList: allTransactions,
                    type: selectedTransactionTypes,
                    status: selectedTransactionStatus,
                    startDate: filterData.startDate,
                    endDate: filterData.endDate,
                    specificRange: filterData.specificRange,
                  })
                );

                setShowFilter(false);
              }}
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FilterSideSlider;
