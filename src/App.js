import { BrowserRouter,Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
function App() {
 
  return (
    <div>
      <BrowserRouter>
          <Routes>
               <Route path="/" element={<HomePage/>}/>
               <Route path="/about" element={<AboutPage/>} />
               <Route path="/productspage" element={<ProductsPage/>}/>
         </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
