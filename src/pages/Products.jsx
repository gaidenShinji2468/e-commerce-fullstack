import { useSelector, useDispatch } from "react-redux"
import Carousel from 'react-bootstrap/Carousel'
import { getProductsThunk } from "../store/slices/getProducts.slice"
import { useEffect, useState } from "react"
import { Row, Col, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import {Cart} from 'react-bootstrap-icons'
import {addProduct} from '/src/store/slices/cartProducts.slice'
import axios from "axios"


const Products= () => {
  const dispatch = useDispatch()
  const product = useSelector( state => state.getProducts )
  const [categorie, setCategories] = useState([])
  const [detail, setDetail] = useState({});

  useEffect(() => {
    dispatch( getProductsThunk() )
    

    axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/products/categories`)
    .then( resp =>  setCategories(resp?.data?.data?.categories))
    .catch(error => console.error(error))
    // .get(`https://e-commerce-api.academlo.tech/api/v1/products/${id}/`)
    // .then(
    //     (resp) => {console.log(resp); setDetail(resp?.data?.data?.product)}
        
    // )
  }, [] )
 
  return (
    <div>
        <h1>Products</h1>
        {categorie.map((category) => (
        <Button
          key={category.id}
          variant="primary"
          // onClick={}
        >
          {category.name}
        </Button>
      ))}
      <Button variant="dark" onClick={() => dispatch(getProductsThunk())}>
        Ver todos
      </Button>
      
        <Row xs={1} md={2} xl={3}>
          {
            product?.map(producItem => (
          
          <Col key={producItem.id}>
            <Card>
              {/* inicio de carousel */}
              {/* <p>{producItem.id}</p> */}
              <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={producItem.productImgs[0]}
                      style={{height:200, objectFit:'cover'}}
                      alt="First slide"
                    />
                    {/* <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={producItem.productImgs[1]}
                      style={{height:200, objectFit:'cover'}}
                      alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={producItem.productImgs[2]}
                      style={{height:200, objectFit:'cover'}}
                      alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                      </p>
                    </Carousel.Caption> */}
                  </Carousel.Item>
    </Carousel>
              {/* fin carousel */}
              {/* <Card.Img
              variant="top" 
              src={producItem.productImgs[0]}
              style={{height:200, objectFit:'cover'}}
               /> */}
              <Card.Body>
                  <Card.Title>{producItem.title}</Card.Title>
                  <Card.Text>
                   price {producItem.price}
                  </Card.Text>
                  <Button variant="primary" style={{marginLeft:50}} onClick={() => dispatch(addProduct( producItem ) ) }><Cart/></Button>
                  <Button variant="primary" style={{marginLeft:200}} as={ Link } to={`/product/${producItem.id}`}>Details</Button>
                  {/* crear condiconal para entrar al carrito */}
                </Card.Body>
              </Card>
          </Col>
          ) ) }
        </Row>

    </div>
  )
}

export default Products