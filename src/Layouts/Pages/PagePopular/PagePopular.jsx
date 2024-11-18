import { useState } from "react";
import usePopular from "../../../Hooks/usePopular";
import Title from "../../../ReUsable/Title";
import { AiTwotoneHeart, AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Popular.css";
import MovieCard from "../../../ReUsable/MovieCard";
import {motion} from 'framer-motion'


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
            popular?.results?.map((item) => (
              <MovieCard key={item.id} item={item}></MovieCard>
            ))
          )}
        </div>
        <div className="flex justify-center items-center gap-2 py-[2%]">
      <div className="join">
        <motion.button initial={{borderColor: '#ff6b6b'}} animate={{borderColor: '#ff0597'}} transition={{duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}} onClick={()=> {setPage(page - 1), refetch()}} className="join-item btn border-2 border-white">«</motion.button>
        <motion.button initial={{borderColor: '#4d79ff'}} animate={{borderColor: '#1443ff'}} transition={{duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}} className="join-item btn border-2 border-white">Page {page}</motion.button>
        <motion.button initial={{borderColor: '#49d30d'}} animate={{borderColor: '#00e1ff'}} transition={{duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}} onClick={()=> {setPage(page + 1), refetch()}} className="join-item btn border-2 border-white">»</motion.button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default PagePopular;
