import { useLoaderData } from "react-router-dom";

import Cards from "../../Component/Cards/Cards";



const Home = () => {
    const cards = useLoaderData();
    return (
        <div className="py-32">
            <div>
                <img src="../../../images/Rectangle 4281.png" className='mt-[-241px] mb-32  lg-w-full' alt="" />
            </div>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;