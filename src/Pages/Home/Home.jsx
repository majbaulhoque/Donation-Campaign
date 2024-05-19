import { useLoaderData } from "react-router-dom";

import Cards from "../../Component/Cards/Cards";
import Banner from "../../Component/NavBar/Banner";
import { Helmet } from "react-helmet-async";



const Home = () => {
    const cards = useLoaderData();
    return (
        <div className="py-32">
            <Helmet>
                <title>Donation Campaign | Home</title>
            </Helmet>
            <div>
                <img src="../../../images/Rectangle 4281.png" className='mt-[-240px] mb-32 h-52 lg:h-full lg-w-full' alt="" />
                <Banner></Banner>
            </div>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;