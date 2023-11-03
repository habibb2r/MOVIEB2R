import { useDispatch, useSelector } from "react-redux";
import Title from "../../../ReUsable/Title";
import { Link } from "react-router-dom";
import {FaTrash} from 'react-icons/fa'
import { removeBookMarks } from "../../../Redux/slices/bookMarkSlice";
import useBookMarkList from "../../../Hooks/useBookMarkList";


const FavoriteList = () => {
    const dispatch = useDispatch();
    const [bookmarks, , refetch] = useBookMarkList();
    console.log(bookmarks)
    // const {bookMarks} = useSelector(state => state.bookMarkSlice)
    // console.log(bookMarks)

    const handleDeleteBookmark =(item)=>{
        dispatch(removeBookMarks(item, refetch))
        
    }
    return (
        <div>
            <Title title={'My FavoriteList'}></Title>
            <div className="mx-2">
                <h1 className="text-2xl px-10 py-5">Total : {bookmarks.length}</h1>
                <div className="flex flex-col gap-3">
                   {
                    bookmarks.map(item=> 
                        <div key={item._id} className="flex flex-col md:flex-row justify-between items-center px-10 py-4 bg-blue-900 rounded-xl gap-4">
                        <div className="flex gap-10">
                            <img className="h-[120px] md:h-[150px] rounded-lg" src={`https://image.tmdb.org/t/p/original${item.picture}`} alt="" />
                            <div className="flex flex-col gap-2 justify-between">
                                <h1 className="text-2xl md:text-3xl font-semibold text-green-200">{item.movie}</h1>
                                <div>
                                    <p>Release Date : {item.release}</p>
                                    <p>Voting Average : {item.rate}</p>
                                    <p>Liked : {item.total_vote}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex md:flex-col justify-center items-center gap-5">
                            <Link className="btn bg-green-500">Watch</Link>
                            <button onClick={()=> handleDeleteBookmark(item) } className="text-3xl text-red-300"><FaTrash/></button>
                        </div>
                    </div>
                    )
                   }
                </div>
            </div>
        </div>
    );
};

export default FavoriteList;