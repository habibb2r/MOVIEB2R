import { useQuery } from "@tanstack/react-query";


const useCredits = (id) => {
  const key = import.meta.env.VITE_AUTHKEYMOVIE
    console.log(id)
    const {data : credits= [],  isLoading: loading, refetch } = useQuery({
        queryKey: ['credit'],
        queryFn: async()=>{
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `${key}`
                }
              };
              const res = await fetch(`${import.meta.env.VITE_MOVIELINK}/3/movie/${id}/credits?language=en-US`, options);
              return res.json();
        }
    })
    return [credits, loading, refetch] ;
};

export default useCredits;