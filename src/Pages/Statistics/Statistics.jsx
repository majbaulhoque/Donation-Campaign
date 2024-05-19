import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const [totalCards, setTotalCards] = useState(0);
    const [donatedCards, setDonatedCards] = useState(0);

    useEffect(() => {
        const total = localStorage.getItem('totalCards');
        const donated = localStorage.getItem('donatedCards');
        setTotalCards(Number(total));
        setDonatedCards(Number(donated));
    }, []);

    const data = [
        { name: 'Donated', value: donatedCards },
        { name: 'Remaining', value: totalCards - donatedCards },
    ];

    const COLORS = ['#0088FE', '#FFBB28'];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
            <div className='mt-20'>
                <h1 className="text-center text-2xl font-bold my-5">Donation Statistics</h1>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
};

export default Statistics;
