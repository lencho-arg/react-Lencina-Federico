import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';  

import ItemDetail from "./ItemDetail";
import { Loading } from './Loading';

import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';


const ItemDetailContainer = () => {

      const {category, id} = useParams();
      // const [products, setProducts] = useState([]);
        const [item, setItem] = useState(null);


    useEffect(() => {
  
      const db = getFirestore();
      const itemRef = [db, "items"];
      const ref = id ? doc(...itemRef, id) : collection(...itemRef);


      if (category) {
        const q = query(ref, where('category', '==', category));
        getDocs(q).then((result) => 
        setItem(result.docs.map((doc) => ({id: doc.id, ...doc.data() })))
        );

        return;
      }      

      //SI NECESITAMOS 1 ITEM

        if (id) {
          getDoc(ref)
            .then((item) => {
              console.log({ item });
              if (item.exists()) {
                setItem({ id: item.id, ...item.data() });
              }
            })
            .catch((err) => console.error({ err }));
          return;
        }
    
        //SI NECESITAMOS TODOS LOS ITEMS

        getDocs(ref).then((result) =>
        setItem(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        );

    
    }, []);



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




// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import ItemDetail from "./ItemDetail";
// import { Loading } from "./Loading";

// import  Productos  from '../mocks/items.mock'

// const ItemDetailContainer = () => {

//   const { id } = useParams();

//   const [item, setItem] = useState(null);

// useEffect(() => {
//   new Promise((resolve) =>
//     // Simulation of a call to an api
//     setTimeout(() => {
//       const itemFiltered = Productos.find((item) => item.id === id);
//       resolve(itemFiltered);
//     }, 1000)
//   ).then((data) => setItem(data));
// }, [id]);