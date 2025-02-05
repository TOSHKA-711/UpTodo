"use client";

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { closeDialogs } from "../Redux/Slices/DialogsSlice";
import { setPriority } from "../Redux/Slices/OneTaskSlice";
import { addTask } from "../Redux/Slices/TasksSlice";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PriorityDialog() {
  const DialogsState = useSelector((state: RootState) => state.DialogsReducer);
  const TaskState = useSelector((state: RootState) => state.OneTaskReducer);
  const dispatch = useDispatch();

  const PriorityItems = Array.from({ length: 10 }, (_, i) => i + 1);


  const handleAddTask =(e:React.MouseEvent<HTMLSpanElement> , item : number)=>{
    dispatch(setPriority(item))
    dispatch(addTask(TaskState))
    dispatch(closeDialogs())
  }

  return (
    <React.Fragment>
      <Dialog
        open={DialogsState.priority}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => dispatch(closeDialogs())}
        aria-describedby="alert-dialog-slide-description"
        className={" flex flex-col items-center justify-center gap-4"}
      >
        <DialogTitle
          className={
            "bg-[#363636] text-white text-center border-b-zinc-500 border-b-2"
          }
        >
          {"Task Priority"}
        </DialogTitle>
        <DialogContent className={"bg-[#363636]"}>
          <DialogContentText
            id="alert-dialog-slide-description"
            className={
              "bg-[#363636] flex flex-row items-center justify-center flex-wrap max-w-xs gap-2 gap-y-3  pt-5"
            }
            sx={{
              color: "#fff",
            }}
          >
            {PriorityItems.map((item) => (
              <span
                key={item}
                className="bg-[#272727] flex flex-col justify-center items-center w-10 px-8 pt-2 gap-1 rounded-lg hover:bg-[#8875FF] duration-300 cursor-pointer"
                onClick={(e)=>handleAddTask(e,item)}
              >
                <FaFontAwesomeFlag />
                {item}
              </span>
            ))}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
