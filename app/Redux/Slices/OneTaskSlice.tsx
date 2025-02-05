import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Task {
  title: string,
  description : string,
  date: string,
  time: string,
  priority: number,
  isDone: boolean,
}

export const initialState: Task= {
    title: "",
    description: "",
    date: "",
    time: "",
    priority: 1,
    isDone: false,
};

const OneTaskSlice = createSlice({
  name: "oneTaskSlice",
  initialState,
  reducers: {
   setTitle : (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
   setDescription : (state, action: PayloadAction<string>) => {
      state.description = action.payload
    },
   setDate : (state, action: PayloadAction<string>) => {
      state.date = action.payload
    },
   setTime : (state, action: PayloadAction<string>) => {
      state.time = action.payload
    },
   setPriority: (state, action: PayloadAction<number>) => {
      state.priority = action.payload
    },
   setIsDone : (state, action: PayloadAction<boolean>) => {
      state.isDone = action.payload
    },
  },
});


export const {setTitle,setDescription,setDate,setTime,setIsDone,setPriority} = OneTaskSlice.actions;
export default OneTaskSlice.reducer;