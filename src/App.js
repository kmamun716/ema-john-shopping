import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound";
import Orders from "./Components/Orders/Orders";
import Register from "./Components/Register/Register";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Header from "./Components/Shared/Header";
import Shipment from "./Components/Shipment/Shipment";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/inventory" element={<RequireAuth><Inventory /></RequireAuth>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/shipment' element={<RequireAuth><Shipment /></RequireAuth>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
