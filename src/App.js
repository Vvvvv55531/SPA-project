import Home from "./pages/Home"
import Menu from "./pages/Menu";
import Staff from "./pages/Staff";
import Contacts from "./pages/Contacts";
import Order from "./pages/Order";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
