import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../store/slices/isLoading.slice";
import { Button, Col, Row } from "react-bootstrap";
// import { filterCategoryThunk } from "../store/slices/products.slice";
import Carousel from "react-bootstrap/Carousel";
const Product = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const dispatch = useDispatch();
    // const producDetail = useSelector((state) => state.cartProducts);
    useEffect(() => {
        dispatch(setIsLoading(true));

        axios
            .get(`https://e-commerce-api.academlo.tech/api/v1/products/${id}/`)
            .then(
                (resp) => {
                    console.log(resp);
                    setDetail(resp?.data?.data?.product);
                }
                // dispatch(
                //     filterCategoryThunk(resp?.data?.data?.product?.category)
                // )
            )
            .catch((error) => console.error(error))
            .finally(() => dispatch(setIsLoading(false)));
    }, []);
    // console.log(detail);
    // console.log(data.data.product);
    return (
        <div>
            <Row xs={1} md={2} lg={2}>
                <Col lg={6}>
                    <div className="carousel">
                        <Carousel fade variant="dark">
                            <Carousel.Item style={{ padding: "4rem" }}>
                                <img
                                    className="d-block w-100 "
                                    src={detail?.productImgs?.[0]}
                                    alt="First slide"
                                />
                                {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                            </Carousel.Caption> */}
                            </Carousel.Item>

                            <Carousel.Item style={{ padding: "4rem" }}>
                                <img
                                    className="d-block w-100"
                                    src={detail?.productImgs?.[1]}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item style={{ padding: "4rem" }}>
                                <img
                                    className="d-block w-100"
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
                                <Button variant="secondary">-</Button>
                                <div
                                    style={{
                                        width: "30px",
                                        height: "30px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    3
                                </div>
                                <Button variant="secondary">+</Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button>add to cart</Button>
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
