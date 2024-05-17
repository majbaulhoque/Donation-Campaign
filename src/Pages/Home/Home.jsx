import { useLoaderData } from "react-router-dom";

import Cards from "../../Component/Cards/Cards";



const Home = () => {
    const cards = useLoaderData();
    return (
        <div className="py-32">
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;