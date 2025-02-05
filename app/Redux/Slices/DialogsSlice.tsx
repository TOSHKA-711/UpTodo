import { createSlice } from "@reduxjs/toolkit";

interface dialogs {
  task: boolean;
  calender: boolean;
  clock: boolean;
  priority: boolean;
}

export const initialState: dialogs = {
  task: false,
  calender: false,
  clock: false,
  priority: false,
};

const DialogsSlice = createSlice({
  name: "dialogsSlice",
  initialState,
  reducers: {
    taskOpen: (state) => {
      (state.task = true),
        (state.calender = false),
        (state.clock = false),
        (state.priority = false);
    },
    calenderOpen: (state) => {
      (state.task = false),
        (state.calender = true),
        (state.clock = false),
        (state.priority = false);
    },
    clockOpen: (state) => {
      (state.task = false),
        (state.calender = false),
        (state.clock = true),
        (state.priority = false);
    },
    priorityOpen: (state) => {
      (state.task = false),
        (state.calender = false),
        (state.clock = false),
        (state.priority = true);
    },
    closeDialogs: (state) => {
      (state.task = false),
        (state.calender = false),
        (state.clock = false),
        (state.priority = false);
    },
  },
});


export const {taskOpen , calenderOpen , clockOpen ,priorityOpen , closeDialogs} = DialogsSlice.actions;
export default DialogsSlice.reducer;