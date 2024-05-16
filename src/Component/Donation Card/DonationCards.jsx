
import { Link } from "react-router-dom";


const DonationCards = ({ card }) => {
    const { id, picture, title, category, card_bg_color } = card || {};
    return (
        <div>
            <Link to={`/phones/${id}`}>
                <div className="card card-compact bg-base-100 shadow-xl ">
                    <figure>
                        <img src={picture} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2>{title}</h2>
                        <p className="text-xl">{category}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DonationCards;