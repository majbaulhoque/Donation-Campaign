import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Custom hook to get window size
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};

const Statistics = () => {
    const [totalCards, setTotalCards] = useState(0);
    const [donatedCards, setDonatedCards] = useState(0);
    const size = useWindowSize();

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

    // Define chart size based on window size
    const chartSize = size.width < 640 ? size.width * 0.8 : 400; // 80% of screen width for small devices

    return (
        <div className="flex justify-center items-center h-screen p-5 md:p-10">
            <Helmet>
                <title>Donation Campaign | Statistics</title>
            </Helmet>
            <div className="mt-20 w-full max-w-lg">
                <h1 className="text-center text-2xl font-bold my-5">Donation Statistics</h1>
                <div className="flex justify-center">
                    <div className="w-full sm:w-96 md:w-1/2 lg:w-1/3">
                        <PieChart width={chartSize} height={chartSize}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                outerRadius="80%"
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
            </div>
        </div>
    );
};

export default Statistics;
