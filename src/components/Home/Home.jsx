import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Gadgets from "../Gadgets/Gadgets";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="flex gap-4 justify-center items-start">
            <Categories></Categories>
            <Gadgets></Gadgets>
            </div>
        </div>
    );
};

export default Home;