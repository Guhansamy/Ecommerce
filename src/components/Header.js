import { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import { useCart } from "react-use-cart";
// import { useDispatch } from "react-redux";
// import { addWords } from "../constant/searchSlice";

const Header = ({ onSearch }) => {
    // const handleRefresh = () => {
    //     window.location.reload()
    // }
    // the above code is to reload the whole page

    const {
        items,
        totalItems,
        totalUniqueItems,
        isEmpty,
        cartTotal,
        removeItem,
    } = useCart();

    const [searchItem, setSearchItem] = useState("");

    function handleSearch() {
        console.log("hello");
    }
    // const dispatch = useDispatch();

    // function handleSearch() {
    //     dispatch(addWords(searchItem));
    //     onSearch(searchItem);
    //     console.log(searchItem);
    // }

    return (
        <nav className="flex justify-between w-100% h-[80px] items-center bg-white mb-4">
            <Link to="/">
                <img
                    className="lg:w-[100px] w-[50px] lg:h-[70px] h-[35px]  lg:ml-[100px] sm:ml-[10px]"
                    src="https://img.freepik.com/free-vector/sales-promotion-concept-illustration_114360-17611.jpg?ga=GA1.1.864734012.1699701932&semt=ais"
                    alt="logo"
                />
            </Link>

            <div className="flex border-2 border-solid border-black rounded-2xl bg-gray-100">
                <input
                    type="text"
                    placeholder="Search for Products"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                    className="lg:h-[50px] h-[30px] lg:w-[700px] w-[100px] rounded-2xl mr-2 pl-5"
                />

                <button
                    onClick={() => {
                        handleSearch();
                        console.log("clicked");
                    }}
                >
                    <img
                        src="https://img.freepik.com/premium-vector/search-sign-magnifying-glass-symbol_532867-357.jpg?w=740"
                        className="lg:h-[50px] h-[30px] w-12 rounded-2xl"
                    />
                </button>
            </div>
            <ul>
                <li className="lg:text-[17px] text-[12px]">
                    {" "}
                    <Link to="/Profile-page/"> Profile </Link>{" "}
                </li>
                <li className="lg:text-[17px] text-[12px]">
                    {" "}
                    <Link to="/cart/"> Cart ({totalUniqueItems}) </Link>
                </li>
                <li className="lg:text-[17px] text-[12px]">Become a seller</li>
            </ul>
            {/* </nav> */}
        </nav>
    );
};

export default Header;
