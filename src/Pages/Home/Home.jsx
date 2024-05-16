import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import Cards from "../../Component/Cards/Cards";


const Home = () => {
    const cards = useLoaderData();
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;