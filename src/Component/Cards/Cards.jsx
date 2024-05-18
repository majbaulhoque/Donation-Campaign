import DonationCards from "../Donation Card/DonationCards";


const Cards = ({cards}) => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 -mt-10">
                {
                    cards?.map(card => <DonationCards key={card.id} card={card}></DonationCards>)
                }
            </div>
        </div>
    );
};

export default Cards;