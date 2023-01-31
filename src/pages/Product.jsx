import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { removeProduct } from "../store/slices/cartProducts.slice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import isLoadingSlice, { setIsLoading } from "../store/slices/isLoading.slice";
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
                (resp) => {console.log(resp); setDetail(resp?.data?.data?.product)}
                // dispatch(
                //     filterCategoryThunk(resp?.data?.data?.product?.category)
                // )
            )
            .catch((error) => console.error(error))
            .finally(() => dispatch(setIsLoading( false ) ) );
    }, []);
    // console.log(detail);
    // console.log(data.data.product);
    return (
        <div>
            <h2>{detail.title}</h2>
            <p>{detail.category}</p>
            <p>{detail.price}</p>
            <Row>
                <Col lg={9}>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={detail?.productImgs?.[0]}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={detail?.productImgs?.[1]}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={detail?.productImgs?.[2]}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    {/* {detail?.productImgs?.map((img, index) => (
                        <img key={index} src={img} alt="" />
                    ))} */}
                    <p>{detail.description}</p>
                </Col>
                {/* <Col lg="3">
                    <h3>Related products</h3>
                    <ListGroup>
                        {productsRelated?.map((productItem) => (
                            <ListGroup.Item key={productItem.id}>
                                {productItem.headline}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col> */}
            </Row>
        </div>
    );
};
export default Product;