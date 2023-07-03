import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

function Headers(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight={"bold"}
        sx={{ mb: "5px" }}
      >
     
        {props.title.toUpperCase()}
      </Typography>
      <Typography variant="h6" color={colors.greenAccent[400]}>
        {props.subtitle.charAt(0).toUpperCase() + props.subtitle.slice(1)}
      </Typography>
    </Box>
  );
}

export default Headers;
