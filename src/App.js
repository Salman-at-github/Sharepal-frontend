import Navbar from "./components/layout/Navbar";
import OrdersComponent from "./components/pages/Orders";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <OrdersComponent/>
    </div>
  );
}

export default App;
