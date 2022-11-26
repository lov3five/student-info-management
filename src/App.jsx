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



function App() {
  return (
    <Box>
      <Header />
      <Stack direction="row" justifyContent="space-between">
        <Sidebar />
        <Monitor />
      </Stack>
      <Footer />
    </Box>
  )
}

export default App;
