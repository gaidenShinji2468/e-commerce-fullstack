import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "/src/assets/styles/ModalPurchases.css";

const ModalPurchases = ({ show, handleClose, data }) => {
    return (
        <div>
            <Modal id="modal-purchase" show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Electronic bill</Modal.Title>
                    <Modal.Body>
                        <p>{`friend shop c.a J‑29989842‑2 ${data.productsInCart?.createdAt.slice(0,10)}`}</p> 
                    </Modal.Body>
                </Modal.Header>
                <Modal.Body> 
	            <div>
	              <h5>Product</h5>
	              <p>{data.title}</p>
	            </div>
	            <div>
	              <h5>Price</h5>
	              <p>{data.price}</p>
	            </div>
	            <div>
	              <h5>Amount</h5>
	              <p>{data.productsInCart?.quantity}</p>
	            </div>
	            <div>
	              <h5>Total to pay</h5>
	              <p>{data.price*data.productsInCart?.quantity}</p>
	            </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ModalPurchases;
