"use client";
import React from "react";
import { FaXmark } from "react-icons/fa6";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeTask } from "../Redux/Slices/TasksSlice";
import Swal from "sweetalert2";
import TaskCardDialog from "./TaskCardDialog";

interface Task {
  title: string;
  description: string;
  date: string;
  time: string;
  priority: number;
  isDone: boolean;
}

interface TaskCardProps {
  task: Task;
  index: number;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, index }) => {
  const [descriptionDialog, setDescriptionDialog] = React.useState(false);
  const dispatch = useDispatch();

  const showAlert = () => {
    Swal.fire({
      title: "Success!",
      text: "Task Deleted successfully.",
      icon: "success",
      confirmButtonText: "OK",
      width: "300px",
      background: "#1E293B",
      color: "#F8FAFC ",
      confirmButtonColor: "#8875FF",
    });
  };

  const handleDeleteTask = () => {
    dispatch(removeTask(index));
    showAlert();
  };

  const handleCardClick = () => {
    setDescriptionDialog(true);
  };

  return (
    <>
      <TaskCardDialog
        description={task.description}
        time={task.time}
        date={task.date}
        priority={task.priority}
        index={index}
        open={descriptionDialog}
        setClose={setDescriptionDialog}
      />
      <div
        onClick={handleCardClick}
        className="task-card flex flex-row items-center justify-between gap-3 px-2 py-3 bg-[#363636] rounded-lg w-80 hover:w-[21rem] duration-300 cursor-pointer"
      >
        <div className="flex flex-row items-center justify-start gap-3">
          <FaXmark
            className="cursor-pointer text-xl text-zinc-400 hover:text-zinc-300 hover:scale-110 duration-300"
            onClick={() => handleDeleteTask()}
          />
          <span className="text-zinc-400">
            <h1 className="text-zinc-300">{task.title}</h1>
            <p>
              {task.date} at {task.time}
            </p>
          </span>
        </div>
        <span className="bg-[#272727] flex flex-row justify-center items-center self-end p-3 gap-1 rounded-lg hover:bg-[#8875FF] duration-300">
          <FaFontAwesomeFlag /> {task.priority}
        </span>
      </div>
    </>
  );
};

export default TaskCard;
