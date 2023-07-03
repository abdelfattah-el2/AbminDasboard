import { Box } from "@mui/material";
import Headers from "../components/Header";
import PieChars from "../components/PieChart";


function Pies() {
  return (
    <Box m={"20px"}>
      <Headers title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height={"75vh"}>
        <PieChars />
      </Box>
    </Box>
  );
}

export default Pies;