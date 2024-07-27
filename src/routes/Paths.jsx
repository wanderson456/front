import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import Layout from "../pages/Layout";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import ProductDetails from "../components/ProductDetails";
import { ProductProvider } from '../context/ProductContext';


const Paths = () => {
    return ( 
        <>
        <ProductProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/products/:id" element={<ProductDetails />} /> {/* Rota dinâmica */}
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      </ProductProvider>
        </>
     );
}
 
export default Paths;