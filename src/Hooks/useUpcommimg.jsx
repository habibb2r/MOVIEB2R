import { useQuery } from "@tanstack/react-query";


const useUpcommimg = () => {
  const key = import.meta.env.VITE_AUTHKEYMOVIE
    const {data : upcoming= [],  isLoading: loading, refetch } = useQuery({
        queryKey: ['upcoming'],
        queryFn: async()=>{
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `${key}`
                }
              };
              const res = await fetch(`${import.meta.env.VITE_MOVIELINK}/3/movie/upcoming?page=2`, options);
              return res.json();
        }
    })
    return [upcoming, loading, refetch] ;
};

export default useUpcommimg;