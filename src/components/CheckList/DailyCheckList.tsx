import CheckItem from "./CheckItem";
import { Grid } from "@material-ui/core";

const DailyCheckList = ({ onDelete, dailyCheckList }: any) => {
  // const date = "2022-11-03";
  // const checkList = dailyCheckList.filter((a) => a.date === date);

  // return (
  //   <Grid>
  //     <Grid>
  //       <h1> 일정 </h1>
  //     </Grid>
  //     {checkList.map((it: any) => {
  //       return <CheckItem key={it.id} {...it} onDelete={onDelete} />;
  //     })}
  //   </Grid>
  // );
  return (
    <Grid>
      <Grid>
        <h1> 일정 </h1>
      </Grid>
      {dailyCheckList.map((it: any) => {
        return <CheckItem key={it.id} {...it} onDelete={onDelete} />;
      })}
    </Grid>
  );
};

export default DailyCheckList;
