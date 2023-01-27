import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Products from "./pages/Products";

function Router()
{
    return (
        <BrowserRouter>
	    <Routes>
	        <Route
                    path="/"
	            element={<Products/>}
	        />
	    </Routes>
	</BrowserRouter>
    );
}

export default Router;
