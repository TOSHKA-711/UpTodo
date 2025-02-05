"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { calenderOpen, closeDialogs } from "../Redux/Slices/DialogsSlice";
import { setDescription, setTitle } from "../Redux/Slices/OneTaskSlice";

// Correctly type the Transition component
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Define the type for the form data state
interface FormData {
  title: string;
  description: string;
}

export default function TaskDialog() {
  // Correctly type the formData state
  const [formData, setFormData] = React.useState<FormData>({
    title: "",
    description: "",
  });

  // Correctly type the useSelector hook
  const DialogsState = useSelector((state: RootState) => state.DialogsReducer);
  const dispatch = useDispatch(); 

  // Correct type for event handler
  const handleInputsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Correct type for handleNextClick
  const handleNextClick = () => {
    // Dispatch the title and description to the Redux store
    dispatch(setTitle(formData.title));
    dispatch(setDescription(formData.description));
    dispatch(calenderOpen());
  };

  return (
    <React.Fragment>
      <Dialog
        open={DialogsState.task}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => dispatch(closeDialogs())}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="bg-[#363636] text-white">
          {"Add Task"}
        </DialogTitle>
        <DialogContent className="bg-[#363636]">
          <DialogContentText
            id="alert-dialog-slide-description"
            className="bg-[#363636] flex flex-col gap-2"
            sx={{ color: "#fff" }}
          >
            <input
              className="bg-[#1D1D1D] border-2 border-zinc-500 p-2 outline-none focus:border-[#8687E7] rounded-[5px] w-64"
              type="text"
              placeholder="Title"
              value={formData.title}
              name="title"
              onChange={handleInputsChange}
            />
            <textarea
              className="bg-[#1D1D1D] border-2 border-zinc-500 p-2 outline-none focus:border-[#8687E7] rounded-[5px] w-64"
              placeholder="Description"
              value={formData.description}
              name="description"
              onChange={handleInputsChange}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions className="bg-[#363636] text-white">
          <Button
            onClick={() => dispatch(closeDialogs())}
            sx={{ color: "#D4D4D4" }}
          >
            Cancel
          </Button>
          <Button onClick={handleNextClick} sx={{ color: "#8875FF" }}>
            Next
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
