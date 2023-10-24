import { useState } from "react";
import usePopular from "../../../Hooks/usePopular";
import Title from "../../../ReUsable/Title";
import { AiTwotoneHeart, AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import './Popular.css'


const PagePopular = () => {
    
   
    // const [page, setPage] = useState(1);
    const [popular, loading, refetch ] = usePopular(1);
    console.log(popular)
    // const nextPage = () =>{
    //     setPage(page+1);
    //      refetch();
    // }
    return (
        <div>
            <Title title='All Popular Movies'></Title>
            <div className="text-center">
            <div className="grid md:grid-cols-3 gap-8 px-2">
                    {
                        loading ? <span className="loading loading-bars w-full"></span> :
                        popular.results.map(item => <div key={item.id} className="card bg-black shadow-xl">
                        <figure><img className="h-[230px] rounded-md shadow-md shadow-purple-500" src={`https://image.tmdb.org/t/p/original${item.backdrop_path? item.backdrop_path : item.poster_path}`} alt="Shoes" /></figure>
                        <div className="px-5 py-6 text-center  text-black">
                            <h2 className="font-semibold movie-title text-yellow-500 text-2xl">{item.original_title}</h2>
                            <div className="flex justify-center items-center gap-4 my-4">
                                    <div className="bg-neutral px-3 py-2 rounded-lg flex justify-center items-center gap-1">
                                        <p className="text-info">Ratings: {item.vote_average}</p>
                                        <AiTwotoneStar className="text-accent"></AiTwotoneStar>
                                    </div>
                                    <div className="bg-neutral px-3 py-2 rounded-lg flex justify-center items-center gap-1">
                                        <p className="text-info">People Liked : {item.vote_count}</p>
                                        <AiTwotoneHeart className="text-red-700"></AiTwotoneHeart>
                                    </div>
                            </div>
                          <div className="card-actions justify-center">
                            <Link to={`/details/${item.id}`} className="btn btn-primary">Watch</Link>
                          </div>
                        </div>
                      </div>)
                    }
                </div>
                <div className="join mt-5 ">
                    <button className="join-item btn btn-active">1</button>
                    <button className="join-item btn ">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">4</button>
                </div>
            </div>
            
            
        </div>
    );
};

export default PagePopular;