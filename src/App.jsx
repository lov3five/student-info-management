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
import AddStudent from "./components/AddStudent";


function App() {
  return (
    <Box overflow={"hidden"}>
      <Header />
      <Stack direction="row" justifyContent="space-between">
        <Sidebar />
        <Monitor />
      </Stack>
      <Footer sx={{ backgroundColor: "aqua" }} />
      hehe
      <AddStudent />
    </Box>


  )
}

export default App;
