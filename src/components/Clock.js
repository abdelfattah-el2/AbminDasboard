import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
function Clock({cn =""}) {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return <span style={{fontSize:"13px" , fontWeight:"600"}} > {date.toLocaleTimeString('en-US' , cn) }</span>;
}
export default Clock;
