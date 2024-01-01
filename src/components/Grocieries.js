import { useEffect, useState } from "react";
import '../index.css';
import Item from "./Item";
import { Link,} from "react-router-dom";

const Groceries = () => {
    const [product , setProduct] = useState([]);

    useEffect( () => {
        fetchdata()
    } , []);

    const fetchdata = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');

            const json = await response.json();
            console.log(json?.products);

            const sp = json?.products.filter(product => product.category.toLowerCase() === 'groceries');

            setProduct(sp);
        } 
        catch (error) { 
            console.error('Error:', error);
        }
    }
    return (

        <div className="flex flex-col justify-center items-center">
            


            <div className="flex flex-row flex-wrap bg-slate-50 justify-center pt-10">
                {
                    product.map((item) => {
                        return (
                            <Link to={`/item/${item.id}`} state={{ data: item }}>

                                <Item key = {item.id}
                                item_data = {item} className = "m-10"/>
                             </Link>
                        )
                        }
                    )
                }
            </div>

        </div>

    );
}

export default Groceries;
