import useTopRated from "../../../../../Hooks/useTopRated";
import Title from "../../../../../ReUsable/Title";
import CardTop from "./CardTop";


const TopRated = () => {
    const [topRated, loading, refetch] = useTopRated()
    console.log('Top',topRated)
    return (
        <div>
            <Title title={'Top Rated Movies'}></Title>
            <div>
                {
                    topRated?.results.map(item => <CardTop key={item.id} item={item}></CardTop>)
                }
            </div>
            
        </div>
    );
};

export default TopRated;