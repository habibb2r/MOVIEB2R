import { useQuery } from "@tanstack/react-query";
import useCredits from "./useCredits";



const useDetails = (id) => {
  const key = import.meta.env.VITE_AUTHKEYMOVIE
    // const credits = signal(id)
    const [credits]= useCredits(id);
    console.log(id)
    const {data : info= [],  isLoading: creditloading, refetch } = useQuery({
        queryKey: ['details'],
        queryFn: async()=>{
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `${key}`
                }
              };
              const res = await fetch(`${import.meta.env.VITE_MOVIELINK}/3/movie/${id}?language=en-US`, options);
              return res.json();
        }
    })
    return [info, credits, creditloading, refetch] ;
};

export default useDetails;