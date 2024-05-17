import { Link } from "react-router-dom";

const DonationCards = ({ card }) => {
    const { id, picture, title, category, card_bg_color, text_button_bg_color, category_bg_color } = card || {};
    const cardStyle = {
        backgroundColor: card_bg_color
    };
    const categoryStyle = {
        color: text_button_bg_color
    };
    const buttonStyle = {
        backgroundColor: category_bg_color,
    };

    return (
        <div>
            <Link to={`/phones/${id}`}>
                <div className="card card-compact bg-base-100 shadow-xl" style={cardStyle}>
                    <figure>
                        <img src={picture} alt="Donation Item" />
                    </figure>
                    <div className="card-body">
                        <button className="w-20 text-black font-semibold" style={buttonStyle}>{title}</button>
                        <p className="text-xl font-semibold" style={categoryStyle}>{category}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DonationCards;
