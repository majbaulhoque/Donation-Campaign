import { useEffect, useState } from "react";


const useGetCard = () => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch('/card.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return [data];
};

export default useGetCard;