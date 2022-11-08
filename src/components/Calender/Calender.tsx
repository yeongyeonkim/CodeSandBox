import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import Box from "@mui/material/Box";
// import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";
import moment from "moment";
import DailyCheck from "../CheckList/DailyCheck";

const Calender = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        formatDay={(locale, date: any) => moment(date).format("DD")}
      />
      <div className="text-gray-500 mt-4">
        {moment(value).format("YYYY년 MM월 DD일")}
      </div>
      {/* <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab variant="extended" size="small" color="primary">
          입력
          <AddIcon />
        </Fab>
      </Box> */}

      <div>{<DailyCheck value={moment(value).format("YYYY-MM-DD")} />}</div>
    </div>
  );
};
export default Calender;
