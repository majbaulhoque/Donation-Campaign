
const DonationItemCard = ({ donation }) => {
    const { id, picture, title, category, card_bg_color, price, description } = donation || {};

    const handleAddToDonate = () => {

        const addToDonationArray = []

        const donationCards = JSON.parse(localStorage.getItem('donations'));

        if (!donationCards) {
            addToDonationArray.push(donation);
            localStorage.setItem('donations', JSON.stringify(addToDonationArray));
        } else {

            const isExist = donationCards.find(donation => donation.id === id);
            if (!isExist) {
                addToDonationArray.push(...donationCards, donation);
                localStorage.setItem('donations', JSON.stringify(addToDonationArray))
            } else{
                console.log("alraadey added")
            }



        }


    }

    return (
        <div className="flex  justify-center h-screen">
            <div>
                <div className="items-center text-center">
                    <img className="w-[800px] h-[500px] relative" src={picture} alt="" />
                    <button onClick={handleAddToDonate} className=" px-4 py-1 bg-[#ff444a] absolute -mt-12 -ml-96">Donate ${price}</button>
                </div>
                <div className="relative -mt-14 ml-4">

                </div>
                <div>

                </div>
            </div>

        </div>
    );
};

export default DonationItemCard;