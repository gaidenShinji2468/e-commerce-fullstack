import {
    useState,
    useEffect
} from 'react';
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import "/src/assets/styles/Cart.css";
import {Trash} from "react-bootstrap-icons";
import {
    useSelector,
    useDispatch
} from "react-redux";
import {removeProduct} from "/src/store/slices/cartProducts.slice";

function Cart({
    sendLaunch,
    launch
})
{
    const cartProducts = useSelector(state => state.cartProducts);
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setTotal(cartProducts.reduce((accum, currentValue) => accum + Number(currentValue.price), 0));
    }, [cartProducts]);

    const handleClose = () => sendLaunch(false);

    const handleNavigate = url => {
        navigate(url);
	handleClose();
    }
    
    return (
        <Offcanvas show={launch} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
	        <ListGroup variant="flush">
	            {
                        cartProducts?.map((product, index) => {
                            return (
				<ListGroup.Item 
				    id="card-item"
				    key={index}
				>
				    <figure
				        id="card-img"
				        onClick={() => handleNavigate(`/product/${product.id}`)}
				    >
					<img src={product.productImgs[0]} alt={`This is a ${product.title} image`}/>   
					<figcaption>{product.title}</figcaption>
				        <span>Price</span><span>{`$${product.price}`}</span>
				    </figure>
				    <span
				        id="card-trash"
                                        onClick={() => dispatch(removeProduct(product.id))}
				    >
				        <Trash id="trash"/>
				    </span>
				</ListGroup.Item>
			    );
			})
		    }
                </ListGroup>
		<div id="cart-total">
	            <span>Total</span><span>{`$${total}`}</span>
		</div>
	        <Button
	            id="cart-checkout"
	            variant="primary"
	            onClick={() => handleNavigate("/purchases")}
	        >Checkout</Button>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Cart;
