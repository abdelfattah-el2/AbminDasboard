import { Box } from "@mui/material";
import Headers from "../components/Header";
import Bar from "../components/BarChart";

function Bars() {
  return (
    <Box m={"20px"} >
      <Headers title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height={"75vh"}>
        <Bar />
      </Box>
    </Box>
  );
}

export default Bars;
