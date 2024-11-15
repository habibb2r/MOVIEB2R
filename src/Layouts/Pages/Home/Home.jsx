import Banner from "./Components/Banner/Banner";
import Popular from "./Components/Popular/Popular";
import TopRated from "./Components/TopRated/TopRated";
import UpComing from "./Components/UpComming/UpComing";
import './Home.css'

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <UpComing></UpComing>
            <Popular></Popular>
            <TopRated></TopRated>
        </div>
    );
};

export default Home;