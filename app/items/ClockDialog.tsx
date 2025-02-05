"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { closeDialogs, priorityOpen } from "../Redux/Slices/DialogsSlice";
import { setTime } from "../Redux/Slices/OneTaskSlice";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ClockDialog() {
  const DialogsState = useSelector((state: RootState) => state.DialogsReducer);
  const dispatch = useDispatch();

  // State to hold the selected time
  const [selectedTime, setSelectedTime] = React.useState(
    dayjs("2022-04-17T15:30")
  );

  // Function to handle time change
  const handleTimeChange = (newValue: any) => {
    setSelectedTime(newValue); // Update the state with the new time
  };

  // You can log the selected time value or use it wherever needed

  const handleNextClick = () => {
    dispatch(setTime(selectedTime.format("HH:mm")));
    dispatch(priorityOpen());
  };

  return (
    <React.Fragment>
      <Dialog
        open={DialogsState.clock}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => dispatch(closeDialogs())}
        aria-describedby="alert-dialog-slide-description"
        className={" "}
        sx={{
          "& .MuiPaper-root": { backgroundColor: "inherit" , margin:"15px"},
          "& .MuiDialogContent-root": {
            padding: "20px 0px",
          },
          "& .MuiStack-root": {
            overflow:"hidden",
          },
        }}
      >
        <DialogContent className={"bg-[#363636] text-white "} >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={[
                "TimePicker",
                "MobileTimePicker",
                "DesktopTimePicker",
                "StaticTimePicker",
              ]}
              sx={{
                "& .MuiPickersLayout-root": { backgroundColor: "inherit" },
                "& .MuiTypography-root": { color: "#fff" },
                "& .MuiIconButton-root": { color: "#fff" },
                "& .MuiPickersLayout-actionBar": { display: "none" },
                "& .MuiStack-root ": {
                  overflow: "hidden",
                  alignItems: "center",
                },
              }}
            >
              <StaticTimePicker
                value={selectedTime} // Bind the selected time value
                onChange={handleTimeChange} // Update the state on time change
              />
            </DemoContainer>
          </LocalizationProvider>
        </DialogContent>
        <DialogActions className={"bg-[#363636] text-white"}>
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
