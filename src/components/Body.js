import { useEffect, useState } from "react";
import "../index.css";
import Subheader from "./Subheader";
import Scrollableimg from "./Scrollableimg";
import Item from "./Item";
import { Link, useLocation } from "react-router-dom";

const Body = ({ searchThing }) => {
    const [product, setProduct] = useState([]);
    const [searchPro, setSearchPro] = useState([]);
    const location = useLocation();
    useEffect(() => {
        fetchdata();
    }, []);

    useEffect(() => {
        // Call filteredProducts when searchThing changes
        filteredProducts();
    }, [searchThing]);

    console.log("let check for body :" + searchThing);

    const fetchdata = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products");

            const json = await response.json();
            console.log(json?.products);

            setProduct(json?.products);
            setSearchPro(json?.products);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    function filteredProducts() {
        const filterData = product.filter((item) => {
            return item.title.toLowerCase().includes(searchThing.toLowerCase());
        });
        setSearchPro(filterData);
        console.log(searchPro + " : value of Search da");
    }

    // function filteredProducts() {
    //     if (searchThing && typeof searchThing === "string" && searchThing.trim() !== "") {
    //         const filterData = product.filter(item => {
    //             return (
    //                 item.title.toLowerCase().includes(searchThing.toLowerCase())
    //             )
    //         });
    //         setSearchPro(filterData);
    //     } else {
    //         setSearchPro(product);
    //     }
    // }

    return (
        <div className="flex flex-col justify-center items-center">
            <Subheader />
            {/* <Scrollableimg /> */}

            <div className="flex flex-row flex-wrap bg-slate-50 justify-center pt-10">
                {product.map((item) => {
                    return (
                        <Link to={`/item/${item.id}`} state={{ data: item }}>
                            <Item
                                key={item.id}
                                item_data={item}
                                className="m-10"
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
