import { useNavigate } from "react-router-dom";
import { Card} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Item = ({ product }) => {
  const navigate = useNavigate();


  const handleNavigate = () => {
    navigate(`/item/${product.id}`);
  }
  

  return (

    <Container className="d-flex justify-content-center text-center p-2">

      <Row>

        <Col xs={6}></Col>

          <Card className='text-center p-1' style={{ width: '20rem' }}>
          <img src={product.img} alt="Product"  onClick={handleNavigate}/>
            <Card.Header>{product.title}</Card.Header>

            <Card.Body>

            <Card.Text>{product.description}</Card.Text>

            <hr className="mb-2" />

            <Card.Text><strong>${product.price} Hasta 12 cuotas de</strong>
                <strong>{`$ ${((product.price / 12)).toFixed(2)}`}</strong>
            </Card.Text>
            
            </Card.Body>
            <Card.Footer className="text-muted">In Stock: <strong>{product.stock}</strong></Card.Footer>
            
          </Card>

        {/* </Col> */}

      </Row>

    </Container>
  );
};

export default Item;



