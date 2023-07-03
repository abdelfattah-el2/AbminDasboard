import { Box, IconButton, Button, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkMode";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import Clock from "../components/Clock";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorsMode = useContext(ColorModeContext);
  let [cn, setcn] = useState(" ");
  let [cnname, setcnname] = useState("local");
  return (
    <Box display="flex" justifyContent="space-between"  p={2}>
      {/* search bar */}
      
      <Box display="flex" bgcolor={colors.primary[400]} borderRadius="3px">
  
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type={"button"} sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex">
        <Button
          sx={{ textAlign: "center", p: "8px", color: colors.grey[100] }}
          onClick={() => {
            if (cn === " ") {
              setcn({ timeZone: "America/New_York" });
              setcnname("US/NY");
            } else if (cn.timeZone === "America/New_York") {
              setcn({ timeZone: "Europe/London" });
              setcnname("UK/LON");
            } else if (cn.timeZone === "Europe/London") {
              setcn({ timeZone: "Asia/Tokyo" });
              setcnname("JP/TYO");
            } else if (typeof cn === "object") {
              setcn(" ");
              setcnname("local");
            }
          }}
        >
          <p style={{ margin: "0px", marginRight: "4px", fontWeight: "bold" }}>
            {cnname === "US/NY" && (
              <ReactCountryFlag
              countryCode="US"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="US"
                />
                )}
            {cnname === "UK/LON" && (
              <ReactCountryFlag
                countryCode="GB"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="UK"
                />
            )}
            {cnname === "JP/TYO" && (
              <ReactCountryFlag 
              countryCode="JP"
              svg
              cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
              cdnSuffix="svg"
              title="UK"
              />
              )}
          {cnname}{" "}
          </p>
          <Clock cn={cn} />
        </Button>
        <IconButton onClick={colorsMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;
