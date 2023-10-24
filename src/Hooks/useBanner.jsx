import { useQuery } from "@tanstack/react-query";


const useBanner = () => {
    const key = import.meta.env.VITE_AUTHKEYMOVIE

    const {data : trendings= [],  isLoading: loading, refetch } = useQuery({
        queryKey: ['movies'],
        queryFn: async()=>{
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `${key}`
                }
              };
              const res = await fetch(`${import.meta.env.VITE_MOVIELINK}/3/trending/movie/week`, options);
              return res.json();
        }
    })
    return [trendings, loading, refetch] ;
};

export default useBanner;