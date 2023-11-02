import { useQuery } from "@tanstack/react-query";


const usePopular = (num) => {
  const key = import.meta.env.VITE_AUTHKEYMOVIE
    const {data : popular= [],  isLoading: loading, refetch } = useQuery({
        queryKey: ['popular'],
        queryFn: async()=>{
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `${key}`
                }
              };
              const res = await fetch(`${import.meta.env.VITE_MOVIELINK}/3/movie/popular?language=en-US&page=${num}`, options);
              return res.json();
        }
    })
    return [popular, loading, refetch] ;
};

export default usePopular;