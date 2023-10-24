import { useState } from "react";
import usePopular from "../../../../../Hooks/usePopular";
import Title from "../../../../../ReUsable/Title";
import {AiTwotoneStar, AiTwotoneHeart} from 'react-icons/ai'
import { Link } from "react-router-dom";

const Popular = () => {
    const [popular, loading, ] = usePopular(1);

   
    return (
        <div className="">
            <Title title="Popular Now"></Title>
            <div className="text-center">
                <div className="grid md:grid-cols-3 gap-6 md:gap-5 px-2">
                    {
                        loading ? <span className="loading loading-bars w-full"></span> :
                        popular.results.slice(0,6).map(item => <div key={item.id} className="card bg-black shadow-xl">
                        <figure><img className="h-[230px] rounded-md shadow-lg shadow-purple-500" src={`https://image.tmdb.org/t/p/original${item.backdrop_path? item.backdrop_path : item.poster_path}`} alt="Shoes" /></figure>
                        <div className="px-5 py-6 text-center  text-red-500">
                            <h2 className="font-semibold text-2xl">{item.original_title}</h2>
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
                            <Link to={`/details/${item.id}`} className="btn btn-primary">Watch info</Link>
                          </div>
                        </div>
                      </div>)
                    }
                </div>
                <Link to='/popular'  className="btn btn-accent my-5">See All</Link>
            </div>
        </div>
    );
};

export default Popular;