import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import FullLayout from "./dashbaord/layouts/FullLayout";
import Starter from "./dashbaord/views/Starter";
import Products from "./dashbaord/views/product/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>

        <Route path="/dashboard" element={<FullLayout />} >
        <Route index element={<Starter />} />
        <Route path="products" element={<Products />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
