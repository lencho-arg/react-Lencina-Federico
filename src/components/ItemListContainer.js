import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';  

import { ItemList } from './ItemList';
import { Loading } from './Loading';

// import { Productos } from '../mocks/items.mock';

import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

      const { category, id } = useParams();
      const [products, setProducts] = useState([]);

    useEffect(() => {
  
      const db = getFirestore();
      const itemRef = [db, "items"];
      const ref = id ? doc(...itemRef, id) : collection(...itemRef);


      if (category) {
        const q = query(ref, where('category', '==', category));
        getDocs(q).then((result) => 
        setProducts(result.docs.map((doc) => ({id: doc.id, ...doc.data() })))
        );

        return;
      }      

      //SI NECESITAMOS 1 ITEM

        if (id) {
          getDoc(ref)
            .then((item) => {
              console.log({ item });
              if (item.exists()) {
                setProducts({ id: item.id, ...item.data() });
              }
            })
            .catch((err) => console.error({ err }));
          return;
        }
    
        //SI NECESITAMOS TODOS LOS ITEMS

        getDocs(ref).then((result) =>
          setProducts(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    
    }, []);

    


    if (products.length === 0) {
        return <Loading />;
    }

    return (
        <div className="h-full">
            <ItemList products={products} />
        </div>
    );
}



export default ItemListContainer