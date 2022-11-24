import {useState} from 'react';
import { ItemList } from './ItemList';
import { Loading } from './Loading';

import Productos from './products'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [hayProduct, setHayProduct] = useState(false)

    const listProduct = new Promise((resolve) =>
        setTimeout(() =>{
            resolve(Productos);
        }, 2000)
    );

    listProduct
    .then((data) => setProducts(data))
    .then((data) => setHayProduct(!data));

    console.log(products);

    return (
        <div className='itemListContainer'>

            
            {!hayProduct ? (
                <Loading />
            ) : (
                <ItemList products={products}/>
            )}

        </div>
    );
};

export default ItemListContainer