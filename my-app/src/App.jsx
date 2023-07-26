import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import PaymentSuccess from "./PaymentSuccess";
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from "./HomePage";


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/pay" element={<Home />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;