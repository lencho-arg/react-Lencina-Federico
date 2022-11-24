import { useNavigate } from "react-router-dom";
import { Card} from "react-bootstrap";

const Item = ({ product }) => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/item/${product.id}`);
  }

  return (

    <Card className= 'text-center' style={{ width: '18rem' }} onClick={handleNavigate}>
      
      <Card.Body>

      <Card.Img variant="top" src={product.img} alt="Product" />
          
        <span>
          {product.title}
        </span>

        <hr className="mb-2" />
        <p className="mb-2">{product.description}</p>
      
      
        <hr className="mb-2" />
        <span className="font-bold">${product.price}</span>
        
        </Card.Body>
      <Card.Footer className="text-muted">In Stock: {product.stock}</Card.Footer>
      
    </Card>
  );
};

export default Item;