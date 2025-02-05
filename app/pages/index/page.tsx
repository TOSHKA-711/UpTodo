"use client";
import React from "react";
import CalenderDialog from "@/app/items/CalenderDialog";
import ClockDialog from "@/app/items/ClockDialog";
import PriorityDialog from "@/app/items/PriorityDialog";
import TaskDialog from "@/app/items/TaskDialog";
import Tasks from "./Tasks";
import { useSelector } from "react-redux";
import { RootState } from "@/app/Redux/Store";
import Image from "next/image";

const Index: React.FC = () => {
  const TasksState = useSelector((state: RootState) => state.TasksReducer);

  return (
    <>
      <TaskDialog />
      <CalenderDialog />
      <ClockDialog />
      <PriorityDialog />
      {TasksState.length > 0 ? (
        <Tasks />
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 min-h-[75vh]">
          <Image src="/Checklist-rafiki 1.png" alt="checklist" width={230} height={50}/>
          <h1 className="text-3xl text-zinc-400 max-sm:text-2xl">
            What do you want to do today?
          </h1>
          <p className="text-zinc-400">Tap + to add your tasks</p>
        </div>
      )}
    </>
  );
};

export default Index;
