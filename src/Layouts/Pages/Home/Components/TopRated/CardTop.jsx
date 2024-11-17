import React from 'react';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

const CardTop = ({item, index}) => {
    console.log(item)
    return (
        <Link className='p-5'>
            <img className='hover:scale-110 ease-in-out duration-300' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" />
            <motion.p initial={{color: '#c505fa'}} animate={{color: '#78de12'}} transition={{duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}} className='absolute top-[-5px] left-2 text-6xl font-bold'>{index}</motion.p>
        </Link>
    );
};

export default CardTop;