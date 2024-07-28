import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { clearWords,addWords} from "../constant/cartSlice";

const Search = () => {

    const dispatch = useDispatch();

    const letters = useSelector( (word) => word.search.items);

    const handleClearWord = () => {
        dispatch(clearWords());
    }
    return (
        <>
        <h1>hello</h1>
        </>
    )
}

export default Search;