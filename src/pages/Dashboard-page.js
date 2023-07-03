import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import Headers from "../components/Header";
import { tokens } from "../theme";
import { mockTransactions } from "../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineCharts from "../components/LineChart";
import Bar from "../components/BarChart";
import Geography from "../components/GeographyChart";
import StatBoxs from "../components/StatBox";
import ProgressCircles from "../components/ProgressCircle";
import "../modelcss/Dashboard.css"

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="15px" mb={"50px"} >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Headers title="DASHBOARd" subtitle="  Welcom to your  dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon
              sx={{
                mr: "10px",
              }}
            />
            Download Reports
          </Button>
        </Box>
      </Box>
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(auto-fill , minmax(350px , 1fr))"}
        gridAutoRows={"140px"}
        gap={"15px"}
      >
        {/* Row 1 */}
        <Box
          // gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBoxs
            title={"12,361"}
            subtitle={"Email sent"}
            progres={"0.75"}
            increase={"+14%"}
            icon={
              <EmailIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
        
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBoxs
            title={"431,225"}
            subtitle={"sales Obtained"}
            progres={"0.5"}
            increase={"+21%"}
            icon={
              <PointOfSaleIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBoxs
            title={"32,441"}
            subtitle={"New Clients"}
            progres={"0.30"}
            increase={"+5%"}
            icon={
              <PersonAddIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
     
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBoxs
            title={"1,325,134"}
            subtitle={"Traffic nbound"}
            progres={"0.80"}
            increase={"+43%"}
            icon={
              <TrafficIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        {/* Row 2 */}
        <Grid
          sx={{
            gridColumn: "span 2",
          }}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          className="revenune-span"
        >
          <Box
            mt={"25px"}
            p={"0px 30px "}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight={"600"}
                color={colors.grey[100]}
              >
                Revenue Generated{" "}
              </Typography>
              <Typography
                variant="h3"
                fontWeight={"bold"}
                color={colors.greenAccent[500]}
              >
                $59,342,32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height={"250px"} mt={"-20px"}>
            <LineCharts isDashboard={true} />
          </Box>
        </Grid>
        {/* Transactions */}
        <Box
        
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          overflow={"auto"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p={"15px"}
          >
            <Typography
              color={colors.grey[100]}
              variant="h5"
              fontWeight={"600"}
            >
              Recent Transactions{" "}
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => {
            return (
              <Box
                key={transaction.txId + "-" + i}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                borderBottom={`4px solid ${colors.primary[500]}`}
                p={"15px"}
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight={"600"}
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                  borderColor={colors.greenAccent[500]}
                  color={colors.grey[100]}
                  p={"5px 10px"}
                  borderRadius={"4px"}
                >
                  ${transaction.cost}
                </Box>
              </Box>
            );
          })}
        </Box>
        {/* Row 3 */}
        <Box
        
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          p={"30px"}
        >
          {" "}
          <Typography variant="h5" fontWeight={"600"}>
            Campaign
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            mt={"25px"}
          >
            <ProgressCircles size="125" />
            <Typography
              variant="h5"
              color={colors.primary[500]}
              sx={{
                mt: "15px",
              }}
            >
              {" "}
              $48,352 Revenue Generated{" "}
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>

        <Box
         mb={"12px"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
        >
          {" "}
          <Typography
            variant="h5"
            
            fontWeight={"600"}
            sx={{
              p: "30px 30px 0 30px",
            }}
          >
            Sales Quantity
          </Typography>
          <Box height={"250px"} mt={"-20px"}>
            <Bar isDashboard={true} />
          </Box>
        </Box>

        <Box
         mb={"12px"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          p={"30px"}
          
        >
          {" "}
          <Typography
            variant="h5"
            fontWeight={"600"}
            sx={{
              mb: "15px",
            }}
          >
            Geography Based Traffic
          </Typography>
          <Box height={"200px"}>
            <Geography isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
