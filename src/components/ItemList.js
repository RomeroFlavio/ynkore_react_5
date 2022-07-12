import Item from './Item.js';
import { useState, useEffect } from 'react';
import productos from './productos.json'

const ItemList = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("./productos.json")
            .then((res) => res.json())
            .then((json) => console.log(json))
    }, []);

    return <>
        <div className="container-fluid">
            {productos.map((catalogo) => (
                <div key={catalogo.ide}>
                    <Item data={catalogo}/>
                </div>
            ))}
        </div>
    </>;
};

export default ItemList;