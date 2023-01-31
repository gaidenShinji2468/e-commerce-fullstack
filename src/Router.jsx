import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {useSelector} from "react-redux";
import Loader from "./components/Loader";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Purchases from "./pages/Purchases";
import Navbar from "./components/Navbar";
import Footer from "./components/footer"

function Router()
{
    const isLoading = useSelector(state => state.isLoading);   
 
    return (
        
     
        <BrowserRouter>
	    <Navbar/>
	    {isLoading && <Loader/>}
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
		<Footer/>
	</BrowserRouter>
    );
}

export default Router;
