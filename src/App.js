import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import DataDashboard from "./screens/DataDashboard";
import { classes } from "./styles/styles";


function App() {
  return (
    <div style={classes.appContainer}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/data" element={<DataDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
