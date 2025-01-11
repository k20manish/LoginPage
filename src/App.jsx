import { BrowserRouter,Route,Routes } from "react-router-dom";
import LoginPage from "./component/LoginPage";
import Dashboard from "./component/Dashboard";
function App() {

  return (
     <div>
          <BrowserRouter>
             <Routes>
                 <Route path="/" element={<LoginPage/>}></Route>
                 <Route path="/Dashboard" element={<Dashboard/>}></Route>
             </Routes>
          </BrowserRouter>
     </div>
  )
}

export default App
