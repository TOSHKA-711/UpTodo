"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { clockOpen, closeDialogs } from "../Redux/Slices/DialogsSlice";
import dayjs, { Dayjs } from "dayjs";
import { setDate } from "../Redux/Slices/OneTaskSlice";

const Transition = React.forwardRef<
  unknown,
  TransitionProps & { children: React.ReactElement }
>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CalenderDialog() {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());
  const DialogsState = useSelector((state: RootState) => state.DialogsReducer);
  const dispatch = useDispatch();

  const handleNextClick = () => {
    dispatch(setDate(selectedDate ? selectedDate.format("YYYY-MM-DD") : "None"));
    dispatch(clockOpen());
  };

  return (
    <Dialog
      open={DialogsState.calender}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => dispatch(closeDialogs())}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        "& .MuiPaper-root": { margin: "15px" },
        "& .MuiDialogContent-root": { padding: "20px 0px" },
      }}
    >
      <DialogContent className="bg-[#363636] text-white">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={selectedDate}
            onChange={(newValue) => newValue && setSelectedDate(newValue)}
            sx={{
              "& .MuiTypography-root": { color: "#fff" },
              "& .MuiPickersDay-root": { color: "#fff" },
              "& .MuiPickersDay-root.Mui-selected": {
                backgroundColor: "#fff !important",
                color: "#000 !important",
              },
              "& .MuiOutlinedInput-root": { color: "#fff" },
              "& .MuiSvgIcon-root": { color: "#fff" },
              "& .MuiPickersCalendarHeader-root .MuiTypography-root": {
                color: "#fff",
              },
              "& .MuiPickersCalendarHeader-root": {
                borderBottom: "2px solid #fff",
                marginBottom: "1rem",
              },
            }}
          />
        </LocalizationProvider>
      </DialogContent>
      <DialogActions className="bg-[#363636] text-white">
        <Button onClick={() => dispatch(closeDialogs())} sx={{ color: "#D4D4D4" }}>
          Cancel
        </Button>
        <Button onClick={handleNextClick} sx={{ color: "#8875FF" }}>
          Next
        </Button>
      </DialogActions>
    </Dialog>
  );
}
