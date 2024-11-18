import { useState } from "react";
import useTopRated from "../../../Hooks/useTopRated";
import Title from "../../../ReUsable/Title";
import MovieCard from "../../../ReUsable/MovieCard";


const PageTopRated = () => {
    const [page, setPage] = useState(1)
    const [topRated, loading, refetch] = useTopRated(page)
    return (
        <div>
            <Title title='Top Rated Movies'></Title>
            <div className="py-5 grid grid-cols-1 md:grid-cols-3 gap-10 px-[3%]">
                {topRated?.results.map(movie => <MovieCard key={movie.id} item={movie}></MovieCard>)}
            </div>
            
        </div>
    );
};

export default PageTopRated;