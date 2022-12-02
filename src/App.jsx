//CSS
import "./index.css"

//MUI
import { Stack, Box } from "@mui/material";

//MUI-Icon

//Component
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Monitor from "./components/Monitor";
import Footer from "./components/Footer";

// API
import axios from "axios";

const apiUser = axios.create({
  baseURL: "https://student-info-management-git-back-end-lov3five.vercel.app/api/users"
})

function App() {
  apiUser.get("/test").then(res => {
    console.log(res.data);
  })

  return (
    <Box overflow={"hidden"}>
      <Header />
      <Stack direction="row" justifyContent="space-between">
        <Sidebar />
        <Monitor />
      </Stack>
      <Footer sx={{ backgroundColor: "aqua" }} />
    </Box>


  )
}

export default App;
