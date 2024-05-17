import { useNavigate } from "react-router-dom";

const DonationCart = ({ donation }) => {
    const { id, picture, title, category, card_bg_color, price, description } = donation || {};

    const navigate = useNavigate()
    const handleViewDetails = () => {
        navigate('/viewDetails')
    }
    return (
        <div>
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl ">
                <img className="w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg lg:h-36" src={picture} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <p>{title}</p>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight ">{category}</h5>
                    <p>{price}</p>

                    <button onClick={handleViewDetails}>View Details</button>
                </div>
            </a>

        </div>
    );
};

export default DonationCart;