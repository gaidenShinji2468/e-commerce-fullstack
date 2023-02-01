import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ModalPurchases from "../components/ModalPurchases";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";

const Purchases = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (info) => {
        setShow(true)
        setDataSelected(info)
    }
    const productsCart= useSelector(state => state.cartProducts)
    console.log(productsCart);
    const [dataSelected, setDataSelected] = useState({})
    return (
        <Container className="my-5">
        <div>
            <h2>My purchases</h2>
            <hr />
            {
                productsCart?.map(item =>(
                    <Card key={item.id} style={{margin:'1rem'}}>
                        <Card.Header>purchase</Card.Header>
                        <Card.Body
                            style={{ display: "flex", justifyContent: "space-around" }}
                        >
                            <Card.Text>{item.title}</Card.Text>
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
                            <Card.Text>{item.price}</Card.Text>
                            <Button variant="primary" onClick={() => handleShow(item)}>
                                see details
                            </Button>
                        </Card.Body>
                    </Card>
                ))
            }
            <ModalPurchases 
            show={show} 
            handleClose={handleClose} 
            data={dataSelected}
            />
        </div>
        </Container>
    );
};

export default Purchases;
