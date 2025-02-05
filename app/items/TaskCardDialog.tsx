"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { LuClock4 } from "react-icons/lu";
import { CiCalendarDate } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeTask } from "../Redux/Slices/TasksSlice";
import Swal from "sweetalert2";

// Typing the Transition component properly
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement }, // Fixing the type of children
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Define the types for the props passed into the TaskCardDialog component
interface Props {
  description: string;
  open: boolean;
  time: string;
  date: string;
  priority: number;
  index: number;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TaskCardDialog({
  description,
  time,
  date,
  priority,
  index,
  open,
  setClose,
}: Props) {
  const dispatch = useDispatch();

  // Delete task handler
  const handleDeleteTask = () => {
    dispatch(removeTask(index)); // Dispatch the removeTask action
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
    setClose(false); // Close the dialog
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setClose(false)} // Close the dialog when clicked outside
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialogContent-root": {
            padding: "20px 0px",
          },
          "& .MuiPaper-root": { margin: "15px" },
        }}
      >
        <DialogTitle className="bg-[#363636] text-zinc-300 text-lg whitespace-normal break-words">
          {description}
        </DialogTitle>
        <DialogContent
          className="bg-[#363636] min-w-80"
          sx={{
            color: "#fff",
            "& .MuiDialogContentText-root": {
              fontSize: "22px !important",
            },
          }}
        >
          <span className="flex flex-row items-center gap-2 p-2 text-lg">
            <LuClock4 />
            <p>Task Time : {time}</p>
          </span>
          <span className="flex flex-row items-center gap-2 p-2 text-lg">
            <CiCalendarDate />
            <p>Task Date : {date}</p>
          </span>
          <span className="flex flex-row items-center gap-2 p-2 text-lg">
            <CiFlag1 />
            <p>Task Priority : {priority}</p>
          </span>
          <span
            className="flex flex-row items-center gap-2 p-2 text-lg text-[#FF4949] cursor-pointer"
            onClick={handleDeleteTask} // Handle delete click
          >
            <MdDeleteOutline />
            <p>Delete Task</p>
          </span>
        </DialogContent>
        <DialogActions className="bg-[#363636] text-white">
          <Button onClick={() => setClose(false)} sx={{ color: "#8875FF" }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
