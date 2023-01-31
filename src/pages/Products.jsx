import { useSelector, useDispatch } from "react-redux"
import Carousel from 'react-bootstrap/Carousel'
import { getProductsThunk } from "../store/slices/getProducts.slice"
import { useEffect, useState } from "react"
import { Row, Col, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import {Cart} from 'react-bootstrap-icons'
import {addProduct} from '/src/store/slices/cartProducts.slice'
import axios from "axios"
import '../assets/styles/Poducts.css'



const Products= () => {
  const dispatch = useDispatch()
  const product = useSelector( state => state.getProducts )
  const [categorie, setCategories] = useState([])
  // const [detail, setDetail] = useState({})
const [productsByCategory, setProductsByCategory] = useState ([]) 

  useEffect(() => {

    dispatch( getProductsThunk() )
    axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/products/categories`)
    .then( resp =>  setCategories(resp?.data?.data?.categories))
    .catch(error => console.error(error))
        
  }, [] )
useEffect( () => {
  setProductsByCategory(product)

},[product])

  const filterClas = (e) => {
   const name = e.target.name;
   const productsFiltered = product.filter( (p) => p.category.name == name);
   setProductsByCategory(productsFiltered)  

  }
  
  return (
    <div>
        <h1 className="titel">Products</h1>
       <div className="Botonera">{categorie.map((category) => (
        <Button 
          key={category.id}
          variant="primary"
          onClick={filterClas}
          name={category.name}
        >
          {category.name}
        </Button>
      ))}
      <Button variant="light" onClick={() => dispatch(getProductsThunk())}>
        Ver todos
      </Button></div> 
      
        <Row xs={1} md={2} xl={4}>
          {
           productsByCategory?.map(producItem => (
          
          <Col key={producItem.id}>
            <Card className="container__cards">
              {/* inicio de carousel */}
              {/* <p>{producItem.id}</p> */}
              <Carousel interval='15000'>
                  <Carousel.Item className="cards">
                    <img
                      className="d-block w-100"
                      src={producItem.productImgs[0]}
                      style={{height:200, width:200, objectFit:'cover'}}
                      alt="First slide"
                    />
                    
                  </Carousel.Item>
                  <Carousel.Item className="cards">
                    <img
                      className="d-block w-100"
                      src={producItem.productImgs[1]}
                      style={{height:200, objectFit:'cover'}}
                      alt="Second slide"
                    />

                    
                  </Carousel.Item>
                  <Carousel.Item className="cards w-100" >
                    <img
                      className="d-block w-100"
                      src={producItem.productImgs[2]}
                      style={{height:200, objectFit:'cover'}}
                      alt="Third slide"
                    />

                    
                  </Carousel.Item>
              </Carousel>
              
              <Card.Body className="card__body">
                  <Card.Title>{producItem.title}</Card.Title>
                  <Card.Text>
                   ${producItem.price}
                  </Card.Text>
                  <div className="bu">
                  <Button variant="light"  as={ Link } to={`/product/${producItem.id}`}>Details</Button>
                  <Button variant="primary"  onClick={() => dispatch(addProduct( producItem ) ) }><Cart/></Button> 
                  </div>
                                   
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