import { useParams } from "react-router-dom";
import Title from "../../../ReUsable/Title";

import useDetails from "../../../Hooks/useDetails";
import {BiTimer} from 'react-icons/bi'
import Marquee from "react-fast-marquee";
// import useCredits from "../../../Hooks/useCredits";



const DetailsMovie = () => {
    const id = useParams();
    const[info, credits, creditloading, ]= useDetails(id.id);
    // const[credits, creditloading , ] = useCredits(id.id);
    
   console.log(info, credits)
        
    return (
        <div>
            <Title title='Movie Information'></Title>
            <div className="pt-4">
            {
                        creditloading  ? <span className="loading loading-bars w-full"></span> :
                        <div className="flex flex-col md:flex-row justify-center items-center md:items-start px-3 gap-5 md:gap-3">
                            <div className="md:w-1/3 flex flex-col items-start gap-3">
                                <img className="h-[450px] rounded-lg" src={`https://image.tmdb.org/t/p/original${info.poster_path? info.poster_path : info.backdrop_path}`} alt="" />
                                <h1 className="text-xl text-info">{info.title}</h1>
                                <p className="text-accent text-sm font-thin">{info.tagline}</p>
                                <div className="flex items-center">
                                    <BiTimer className="text-2xl text-accent"></BiTimer>
                                    <p className=" text-accent"> {info.runtime} min</p>
                                </div>
                                <div className="badge badge-secondary  badge-outline">{info.status}</div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <p className="text-info text-justify text-lg"><span className="font-semibold text-accent">Movie Overview :</span> {info.overview}</p>
                                <div>
                                    <h2 className="text-2xl text-accent my-5">Cast</h2>
                                    <Marquee speed={20}>
                                        {
                                            credits.cast.map(credit => <div className="mx-5 text-center" key={credit.id}>
                                                <img className="h-[200px] rounded-lg" src={`https://image.tmdb.org/t/p/original${credit.profile_path? credit.profile_path : ''}`} alt="" />
                                                <p className="text-info">{credit.character}</p>
                                                <p className="text-accent">{credit.name}</p>
                                            </div>)
                                        }
                                    </Marquee>
                                </div>
                                <div className="flex justify-center items-center mt-6 gap-5">
                                    <p className="text-error font-semibold">Budget : <span className="badge badge-accent badge-outline">{info.budget}$</span></p>
                                    <p className="text-error font-semibold">Revenue : <span className="badge badge-accent badge-outline">{info.revenue}$</span></p>
                                </div>
                               <div className="mt-7">
                                <h1 className="text-2xl font-semibold text-accent mb-3">Production Companies : </h1>
                                <div className="flex items-center justify-center gap-3 ">
                                        
                                        {
                                            info.production_companies.map(com => 
                                                <div className="bg-white p-2" key={com.id}>
                                                        <img className="h-[100px] " src={`https://image.tmdb.org/t/p/original${com.logo_path? com.logo_path : ''}`} alt="" />
                                                </div>
                                                )
                                        }
                                    </div>
                               </div>
                            </div>
                        </div>
                        
                    }
            </div>
        </div>
    );
};

export default DetailsMovie;