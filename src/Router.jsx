import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Products from "./pages/Products";
import Product from "./pages/Product";
import Purchases from "./pages/Purchases";

function Router()
{
    return (
        <BrowserRouter>
	    <Routes>
	        <Route
                    path="/"
	            element={<Products/>}
	        />
	        <Route
                    path="/product/:id"
	            element={<Product/>}
	        />
	        <Route
                    path="/purchases"
	            element={<Purchases/>}
	        />
	    </Routes>
	</BrowserRouter>
    );
}

export default Router;
