import swal from "sweetalert";

const DonationItemCard = ({ donation }) => {
    const { id, picture, title, category, price, description } = donation || {};

    const handleAddToDonate = () => {

        const addToDonationArray = []

        const donationCards = JSON.parse(localStorage.getItem('donations'));

        if (!donationCards) {
            addToDonationArray.push(donation);
            localStorage.setItem('donations', JSON.stringify(addToDonationArray));
            swal("Good Job!", "Your Donation is added successfully", "success");
        } else {

            const isExist = donationCards.find(donation => donation.id === id);
            if (!isExist) {
                addToDonationArray.push(...donationCards, donation);
                localStorage.setItem('donations', JSON.stringify(addToDonationArray))
                swal("Good Job!", "Your Donation is added successfully", "success");
            } else {
                swal("Error!", "No Duplicate", "error");
            }
        }
    }

    return (
        <div className="max-w-full mx-auto p-4">
            <div className="relative text-center">
                <img className="w-full lg:w-[600px]  rounded-t-lg mx-auto" src={picture} alt={title} />
                <button onClick={handleAddToDonate} className="px-4 py-2 bg-[#ff444a] lg:absolute bottom-4 lg:ml-[-285px] lg:m-52 mt-4 ml-[-170px] text-white font-bold rounded ">
                    Donate ${price}
                </button>
                <div className="p-4 lg:text-left text-justify lg:w-[600px] lg:ml-80">
                    <p className="text-xl font-bold py-2 md:py-4">{category}</p>
                    <p className="text-sm md:text-base">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationItemCard;
