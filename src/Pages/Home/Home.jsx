
import Hero from "../../Components/Hero/Hero";
import Offer from "../../Components/Offer/Offer";
import Shop from "../../Components/Shop/Shop";
import Sidebar from './../../Components/Sidebar/Sidebar';


const Home = () => {
    return (
        <div>
            <Hero/>
            <Shop/>
            <Sidebar/>
            <Offer/>
        </div>
    );
};

export default Home;