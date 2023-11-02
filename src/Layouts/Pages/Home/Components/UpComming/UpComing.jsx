import Marquee from "react-fast-marquee";
import Title from "../../../../../ReUsable/Title";
import useUpcommimg from "../../../../../Hooks/useUpcommimg";


const UpComing = () => {
    const [upcoming,loading, ] = useUpcommimg();
    return (
        <div className="py-10">
            <Title title='upcoming movies'></Title>
             <Marquee className="pt-10 text-center">
                  {
                    loading ? <span className="loading loading-bars loading-lg justify-center"></span> : 
                    upcoming.results.map(movie=>
                        <div key={movie.id} className="card w-96 bg-base-100 shadow-md shadow-indigo-300 mx-5 ">
                        <figure><img className='h-[500px]' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Shoes" /></figure>
                        
                      </div>
                      )
                  }  
             </Marquee>
        </div>
    );
};

export default UpComing;