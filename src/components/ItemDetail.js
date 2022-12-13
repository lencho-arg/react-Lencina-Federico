import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../context/cartContext";
import { ItemCount } from "./ItemCount";


const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else {
      setCurrentStock(currentStock - count);
      addItem(item, count);
    }
  }

  function handleCheckout() {
    navigate("/cart");
  }

  return (
    <Container className="d-flex justify-content-center text-center">
      <Card className='p-3' style={{ width: '24rem' }}>

      {/* Item image */}
        <img className="flex w-5/6 bg-white rounded" src={item.img} alt={item.name} />

      {/* Item title */}
        <Card.Header>{item.title}</Card.Header>

      {/* Item description */}
      <div className="flex flex-col justify-center pl-10">
        <p className="pt-2 text-sm">{item.description}</p>

        <hr className="mb-1 mt-1" />

        <span className="mt-4 text-xl">
          Price: <strong className="text-gray-800">${item.price}</strong>
        </span>

        {currentStock > 0 && (
          <p className="text-sm">En Stock: {currentStock}</p>
        )}

        <div className="flex flex-col flex-1 items-center">
          {/* Count */}

          {currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
          ) : (
            <span className="text-red-500 mt-10">Sin stock</span>
          )}
          <div className="w-full flex flex-col items-center">
            <button
              onClick={handleAdd}
              className="w-4/5 bg-gray-200 px-4 py-2 mt-2 rounded disabled:opacity-40"
              disabled={currentStock === 0}
            >
              Agregar al carrito
            </button>
            <button
              disabled={!isInCart(item.id)}
              onClick={handleCheckout}
              className="w-4/5 bg-gray-800 px-4 py-2 mt-2 rounded disabled:opacity-50"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </Card>
    </Container>
  );
};

export default ItemDetail;