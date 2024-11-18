import { useState } from "react";
import useTopRated from "../../../Hooks/useTopRated";
import Title from "../../../ReUsable/Title";


const PageTopRated = () => {
    const [page, setPage] = useState(1)
    const [topRated, loading, refetch] = useTopRated(page)
    return (
        <div>
            <Title title='Top Rated Movies'></Title>

            
        </div>
    );
};

export default PageTopRated;