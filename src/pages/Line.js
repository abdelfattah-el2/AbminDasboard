import { Box } from "@mui/material";
import Headers from "../components/Header";
import Lines from "../components/LineChart";

function LineCharts() {
  return (
    <Box m={"20px"} >
      <Headers title="Line Chart" subtitle="Simple Line Chart" />
      <Box height={"75vh"}>
        <Lines />
      </Box>
    </Box>
  );
}

export default LineCharts;
