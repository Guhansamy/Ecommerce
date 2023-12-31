import { useEffect, useState} from "react";
import '../index.css';
import Subheader from "./Subheader";
import Scrollableimg from "./Scrollableimg";
import Item from "./Item";
import { Link,useLocation } from "react-router-dom";

const Body = () => {
    const [product , setProduct] = useState([]);
    const location = useLocation();
    const[test,setTest] = useState([]);

    useEffect( () => {
        fetchdata()
    } , [location.pathname]);

    const fetchdata = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');

            const json = await response.json();
            console.log(json?.products);

            setProduct(json?.products);

            console.log(json?.products.rating)
        } 
        catch (error) { 
            console.error('Error:', error);
        }
    }


    return (
        <div className="flex flex-col justify-center items-center">
            
            <Subheader /> 
            {/* <Scrollableimg /> */}


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

    )
}

export default Body;
