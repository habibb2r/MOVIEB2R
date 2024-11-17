import React from 'react';

const CardTop = ({item}) => {
    console.log(item)
    return (
        <div>
            <img className='' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" />
        </div>
    );
};

export default CardTop;