import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DonationItemCard from './DonationItemCard';

const DonationItem = () => {
    const [donation, setDonation] = useState()

    const { id } = useParams();
    // console.log(params)

    const donations = useLoaderData();

    useEffect(() => {
        const findDonation = donations.find(donation => donation.id.toString() === id)
        setDonation(findDonation)
    }, [donations, id])
    

    // console.log(donations)

    return (
        <div>
            <DonationItemCard donation={donation}></DonationItemCard>
        </div>
    );
};

export default DonationItem;

