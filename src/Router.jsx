import {
    BrowserRouter,
    Routes,
    Route
    
} from "react-router-dom";

import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import BurguerButton from "./components/BurguerButton";
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
        <BurguerButton/>
        
        


    </div>

    );
}

export default Router;
