import { useState } from "react";
import usePopular from "../../../Hooks/usePopular";
import Title from "../../../ReUsable/Title";
import { AiTwotoneHeart, AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Popular.css";
import MovieCard from "../../../ReUsable/MovieCard";

const PagePopular = () => {
    const [page, setPage] = useState(1)
  const [popular, loading, refetch] = usePopular(page);
  console.log(popular);

  return (
    <div>
      <Title title="All Popular Movies"></Title>
      <div className="text-center">
        <div className="grid md:grid-cols-3 gap-8 px-2">
          {loading ? (
            <span className="loading loading-bars w-full"></span>
          ) : (
            popular.results.map((item) => (
              <MovieCard key={item.id} item={item}></MovieCard>
            ))
          )}
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="join">
            <button
              onClick={() => {
                setPage(page - 1), refetch();
              }}
              className="join-item btn"
            >
              «
            </button>
            <button className="join-item btn">Page {page}</button>
            <button
              onClick={() => {
                setPage(page + 1), refetch();
              }}
              className="join-item btn"
            >
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagePopular;
