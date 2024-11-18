import { useQuery } from "@tanstack/react-query";


const useTopRated = (page) => {
  const key = import.meta.env.VITE_AUTHKEYMOVIE
  let pageNo = page || 1
    const {data : topRated= [],  isLoading: loading, refetch } = useQuery({
        queryKey: ['topRated'],
        queryFn: async()=>{
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `${key}`
                }
              };
              const res = await fetch(`${import.meta.env.VITE_MOVIELINK}/3/movie/top_rated?page=${pageNo}`, options);
              return res.json();
        }
    })
    return [topRated, loading, refetch] ;
};

export default useTopRated;