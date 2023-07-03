import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircles from "./ProgressCircle";

function StatBoxs({ title, subtitle, icon, progres, increase }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width={"100%"} m={"0 30px"}>
      <Box display={"flex"} justifyContent={"space-between"}>
        {icon}
        <Typography
          variant="h4"
          fontWeight={"bold"}
          sx={{
            color: colors.grey[100],
          }}
        >
          {title}
        </Typography>
      <Box display={"flex"} justifyContent={"space-between"}>
        <ProgressCircles progress={progres} />
      </Box>
      </Box>
      <Box>
        {" "}
        <Typography
          variant="h5"
          fontWeight={"bold"}
          sx={{
            color: colors.greenAccent[500],
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle={'italic'}
          sx={{
            color: colors.greenAccent[600],
          }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
}

export default StatBoxs;
