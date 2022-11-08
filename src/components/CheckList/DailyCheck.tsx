import { useState } from "react";
import CheckListEditor from "./CheckListEditor";
import DailyCheckList from "./DailyCheckList";
import { dayScheduleData } from "../Calender/dataSet/dataSet";

const DailyCheck = (props) => {
  // const testData = dayScheduleData;
  // return (
  //   <div className="DailyCheck">
  //     <DailyCheckList dailyCheckList={testData} />
  //   </div>
  // );
  const [data, setData] = useState(dayScheduleData);
  //전체 data.length임 지금은, 날짜별로 구분해야함
  // const now = data.filter((data) => data.date === "2022-11-03");
  // const [count, setCount] = useState(now.length);
  const [count, setCount] = useState(data.length);

  const onCreate = (date: string, title: string) => {
    const newItem = {
      id: count + 1,
      date: props.value,
      title
    };
    setCount(count + 1);
    setData([newItem, ...data]);
  };

  const onDelete = (targetId: number) => {
    const newDailyCheckList = data.filter((it) => it.id !== targetId);
    setData(newDailyCheckList);
  };

  return (
    <div className="App">
      <CheckListEditor onCreate={onCreate} />
      <DailyCheckList onDelete={onDelete} dailyCheckList={data} />
    </div>
  );
};

export default DailyCheck;
