
import { Box } from "@mui/material";
import Headers from "../components/Header";
import Geography from "../components/GeographyChart";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";


function Geographys() {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={"20px"}>
      <Headers title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box height={"75vh"} border={`1px solid ${colors.grey[100]}`} borderRadius={"6px"}>
        < Geography />
      </Box>
    </Box>
  );
}

export default Geographys;