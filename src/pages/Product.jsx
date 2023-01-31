import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../store/slices/isLoading.slice";
import { Button, Col, Row } from "react-bootstrap";
// import { cartThunk } from "../store/slices/cart.slice";
import Carousel from "react-bootstrap/Carousel";
import { addProduct } from "../store/slices/cartProducts.slice";

const Product = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const navigate = useNavigate();
    const products= useSelector(state=> state.getProducts)
    const [productsByCategory, setProductsByCategory] = useState ([])

    useEffect(() => {
        dispatch(setIsLoading(true));
        axios
            .get(`https://e-commerce-api.academlo.tech/api/v1/products/${id}/`)
            .then((resp) => {
                setDetail(resp?.data?.data?.product);
                filterClass(resp?.data?.data?.product.category)
            })
            .catch((error) => console.error(error))
            .finally(() => dispatch(setIsLoading(false)));
    }, []);

    const filterClass = (category) => {
        const productsFiltered = products.filter( (p) => p.category.name == category);
        setProductsByCategory(productsFiltered)  
    }
    console.log(productsByCategory);
    // useEffect(()=> console.log(productsByCategory),[productsByCategory])
    return (
        <div>
            <Row xs={1} md={2} lg={2}>
                <Col lg={6}>
                    <div className="carousel">
                        <Carousel fade variant="dark" interval='15000'>
                            <Carousel.Item
                                style={{
                                    padding: "3rem 4rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100% ",
                                }}
                            >
                                <img
                                    style={{
                                        height: "400px",
                                        objectFit: "contain",
                                    }}
                                    // className="carousel_img"
                                    src={detail?.productImgs?.[0]}
                                    alt="First slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item
                                style={{
                                    padding: "3rem 4rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100% ",
                                }}
                            >
                                <img
                                    style={{
                                        height: "400px",
                                        objectFit: "contain",
                                    }}
                                    // className="carousel_img"
                                    src={detail?.productImgs?.[1]}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item
                                style={{
                                    padding: "3rem 4rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100% ",
                                }}
                            >
                                <img
                                    style={{
                                        height: "400px",
                                        objectFit: "contain",
                                    }}
                                    // className="carousel_img"
                                    src={detail?.productImgs?.[2]}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>
                <Col
                    lg={6}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <h2>{detail.title}</h2>
                    <p>{detail.category}</p>

                    <p>{detail.description}</p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div>
                            <h5>Price</h5>
                            <p>
                                <strong>{detail.price}</strong>
                            </p>
                        </div>
                        <div>
                            <h5>Quantity</h5>
                            <div style={{ display: "flex" }}>
                                <Button
                                    onClick={() =>
                                        count === 1
                                            ? setCount(count)
                                            : setCount(count - 1)
                                    }
                                    variant="secondary"
                                >
                                    -
                                </Button>
                                <div
                                    style={{
                                        width: "30px",
                                        height: "30px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    {count}
                                </div>
                                <Button
                                    onClick={() => setCount(count + 1)}
                                    variant="secondary"
                                >
                                    +
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button onClick={() =>{console.log(detail); dispatch(addProduct( detail ) )}}>
                            add to cart
                        </Button>
                    </div>
                </Col>

                <Col lg="12">
                    <hr />
                    <br />
                    <h3>Related products</h3>
                </Col>
            </Row>
        </div>
    );
};
export default Product;
