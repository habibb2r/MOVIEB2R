import React from 'react';

const CardTop = ({item, index}) => {
    console.log(item)
    return (
        <div>
            <img className='' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" />
            <p className='absolute top-2 left-2 text-4xl font-bold text-purple-400'>{index}</p>
        </div>
    );
};

export default CardTop;