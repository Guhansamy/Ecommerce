import { useState } from "react"
import { Link } from "react-router-dom";
import Profile from "./Profile";
import { useCart } from "react-use-cart";

const Header = ( {onSearch}) => {

    // const handleRefresh = () => {
    //     window.location.reload()
    // }
    // the above code is to reload the whole page

    const [searchItem,setSearchItem] = useState("");

    const {items,
        totalItems,
        totalUniqueItems,
        isEmpty,
        cartTotal,
        removeItem
        } = useCart();


    function handleSearch() {
        onSearch(searchItem);
        console.log(searchItem);
    }

    return (
        <nav className="flex justify-between w-100% h-[80px] items-center bg-white mb-4">
            
                    <Link to= "/" >
                        <img className="w-[100px] h-[70px]  ml-[100px]"
                        src='https://img.freepik.com/free-vector/sales-promotion-concept-illustration_114360-17611.jpg?ga=GA1.1.864734012.1699701932&semt=ais'
                        alt="logo" />
                    </Link>
               
                <div className="flex border-2 border-solid border-black rounded-2xl bg-gray-100">

                    < input 
                    type="text" 
                    placeholder="Search for Products or Brands" 
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                    className="h-[50px]  w-[700px] rounded-2xl mr-2 pl-5"
                    />
                    
                    <button onClick={ () => {handleSearch();console.log("clicked")}}>
                    <img src="https://img.freepik.com/premium-vector/search-sign-magnifying-glass-symbol_532867-357.jpg?w=740"
                        className="h-[50px] w-12 rounded-2xl" 
                        
                        />
                    </button>
                </div>
                <ul>
                    <li> <Link to= "/Profile-page/"> Profile </Link> </li>
                    <li> <Link to= "/cart/">  Cart ({totalUniqueItems}) </Link></li>
                    <li>Become a seller</li>
                </ul>
            {/* </nav> */}
        </nav>
    )
}

export default Header;