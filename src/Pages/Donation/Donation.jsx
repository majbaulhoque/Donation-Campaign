import { useEffect } from "react";
import { useState } from "react";

import DonationCart from "./DonationCart";
import { Helmet } from "react-helmet-async";

const Donation = () => {
    const [donation, setDonation] = useState([]);

    const [noFound, setNoFound] = useState(false)
    const [isShow, setIsShow] = useState(false)

    const totalCards = 12;

    useEffect(() => {
        const donationCards = JSON.parse(localStorage.getItem('donations'));
        if (donationCards) {
            setDonation(donationCards)
        } else {
            setNoFound("No Data Found !!!")
        }
    }, [])

    const handleRemove = () => {
        localStorage.clear();
        setDonation([]),
            setNoFound("No Data Found !!!")
    }

    useEffect(() => {
        // Store the total and donated cards in local storage
        localStorage.setItem('totalCards', totalCards);
        localStorage.setItem('donatedCards', donation.length);
    }, [donation]);

    return (
        <div>
            <Helmet>
                <title>Donation Campaign | Donation</title>
            </Helmet>
            {
                noFound ? <p className="h-[60vh] flex items-center text-center justify-center text-3xl font-bold text-semibold">{noFound}</p> :
                    <div>
                        {
                            donation.length > 0 && <button onClick={handleRemove} className="bg-blue-600 text-white px-4 py-1 my-12 block mx-auto">Delete ALL</button>
                        }
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto">
                            {
                                isShow ? donation?.map(donation => <DonationCart key={donation.id} donation={donation}></DonationCart>)
                                    :
                                    donation?.slice(0, 4).map(donation => <DonationCart key={donation.id} donation={donation}></DonationCart>)
                            }
                        </div>
                    </div>

            }
            <div>
                {
                    donation.length > 4 && <button onClick={() => setIsShow(!isShow)} className="bg-green-600 text-white px-4 py-1 my-12 block mx-auto ">{isShow ? 'See Less' : 'See More'}</button>
                }
            </div>
        </div>
    );
};

export default Donation;