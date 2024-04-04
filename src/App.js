import Navbar from "./components/layout/Navbar";
import Order from "./components/pages/Order";
import OrdersComponent from "./components/pages/Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="min-h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<OrdersComponent/>}/>
        <Route path="/order/:orderId" element={<Order/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App;
