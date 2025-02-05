"use client"
import TaskCard from "@/app/items/TaskCard";
import { RootState } from "@/app/Redux/Store";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";

const Tasks: React.FC = () => {
 
    const TasksState = useSelector((state:RootState)=> state.TasksReducer )


  return (
    <div className="tasks flex flex-col items-center justify-start gap-12 min-h-[75vh] py-8">
      <div className="search-bar flex flex-row items-center justify-center gap-1 bg-[#1D1D1D] border-2 border-zinc-500 px-2 outline-none hover:border-[#8687E7] rounded-[5px] w-[22rem] max-sm:w-80">
        <CiSearch className="text-4xl text-zinc-400 "/>
        <input type="text" className=" border-none outline-none bg-inherit w-96 p-2" placeholder="Search for your task..."/>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
      {TasksState.length > 0 ? (
          TasksState.map((task , index) => (
            <TaskCard key={task.time || index} task={task} index={index} />
          ))
        ) : (
          <p className="text-zinc-400">No tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default Tasks;
