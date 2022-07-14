import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from '../components/ItemList';
import { useState, useEffect } from 'react';
import Item from '../components/Item';

const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('productos.json')
            .then((res) => res.json())
            .then((json) => setProductos(json))
    }, []);

    return (
        <div className="itemCount">
            {props.saludo}

            <div className='d-flex flex-row flex-wrap'>
                {productos.map((catalogo) => (
                    <div key={catalogo.id}>
                        <Item data={catalogo}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ItemListContainer