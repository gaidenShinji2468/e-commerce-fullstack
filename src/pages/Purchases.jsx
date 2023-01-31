import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ModalPurchases from "../components/ModalPurchases";
// import { useSelector } from "react-redux";

const Purchases = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const productsCart= useSelector(state => state.cartProducts)
    return (
        <div>
            <h2>My purchases</h2>
            <hr />

            <Card>
                <Card.Header>purchase</Card.Header>

                <Card.Body
                    style={{ display: "flex", justifyContent: "space-around" }}
                >
                    <Card.Text>Samsung Galaxy S22</Card.Text>
                    <Card.Text
                        style={{
                            width: "30px",
                            height: "30px",
                            border: "1px solid rgb(0, 0, 0)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        1
                    </Card.Text>
                    <Card.Text>1399.00</Card.Text>
                    <Button variant="primary" onClick={handleShow}>
                        see details
                    </Button>
                </Card.Body>
            </Card>
            <ModalPurchases show={show} handleClose={handleClose} />
        </div>
    );
};

export default Purchases;
