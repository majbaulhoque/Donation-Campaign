import { useEffect } from "react";
import { useState } from "react";

const Donation = () => {
    const [donation, setDonation] = useState([]);

    const [noFound, setNoFound] = useState('')

    useEffect(()=>{
        const donationCards = JSON.parse(localStorage.getItem('donations'));
        if (donationCards) {
            setDonation(donationCards)
        }else{
            setNoFound("No Data Found !!!")
        }
    },[])
    return (
        <div>
            {
                noFound ? <p className="h-[60vh] flex items-center text-center justify-center text-3xl font-bold text-semibold">{noFound}</p> : <div></div>
            }
        </div>
    );
};

export default Donation;