import { useQuery } from "@tanstack/react-query";


const useUpcommimg = () => {
    const {data : upcoming= [],  isLoading: loading, refetch } = useQuery({
        queryKey: ['upcoming'],
        queryFn: async()=>{
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWUyMDcwNDRhZjM1YjFmZGJiNTY1Mzk5NDdhZTQ5YSIsInN1YiI6IjYzZjhlZDQwNjhiMWVhMDA5ZTAwMjk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o1xRCs5jMfQEexRE_bA_qzz3G2-oLWNTQTG9FRm55gE'
                }
              };
              const res = await fetch(`${import.meta.env.VITE_MOVIELINK}/3/movie/upcoming?page=2`, options);
              return res.json();
        }
    })
    return [upcoming, loading, refetch] ;
};

export default useUpcommimg;