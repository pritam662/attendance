"use client";

import React from "react";

import { DatePicker } from "../components/DatePicker";

interface AttendanceFilterProps {
  handleSearch: (searchTerm: string) => void;
  children?: React.ReactNode;
}

function AttendanceFilter({ handleSearch, children }: AttendanceFilterProps) {

  return (
    <div className="flex py-3 my-4 gap-x-2">
      <div>
        <input
          className="focus:border-accent bg-bg_primary py-1 px-2 outline-none w-[200px] border-b-[1px] border-secondary"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {children}
    </div>
  );
}

export default AttendanceFilter;
