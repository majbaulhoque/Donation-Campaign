import { useNavigate } from "react-router-dom";

const DonationCart = ({ donation }) => {
    const { id, picture, title, category, card_bg_color, text_button_bg_color, category_bg_color, price } = donation || {};

    const navigate = useNavigate();
    const handleViewDetails = () => {
        navigate('/viewDetails');
    };

    const cardStyle = {
        backgroundColor: card_bg_color,
    };
    const categoryStyle = {
        color: text_button_bg_color,
    };
    const buttonStyle = {
        backgroundColor: category_bg_color,
    };

    return (
        <div className="px-4">
            <div style={cardStyle} className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                <img className="w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg lg:h-44" src={picture} alt={title} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <button className="w-20 text-black font-semibold " style={buttonStyle}>{title}</button>
                    <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight" style={categoryStyle}>{category}</h5>
                    <p>{price}</p>
                    <button onClick={handleViewDetails} className="w-28 mt-4 font-semibold" style={buttonStyle}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default DonationCart;
