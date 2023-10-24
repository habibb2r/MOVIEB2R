import Banner from "./Components/Banner/Banner";
import Popular from "./Components/Popular/Popular";
import UpComing from "./Components/UpComming/UpComing";
import './Home.css'

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <UpComing></UpComing>
            <Popular></Popular>
        </div>
    );
};

export default Home;