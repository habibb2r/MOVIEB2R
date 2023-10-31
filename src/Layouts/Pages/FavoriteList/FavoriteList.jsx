import { useSelector } from "react-redux";
import Title from "../../../ReUsable/Title";
import { Link } from "react-router-dom";
import {FaTrash} from 'react-icons/fa'


const FavoriteList = () => {
    const {bookMarks} = useSelector(state => state.bookMarkSlice)
    console.log(bookMarks)
    return (
        <div>
            <Title title={'My FavoriteList'}></Title>
            <div>
                <h1 className="text-2xl px-10 py-5">Total : {bookMarks.length}</h1>
                <div className="flex flex-col gap-3">
                   {
                    bookMarks.map(item=> 
                        <div key={item.id} className="flex justify-between items-center px-10 py-4 bg-blue-900 rounded-xl">
                        <div className="flex gap-10">
                            <img className="h-[150px] rounded-lg" src={`https://image.tmdb.org/t/p/original${item.poster_path? item.poster_path : item.backdrop_path}`} alt="" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-3xl font-semibold text-green-200">{item.title}</h1>
                                <p>Voting Average : {item.vote_average}</p>
                                <p>Popularity : {item.popularity}</p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-5">
                            <Link className="btn bg-green-500">Watch</Link>
                            <button className="text-3xl text-red-300"><FaTrash/></button>
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