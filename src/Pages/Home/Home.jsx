import { useLoaderData } from "react-router-dom";

import Cards from "../../Component/Cards/Cards";
import Banner from "../../Component/NavBar/Banner";



const Home = () => {
    const cards = useLoaderData();
    return (
        <div className="py-32">
            <div>
                <img src="../../../images/Rectangle 4281.png" className='mt-[-240px] mb-32 h-52 lg:h-full lg-w-full' alt="" />
                <Banner></Banner>
            </div>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;