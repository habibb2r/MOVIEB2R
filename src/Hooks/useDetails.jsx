import { useQuery } from "@tanstack/react-query";
import useCredits from "./useCredits";



const useDetails = (id) => {
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
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWUyMDcwNDRhZjM1YjFmZGJiNTY1Mzk5NDdhZTQ5YSIsInN1YiI6IjYzZjhlZDQwNjhiMWVhMDA5ZTAwMjk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o1xRCs5jMfQEexRE_bA_qzz3G2-oLWNTQTG9FRm55gE'
                }
              };
              const res = await fetch(`${import.meta.env.VITE_MOVIELINK}/3/movie/${id}?language=en-US`, options);
              return res.json();
        }
    })
    return [info, credits, creditloading, refetch] ;
};

export default useDetails;