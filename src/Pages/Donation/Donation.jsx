import { useEffect } from "react";
import { useState } from "react";
import DonationItemCard from "../Donation Item/DonationItemCard";
import DonationCart from "./DonationCart";

const Donation = () => {
    const [donation, setDonation] = useState([]);

    const [noFound, setNoFound] = useState('')

    useEffect(() => {
        const donationCards = JSON.parse(localStorage.getItem('donations'));
        if (donationCards) {
            setDonation(donationCards)
        } else {
            setNoFound("No Data Found !!!")
        }
    }, [])

    const handleRemove = () =>{
        localStorage.clear();
        setDonation([]),
        setNoFound("No Data Found !!!")
    }
    return (
        <div>
            {
                noFound ? <p className="h-[60vh] flex items-center text-center justify-center text-3xl font-bold text-semibold">{noFound}</p> :

                <div>
                    {
                        donation.length > 0 && <button onClick={handleRemove} className="bg-blue-600 text-white px-4 py-1 my-5 block mx-auto">Delete ALL</button>
                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            donation?.map(donation => <DonationCart key={donation.id} donation={donation}></DonationCart>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;