import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  title: string;
  description: string;
  date: string;
  time: string;
  priority: number;
  isDone: boolean;
}

// Load tasks from localStorage if they exist
const loadTasks = (): Task[] => {
  if (typeof window !== 'undefined') {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  }
  return []; // Return empty array if running on server
};

const initialState: Task[] = loadTasks();

const TasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem("tasks", JSON.stringify(state));
      }
    },
    removeTask: (state, action: PayloadAction<number>) => {
      const updatedTasks = state.filter((_, index) => index !== action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      }
      return updatedTasks;
    },
    toggleTaskStatus: (state, action: PayloadAction<number>) => {
      state[action.payload].isDone = !state[action.payload].isDone;
      if (typeof window !== 'undefined') {
        localStorage.setItem("tasks", JSON.stringify(state));
      }
    },
  },
});

export const { addTask, removeTask, toggleTaskStatus } = TasksSlice.actions;
export default TasksSlice.reducer;





// ===========================================
// ========== without local storage ========== 
// ===========================================

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface Task {
//   title: string;
//   description : string,
//   date: string;
//   time: string;
//   priority: number;
//   isDone: boolean;
// }

// export const initialState: Task[] = [];

// const TasksSlice = createSlice({
//   name: "tasksSlice",
//   initialState,
//   reducers: {
//     addTask: (state, action: PayloadAction<Task>) => {
//       state.push(action.payload);
//     },
//   },
// });


// export const {addTask} = TasksSlice.actions;
// export default TasksSlice.reducer;