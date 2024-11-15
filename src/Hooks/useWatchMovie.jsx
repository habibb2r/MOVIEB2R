import { useQuery } from "@tanstack/react-query";


const useWatchMovie = () => {
    const key = import.meta.env.VITE_AUTHKEYMOVIE
    const {data: watchMovie, isLoading: loading, refetch} = useQuery({
        queryKey: ['watchMovie'],
        queryFn: async()=>{
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `${key}`
                }
              };
              
              const res = await fetch('https://api.themoviedb.org/3/movie/933260/videos?language=en-US', options)
              return res.json();
            }
               
    })
    return [watchMovie, loading, refetch]
    
};

export default useWatchMovie;