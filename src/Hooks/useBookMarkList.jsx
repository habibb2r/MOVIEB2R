import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import axios from "axios";


const useBookMarkList = () => {
    const {user} = useContext(AuthContext)

    const {data: bookmarks = [], isLoading: loading, refetch} = useQuery({
        queryKey:['bookmarks', user?.email],
        queryFn: async()=>{
            const res = await axios.get(`http://localhost:5000/bookMarks?email=${user?.email? user.email : 'abc'}`)
            return res.data
        }
    })
    return [bookmarks, loading, refetch]
    
};

export default useBookMarkList;