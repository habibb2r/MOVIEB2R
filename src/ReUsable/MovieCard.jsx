import { AiTwotoneHeart, AiTwotoneStar } from "react-icons/ai";
import { FaHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addBookMarks } from "../Redux/slices/bookMarkSlice";
import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import useBookMarkList from "../Hooks/useBookMarkList";
import { motion } from "framer-motion"


const MovieCard = ({item}) => {
    // console.log(item)
    const {user} = useContext(AuthContext)
    const [, , , refetch] = useBookMarkList()
    const dispatch = useDispatch()
    const handleAdd = (item)=>{
        const mainItem = {email : user?.email, movie: item.title, movie_id: item.id, picture : item.poster_path || item.backdrop_path, rate : item.vote_average, total_vote: item.vote_count, release : item.release_date}
        dispatch(addBookMarks(mainItem))
        refetch()
       }
    return (
        <motion.div  initial={{ boxShadow: '0px 0px 15px 0px #bb00ff' }}
        animate={{ boxShadow: '0px 0px 15px 0px #ff295e' }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }} className=" mx-auto px-3 rounded-md bg-[#2d0c50] shadow-xl relative pb-[5%]">
                        <figure><img className="h-[250px] rounded-md shadow-lg shadow-[#296d8d]" src={`https://image.tmdb.org/t/p/original${item.backdrop_path? item.backdrop_path : item.poster_path}`} alt="Shoes" /></figure>
                        <div className="px-[5%] py-[4%] text-center  text-red-500">
                            <motion.h2 initial={{color: '#5bf0fb'}} animate={{color: '#fd3ae3'}} transition={{duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}} className="font-semibold text-2xl py-[5%]">{item.title}</motion.h2>
                            <div className="flex justify-center items-center gap-3 my-4">
                                    <motion.div initial={{borderColor: '#f506f9'}} animate={{borderColor: '#ff0505'}} transition={{duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}} className="absolute top-[200px] left-[5%] bg-black bg-opacity-20 backdrop-blur-md px-[2%] py-2 rounded-lg flex justify-center items-center gap-1 border-x-2">
                                        <p className="text-info font-semibold">{Math.round(item.vote_average)}/10</p>
                                        <AiTwotoneStar className="text-accent"></AiTwotoneStar>
                                    </motion.div>
                                    <motion.div initial={{borderColor: '#ff0505'}} animate={{borderColor: '#78de12'}} transition={{duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}} className="absolute top-[200px] right-[5%] bg-black bg-opacity-20 backdrop-blur-md px-3 py-2 rounded-lg flex justify-center items-center gap-1 border-x-2">
                                        <p className="text-info font-semibold">Liked : {item.vote_count}</p>
                                        <AiTwotoneHeart className="text-red-700"></AiTwotoneHeart>
                                    </motion.div>
                            </div>
                          <div className="card-actions justify-evenly items-center">
                            <Link to={`/details/${item.id}`}><motion.span initial={{borderColor: '#fd3ae3'}} animate={{borderColor: '#ff0000'}} transition={{duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}} className="bg-black text-white px-4 py-2 rounded-xl backdrop-blur-md bg-opacity-50 absolute bottom-[4%] left-[4%] border-y-2 font-semibold">Watch info</motion.span></Link>
                            <button onClick={()=>handleAdd(item)} className="text-3xl text-yellow-400 absolute bottom-[5%] right-[4%]"><FaHeart/></button>
                          </div>
                        </div>
            </motion.div>
    );
};

export default MovieCard;