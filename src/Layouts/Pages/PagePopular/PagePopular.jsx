import { useState } from "react";
import usePopular from "../../../Hooks/usePopular";
import Title from "../../../ReUsable/Title";
import { AiTwotoneHeart, AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import './Popular.css'
import MovieCard from "../../../ReUsable/MovieCard";


const PagePopular = () => {

    const [popular, loading, refetch ] = usePopular(1);
    console.log(popular)
   
    return (
        <div>
            <Title title='All Popular Movies'></Title>
            <div className="text-center">
            <div className="grid md:grid-cols-3 gap-8 px-2">
                    {
                        loading ? <span className="loading loading-bars w-full"></span> :
                        popular.results.map(item => <MovieCard key={item.id} item={item}></MovieCard>)
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