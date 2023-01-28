import { useSelector, useDispatch } from "react-redux"
 
import { getProductsThunk } from "../store/slices/getProducts.slice"
import { useEffect } from "react"
import { Row, Col, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const Products= () => {
  const dispatch = useDispatch()
  const product = useSelector( state => state.getProducts )

  useEffect(() => {
    dispatch( getProductsThunk() )
  }, [] )
  
  return (
    <div>
        <h1>Products</h1>
        <Row xs={1} md={2} xl={3}>
          {
            product?.map(producItem => (
          
          <Col key={producItem.id}>
            <Card>
              <Card.Img
              variant="top" 
              src={producItem.productImgs[0]}
              style={{height:200, objectFit:'cover'}}
               />
              <Card.Body>
                  <Card.Title>{producItem.title}</Card.Title>
                  <Card.Text>
                   <h3>price</h3> {producItem.price}
                  </Card.Text>
                  <Button variant="primary" as={ Link } to={`/product/:${producItem.id}`}>buy</Button>
                </Card.Body>
              </Card>
          </Col>
          ) ) }
        </Row>

    </div>
  )
}

export default Products