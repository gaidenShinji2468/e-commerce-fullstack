import {BrowserRouter,Routes,Route} from "react-router-dom";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import "./App.css";


function Router()
{
    return (
        
    <div>  
        <BrowserRouter>
	        <Routes>
	         <Route
                      path="/"
	                element={<Products/>}
	         />
	        </Routes>
	    </BrowserRouter>
        <Navbar/>


           
         {/*  <Footer/> */}
    </div>

    );
}

export default Router;
