import { useSelector, useDispatch } from "react-redux"
// import { getNewsThunk } from "../store/slices/news.slice"  
import { useEffect } from "react"
import { Row, Col, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

function Products() {
  const dispatch = useDispatch()
  const product = useSelector( state => state.product )

  useEffect(() => {
    dispatch( getNewsThunk() )
  }, [] )
  
  return (
    <div>
        <h1>Products</h1>
        <Row xs={1} md={2} xl={3}>
          {
            news?.map(newsItem => (
          
          <Col key={newsItem.id}>
            <Card>
              <Card.Img
              variant="top" 
              src={newsItem.image}
              style={{height:200, objectFit:'cover'}}
               />
              <Card.Body>
                  <Card.Title>{newsItem.headLine}</Card.Title>
                  <Card.Text>
                    {newsItem.lead}
                  </Card.Text>
                  <Button variant="primary" as={ Link } to={`/news/${newsItem.id}`}>see</Button>
                </Card.Body>
              </Card>
          </Col>
          ) ) }
        </Row>

    </div>
  )
}

export default Products