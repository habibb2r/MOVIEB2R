import { useState } from "react";
import useTopRated from "../../../Hooks/useTopRated";
import Title from "../../../ReUsable/Title";
import MovieCard from "../../../ReUsable/MovieCard";
import { motion } from "framer-motion"


const PageTopRated = () => {
  const [page, setPage] = useState(1);
  const [topRated, loading, refetch] = useTopRated(page);
  if(loading){
    return <p>Loading...</p>
  }
  return (
    <div>
      <Title title="Top Rated Movies"></Title>
      <div className="py-5 grid grid-cols-1 md:grid-cols-3 gap-10 px-[3%]">
        {topRated?.results.map((movie) => (
          <MovieCard key={movie.id} item={movie}></MovieCard>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 py-[2%]">
      <div className="join">
        <motion.button initial={{borderColor: '#ff6b6b'}} animate={{borderColor: '#ff0597'}} transition={{duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}} onClick={()=> {setPage(page - 1), refetch()}} className="join-item btn border-2 border-white">«</motion.button>
        <motion.button initial={{borderColor: '#4d79ff'}} animate={{borderColor: '#1443ff'}} transition={{duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}} className="join-item btn border-2 border-white">Page {page}</motion.button>
        <motion.button initial={{borderColor: '#49d30d'}} animate={{borderColor: '#00e1ff'}} transition={{duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}} onClick={()=> {setPage(page + 1), refetch()}} className="join-item btn border-2 border-white">»</motion.button>
      </div>
      </div>
    </div>
  );
};

export default PageTopRated;
