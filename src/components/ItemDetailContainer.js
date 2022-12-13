import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import { Loading } from "./Loading";

import  Productos  from '../mocks/items.mock'

const ItemDetailContainer = () => {

  const { id } = useParams();

  const [item, setItem] = useState(null);

useEffect(() => {
  new Promise((resolve) =>
    // Simulation of a call to an api
    setTimeout(() => {
      const itemFiltered = Productos.find((item) => item.id === id);
      resolve(itemFiltered);
    }, 1000)
  ).then((data) => setItem(data));
}, [id]);

  if (!item) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center ">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;




