import React from "react";

import { CalendarX2, Users2, CalendarCheck2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function AttendanceStats({
  data,
}: {
  data: AttendanceSummary | undefined;
}) {
  const cards = [
    {
      label: "Total Employees",
      icon: (
        <Users2 className="h-[22px] w-[22px] transition-all group-hover:scale-110 text-amber-600" />
      ),
      count: data?.totalEmployees ?? 0,
    },
    {
      label: "Present Employees",
      icon: (
        <CalendarCheck2 className="h-[22px] w-[22px] transition-all group-hover:scale-110 text-lime-600" />
      ),
      count: data?.presentCount ?? 0,
    },
    {
      label: "Absent Employees",
      icon: (
        <CalendarX2 className="h-[22px] w-[22px] transition-all group-hover:scale-110 text-rose-600" />
      ),
      count: data?.absentCount ?? 0,
    },
    {
      label: "On Time Employees",
      icon: (
        <CalendarX2 className="h-[22px] w-[22px] transition-all group-hover:scale-110 text-rose-600" />
      ),
      count: data?.onTimeCount ?? 0,
    },
    {
      label: "Late Employees",
      icon: (
        <CalendarX2 className="h-[22px] w-[22px] transition-all group-hover:scale-110 text-rose-600" />
      ),
      count: data?.lateCount ?? 0,
    },
    {
      label: "Full Day Employees",
      icon: (
        <CalendarX2 className="h-[22px] w-[22px] transition-all group-hover:scale-110 text-rose-600" />
      ),
      count: data?.fullDayCount ?? 0,
    },
    {
      label: "Half Day Employees",
      icon: (
        <CalendarX2 className="h-[22px] w-[22px] transition-all group-hover:scale-110 text-rose-600" />
      ),
      count: data?.halfDayCount ?? 0,
    },
  ];

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-5 mt-4">
      {cards.map((card) => (
        <Card
          className="md:w-[225px] max-md:w-[95%] bg-bg_primary border-[1px] border-zinc-300"
          key={card.label}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.label}</CardTitle>
            {card.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.count}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default AttendanceStats;
