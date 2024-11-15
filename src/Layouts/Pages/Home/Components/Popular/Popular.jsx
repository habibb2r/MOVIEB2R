import { useState } from "react";
import usePopular from "../../../../../Hooks/usePopular";
import Title from "../../../../../ReUsable/Title";
import { Link } from "react-router-dom";
import MovieCard from "../../../../../ReUsable/MovieCard";
import useWatchMovie from "../../../../../Hooks/useWatchMovie";

const Popular = () => {
    const [popular, loading, ] = usePopular(1);
    const [watchMovie] = useWatchMovie()
    console.log(watchMovie)
    return (
        <div className="">
            <Title title="Popular Now"></Title>
            <div className="text-center">
                <div className="grid md:grid-cols-3  gap-6 lg:gap-10 px-[2%]">
                    {
                        loading ? <span className="loading loading-bars w-full"></span> :
                        popular.results.slice(0,6).map(item => <MovieCard key={item.id} item={item}></MovieCard>)
                    }
                </div>
                <Link to='/popular'  className="btn btn-accent my-5">See All</Link>
            </div>
        </div>
    );
};

export default Popular;