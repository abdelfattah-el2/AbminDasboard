import Topbar from "./global/Topbar";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import Sidbar from "./global/Sidebar";
import Dashboard from "./pages/Dashboard-page";
import Team from "./pages/Team-page";
import ContactsInfo from "./pages/Contacts";
import Invoices from "./pages/Invoice";
import Forms from "./pages/Forms";
import Calenders from "./pages/Claender";
import Faq from "./pages/FAQ";
import Bars from "./pages/Bar";
import Pies from "./pages/Pie";
import LineCharts from "./pages/Line";
import Geographys from "./pages/Geography";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidbar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<ContactsInfo />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Forms />} />
              <Route path="/calender" element={<Calenders />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/bar" element={<Bars />} />
              <Route path="/pie" element={<Pies />} />
              <Route path="/line" element={<LineCharts />} />
              <Route path="/geography" element={<Geographys />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
